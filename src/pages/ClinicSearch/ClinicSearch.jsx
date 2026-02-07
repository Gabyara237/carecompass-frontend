import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClinicMap from '../../components/ClinicMap/ClinicMap';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import ClinicCard from '../../components/ClinicCard/ClinicCard';


const API_BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

const ClinicSearch =()=> {
  const [clinics, setClinics]= useState([]);
  const [loading, setLoading] =useState(false);
  const [mapCenter, setMapCenter] = useState([37.8044, -122.2711]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    zipCode: '',
    radius: 10,
    language: '',
    specialty: '',
    acceptsUninsured: false,
    userLocation: null
  });


  const searchClinics = async () => {
    setError(null);
    setLoading(true);

    if (!API_BASE_URL) {
      console.error('Missing VITE_BACK_END_SERVER_URL');
      setLoading(false);
      return;
    }

    try {
      let lat = mapCenter[0];
      let lng = mapCenter[1];
      
      if (filters.zipCode && filters.zipCode.trim()){
        const geoRes= await axios.get(`${API_BASE_URL}/clinics/geocode`, {
          params: {q: filters.zipCode.trim()}
        });

        if (!geoRes.data?.found) {
          setError('Location not found. Try a different zip code or city.');
          setLoading(false);
          return;
        }

        lat = geoRes.data.data.lat;
        lng = geoRes.data.data.lng;
        setMapCenter([lat, lng]);

      }else if (filters.userLocation){
        lat = filters.userLocation.lat;
        lng = filters.userLocation.lng;
        setMapCenter([lat, lng]);
      }
      const params = {
        lat,
        lng,
        radius: filters.radius
      };


      if (filters.language) params.language = filters.language;
      if (filters.specialty) params.specialty = filters.specialty;
      if (filters.acceptsUninsured) params.acceptsUninsured = 'true';

      const response = await axios.get(`${API_BASE_URL}/clinics/nearby`,{params});
      
      setClinics(response.data.data);
    } catch (err) {
      console.error('Error fetching clinics:', err);
      setError('Error searching clinics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchClinics();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#2868c4]">Find Healthcare Clinics</h1>
          <p className="text-lg text-[#395b23]">Affordable, multilingual community health centers</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <SearchFilters 
                filters={filters}
                onFilterChange={setFilters}
                onSearch={searchClinics}
              />
              
            </div>
          </div>

          <div className="lg:col-span-3">
            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700">
                {error}
              </div>
            )}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="h-[500px] relative">
                {loading ? (
                  <div className="h-full flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading clinics...</p>
                    </div>
                  </div>
                ) : (
                  <ClinicMap 
                    clinics={clinics}
                    center={mapCenter}
                    zoom={12}
                  />
                )}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-blue-900">
                {clinics.length} Clinic{clinics.length !==1 ? 's':''} Found
              </h2>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Searching...</p>
              </div>
            ) : clinics.length ===0 ?(
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-gray-600 text-lg">No clinics found. Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clinics.map(clinic => (
                  <ClinicCard key={clinic._id} clinic={clinic} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicSearch;