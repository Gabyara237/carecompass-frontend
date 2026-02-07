
import React from 'react';
import { Link } from 'react-router-dom';

const ClinicCard = ({clinic}) =>{
  const languageLabels = {
    en: 'EN',
    es: 'ES',
    ht: 'HT',
    fr: 'FR',
    zh: 'ZH',
    vi: 'VI',
    ar: 'AR',
    ko: 'KO',
    tl: 'TL',
    pt: 'PT',
    ru: 'RU'
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <div className="p-5 border-b border-gray-200">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 flex-1 pr-3">
            {clinic.name}
          </h3>
          {clinic.distance != null && (
            <span className="text-blue-600 font-semibold text-sm whitespace-nowrap">
              {clinic.distance} km
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-600">
          {clinic.address}, {clinic.city}, {clinic.state}
        </p>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {clinic.languages?.slice(0,6).map(lang => (
            <span 
              key={lang} 
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full border border-blue-200"
            >
              {languageLabels[lang.toLowerCase()] || lang.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {clinic.acceptsUninsured && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-200">
                ✓ Accepts Uninsured
            </span>

          )}
          
          {clinic.hasSlidingScale && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full border border-yellow-200">
              Sliding Scale
            </span>
          )}
        </div>

        {clinic.costs && (
          <p className="text-sm text-gray-700 mb-4">
            {clinic.costs}
          </p>
        )}

        <Link
          to={`/clinics/${clinic._id}`}
          className="block w-full text-center bg-[#4267B2] hover:bg-[#365899] text-white px-4 py-2.5 rounded-lg font-semibold transition-colors shadow-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ClinicCard;