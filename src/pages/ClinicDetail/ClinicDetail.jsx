
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection.jsx'
import RatingIcon from '../../components/icons/RatingIcon.jsx'
import BackIcon from '../../components/icons/BackIcon.jsx'
import LocationIcon from '../../components/icons/LocationIcon.jsx';
import CallIcon from '../../components/icons/CallIcon.jsx';
import WebIcon from '../../components/icons/WebIcon.jsx';
import EmailIcon from '../../components/icons/EmailIcon.jsx';
 
function ClinicDetail() {
    const {id}= useParams();
    const navigate= useNavigate();
    const [clinic,setClinic]=useState(null);
    const [loading,setLoading]= useState(true);
    const [error,setError] =useState(null);

    const API_BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

    const fetchClinic = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_BASE_URL}/clinics/${id}`);
        setClinic(response.data.clinic);
        } catch (err) {
            console.error('Error fetching clinic:', err);
            setError('Clinic not found');
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchClinic();
    }, [id]);

    const handleReviewsUpdated = () => {
        
        fetchClinic();
    };
    if (loading) {
        return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading clinic details...</p>
            </div>
        </div>
        );
    }

    if (error || !clinic) {
        return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinic Not Found</h2>
                <p className="text-gray-600 mb-6">{error || 'The clinic you are looking for does not exist.'}</p>
                <Link
                    to="/search"
                    className="inline-block bg-[#4267B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#365899] transition-colors"
                >
                    Back to Search
                </Link>
            </div>
        </div>
        );
    }

    const languageLabels = {
        en: 'English',
        es: 'Español',
        ht: 'Kreyòl Ayisyen',
        fr: 'Français',
        zh: 'Chinese',
        vi: 'Vietnamese',
        ar: 'Arabic',
        ko: 'Korean',
        tl: 'Tagalog',
        pt: 'Portuguese',
        ru: 'Russian'
    };

    const specialtyLabels = {
        primary_care: 'Primary Care',
        dental: 'Dental',
        mental_health: 'Mental Health',
        womens_health: "Women's Health",
        pediatrics: 'Pediatrics',
        geriatrics: 'Geriatrics',
        urgent_care: 'Urgent Care',
        vision: 'Vision',
        substance_abuse: 'Substance Abuse',
        chronic_disease: 'Chronic Disease Management'
    };

    const daysOfWeek = ['monday','tuesday','wednesday','thursday','friday', 'saturday','sunday'];
    const today =daysOfWeek[new Date().getDay()=== 0 ? 6 :new Date().getDay() -1];

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <BackIcon/>
                        <span className="font-medium">Back to Results</span>
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-8">
            
                <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{clinic.name}</h1>
                    
                            <div className="flex flex-wrap gap-2 mb-4">
                                {clinic.acceptsUninsured && (
                                    <span className="inline-flex items-center space-x-1 px-3 py-1.5 bg-green-100 text-green-800 text-sm font-semibold rounded-full border border-green-200"> 
                                        ✓ Accepts Uninsured
                                    </span>
                                )}
                                
                                {clinic.hasSlidingScale && (
                                    <span className="px-3 py-1.5 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full border border-yellow-200">
                                        💰 Sliding Scale Fees
                                    </span>
                                )}

                                {clinic.isVerified && (
                                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">
                                        ✓ Verified
                                    </span>
                                )}
                            </div>

                            {clinic.averageRating > 0 && (
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <RatingIcon
                                            key={i}
                                            index={i}
                                            rating={clinic.averageRating}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        {clinic.averageRating.toFixed(1)} ({clinic.reviews?.length || 0} reviews)
                                    </span>
                                </div>
                            )}
                        </div>

                        {clinic.distance && (
                            <div className="text-right">
                                <span className="text-2xl font-bold text-blue-600">{clinic.distance} km</span>
                                <p className="text-sm text-gray-500">away</p>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a
                            href={clinic.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 bg-[#4267B2] hover:bg-[#365899] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
                        >
                            <LocationIcon/>
                            <span>Get Directions</span>
                        </a>

                        {clinic.phone && (
                            <a
                                href={`tel:${clinic.phone}`}
                                className="flex items-center justify-center space-x-2 bg-[#5B8C51] hover:bg-[#4A7341] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
                            >
                                <CallIcon/>
                                <span>Call Now</span>
                            </a>
                        )}

                        {clinic.website && (
                            <a 
                                href={clinic.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold transition-colors"
                            >
                                <WebIcon/>
                                <span>Visit Website</span>
                            </a>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                    <div className="lg:col-span-2 space-y-6">
                    
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                            
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <LocationIcon color={"text-gray-400"}/>
                                    <div>
                                        <p className="font-medium text-gray-900">{clinic.address}</p>
                                        <p className="text-gray-600">{clinic.city}, {clinic.state} {clinic.zipCode}</p>
                                    </div>
                                </div>

                                {clinic.phone && (
                                    <div className="flex items-center space-x-3">
                                        <CallIcon color={"text-gray-400"}/>
                                        <a href={`tel:${clinic.phone}`} className="text-blue-600 hover:text-blue-800 font-medium">
                                            {clinic.phone}
                                        </a>
                                    </div>
                                )}

                                {clinic.email && (
                                <div className="flex items-center space-x-3">
                                    <EmailIcon color={"text-gray-400"}/>
                                    <a href={`mailto:${clinic.email}`} className="text-blue-600 hover:text-blue-800 font-medium">
                                        {clinic.email}
                                    </a>
                                </div>
                                )}

                                {clinic.website && (
                                <div className="flex items-center space-x-3">
                                    <WebIcon color={"text-gray-400"} />
                                    <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                                        Visit website
                                    </a>
                                </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Languages Spoken</h2>
                            <div className="flex flex-wrap gap-2">
                                {clinic.languages && clinic.languages.map(lang => (
                                <span 
                                    key={lang}
                                    className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200"
                                >
                                    {languageLabels[lang.toLowerCase()] || lang.toUpperCase()}
                                </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services & Specialties</h2>
                            
                            {clinic.specialties && clinic.specialties.length >0 &&(
                                <div className="mb-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Specialties:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {clinic.specialties.map(specialty => (
                                        <span 
                                            key={specialty}
                                            className="px-3 py-1.5 bg-purple-100 text-purple-800 text-sm font-medium rounded-lg"
                                        >
                                            {specialtyLabels[specialty] || specialty}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {clinic.services && clinic.services.length> 0 &&(
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Additional Services:</h3>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {clinic.services.map((service,index) => (
                                            <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                                                <span className="w-4 h-4 text-green-600" >
                                                    ✓
                                                </span>
                                                <span className="capitalize">{service.replace(/_/g, ' ')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost & Payment</h2>
                            
                            {clinic.costs && (
                                <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-gray-900 font-medium">{clinic.costs}</p>
                                </div>
                            )}

                            {clinic.paymentMethods && clinic.paymentMethods.length >0 &&(
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Payment Methods:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {clinic.paymentMethods.map(method => (
                                        <span 
                                            key={method}
                                            className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg capitalize"
                                        >
                                            {method.replace(/_/g, ' ')}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-4 space-y-2">
                                {clinic.acceptsMedicaid && (
                                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                                        <span className="w-4 h-4 text-green-600" >
                                            ✓
                                        </span>
                                        <span>Accepts Medicaid</span>
                                    </div>
                                    )}
                                    {clinic.acceptsMedicare && (
                                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                                        <span className="w-4 h-4 text-green-600" >
                                            ✓
                                        </span>
                                        <span>Accepts Medicare</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <ReviewsSection 
                            clinic={clinic} 
                            onReviewsUpdated={handleReviewsUpdated}
                        />
                    </div>

                <div className="lg:col-span-1 space-y-6">
                        
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Hours of Operation</h2>
                        
                        <div className="space-y-2">
                            {daysOfWeek.map(day => (
                            <div 
                                key={day} 
                                className={`flex justify-between text-sm ${ day === today ? 'font-bold text-blue-600':'text-gray-700'}`}
                            >
                                <span className="capitalize">{day}:</span>
                                <span>{clinic.hours[day] || 'Closed'}</span>
                            </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full ${
                                clinic.hours[today] && clinic.hours[today].toLowerCase() !== 'closed'? 'bg-green-100 text-green-800': 'bg-red-100 text-red-800'
                                }`}>
                                
                                <div className={`w-2 h-2 rounded-full ${ 
                                    clinic.hours[today] && clinic.hours[today].toLowerCase() !== 'closed'? 'bg-green-600' : 'bg-red-600' 
                                    }`}></div>
                                <span className="font-semibold text-sm">
                                    {clinic.hours[today] && clinic.hours[today].toLowerCase() !== 'closed' ? 'Open Today':'Closed Today'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ClinicDetail;