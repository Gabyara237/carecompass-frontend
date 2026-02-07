import { useState } from 'react';


import LocationIcon from '../icons/LocationIcon';
import SearchIcon from '../icons/SearchIcon'

const SearchFilters =({filters,onFilterChange,onSearch,loading}) =>{  

    const [error, setError] = useState(null);
    const [locating, setLocating] = useState(false);

    const handleChange = (e) => {
        const {name, value, type, checked}=e.target;

        const parsedValue =
            type === 'checkbox'?checked: name=== 'radius'? Number(value):value;

        if (name==='zipCode') {
            onFilterChange({
                ...filters,
                zipCode: parsedValue,
                userLocation: null,
            });
            return;
        }

        onFilterChange({
            ...filters,
            [name]: parsedValue,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Search Clinics</h2>
            
            {error && (
                <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700">
                    {error}
                </div>
            )}
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Zip Code or City
                </label>
                <input
                    type="text"
                    name="zipCode"
                    value={filters.zipCode}
                    onChange={handleChange}
                    placeholder="e.g., 94601 or Oakland"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                    Enter zip code or city name (e.g., "San Francisco, CA")
                </p>
            </div>
            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Radius: {filters.radius} km
                </label>
                <input
                    type="range"
                    name="radius"
                    min="5"
                    max="50"
                    step="5"
                    value={filters.radius}
                    onChange={handleChange}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5 km</span>
                    <span>50 km</span>
                </div>
            </div>

            <button
                type="button"
                onClick={() => {
                    setError(null);

                    if (!navigator.geolocation) {
                        setError('Geolocation is not supported by your browser.');
                        return;
                    }

                    setLocating(true);

                    navigator.geolocation.getCurrentPosition(
                    (position) => {
                        onFilterChange({
                        ...filters,
                        zipCode: '',
                        userLocation: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                        });

                        setLocating(false);
                        setTimeout(() => onSearch(), 100);
                    },
                    (err) => {
                        setLocating(false);
                        setError('Could not get your location. Please enter zip code.');
                        console.error('Error:', err);
                    }
                    );
                }}
                className="w-full bg-green-700 hover:bg-green-900 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-md mb-6 flex items-center justify-center space-x-2"
                disabled={loading || locating}
            >
                <LocationIcon/>
                <span>{locating ? 'Locating...' : 'Use My Location'}</span>
            </button>


            <h3 className="text-lg font-bold text-gray-900 mb-4">Advanced Filters</h3>
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Language
                </label>
                <select
                    name="language"
                    value={filters.language}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Any Language</option>
                    <option value="es">Spanish</option>
                    <option value="en">English</option>
                    <option value="ht">Haitian Creole</option>
                    <option value="fr">French</option>
                    <option value="zh">Chinese</option>
                    <option value="vi">Vietnamese</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Specialty
                </label>
                <select
                    name="specialty"
                    value={filters.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Any Specialty</option>
                    <option value="primary_care">Primary Care</option>
                    <option value="dental">Dental</option>
                    <option value="mental_health">Mental Health</option>
                    <option value="womens_health">Women's Health</option>
                    <option value="pediatrics">Pediatrics</option>
                </select>
            </div>
            <div className="mb-6">
                <label className="flex items-center cursor-pointer p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <input
                        type="checkbox"
                        name="acceptsUninsured"
                        checked={filters.acceptsUninsured}
                        onChange={handleChange}
                        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                        Accepts patients without insurance
                    </span>
                </label>
            </div>

            <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors shadow-md flex items-center justify-center space-x-2 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-900 text-white'}`}
            >
                <SearchIcon/>
                <span>{loading ?'Searching...':'Search Clinics'}</span>
            </button>
        </form>
    );
}

export default SearchFilters;