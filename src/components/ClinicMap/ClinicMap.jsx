import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {MapContainer,TileLayer, Marker,Popup, useMap} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


const ChangeView =({center,zoom})=> {
  const map=useMap();
  useEffect(() => {
    map.setView(center,zoom);
  }, [center, zoom,map]);
  return null;
}

const ClinicMap = ({clinics,center,zoom= 12}) => {
  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{height:'100%', width:'100%'}}
      className="rounded-lg shadow-lg"
    >
      <ChangeView center={center} zoom={zoom} />
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {clinics && clinics.map((clinic) => {
        if (!clinic?.location?.coordinates?.length) return null;
        const [lng, lat]= clinic.location.coordinates;
        
        return (
          <Marker 
            key={clinic._id} 
            position={[lat, lng]}
          >
            <Popup>
              <div className="min-w-[200px]">
                <h3 className="border-b border-gray-200 font-bold text-lg mb-2">{clinic.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{clinic.address}</p>
                
                {clinic.distance != null && (
                  <p className="text-sm font-semibold text-blue-600 mb-2">
                    📍 {clinic.distance} km away
                  </p>
                )}
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {clinic.languages?.slice(0,3).map(lang => (
                    <span key={lang} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {lang.toUpperCase()}
                    </span>
                  ))}
                </div>
                {clinic.acceptsUninsured && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    ✓ Accepts Uninsured
                  </span>
                )}
                
                <Link
                    to={`/clinics/${clinic._id}`}
                    className="leaflet-btn mt-3 block w-full text-center bg-[#4267B2] hover:bg-[#365899] text-white px-4 py-2.5 rounded-lg font-semibold transition-colors shadow-sm"
                >
                    View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default ClinicMap;