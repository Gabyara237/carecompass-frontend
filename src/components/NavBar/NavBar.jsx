import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/Logo-CareCompass.png'

import LanguageDropdown from './LanguageDropdown';


const languages = [
  { code: 'en', label: 'EN', name: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'ES', name: 'Spanish', flag: '🇪🇸' },
  { code: 'ht', label: 'HT', name: 'Haitian Creole', flag: '🇭🇹' },
  { code: 'fr', label: 'FR', name: 'French', flag: '🇫🇷' },
];

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setMobileMenuOpen(false);
  };

  const mobileLinkClass = (path) =>(
    `block px-4 py-2 rounded transition ${
      isActive(path)
        ? 'bg-green-50 text-green-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex items-center space-x-2">
           
            <div className="flex flex-col items-start">
              <img src={logo} alt="CareCompass logo" className="h-16 sm:h-20 w-auto"/>
            </div>

          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative font-medium transition-colors ${
                isActive('/')
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-green-600 rounded"></span>
              )}
            </Link>

            <Link
              to="/clinics"
              className={`relative font-medium transition-colors ${
                isActive('/clinics')
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Find Clinics
              {isActive('/clinics') && (
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-green-600 rounded"></span>
              )}
            </Link>
            <Link
              to="/resources"
              className={`relative font-medium transition-colors ${
                isActive('/resources')
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Resources
              {isActive('/resources') && (
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-green-600 rounded"></span>
              )}
            </Link>

          </div>



          <div className="flex items-center space-x-4">
            

            <div className="hidden md:flex items-center bg-gray-100 rounded-lg p-1">
              <LanguageDropdown
                languages={languages}
                language={language}
                setLanguage={setLanguage}
              />
            </div>

            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <>
                  <span className="text-sm text-gray-700">
                    Welcome, <span className="font-semibold">{user.username}</span>
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/sign-in" className="text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Sign In
                  </Link>
                  <Link to="/sign-up" className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
            <div className="px-4 mb-3">
              <p className="text-xs text-gray-500 mb-2">Language / Idioma / Lang / Langue</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      language === lang.code
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <Link to="/" className={mobileLinkClass('/')} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            
            <Link to="/clinics" className={mobileLinkClass('/clinics')} onClick={() => setMobileMenuOpen(false)}>
              Find Clinics
            </Link>
            <Link to="/resources" className={mobileLinkClass('/resources')} onClick={() => setMobileMenuOpen(false)}>
              Resources
            </Link>
            
            <div className="border-t border-gray-200 pt-2 mt-2">
              {user ? (
                <>
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Welcome, <span className="font-semibold">{user.username}</span>
                  </div>
                  <button onClick={handleSignOut} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/sign-in" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                  <Link to="/sign-up" className="block px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded mx-4 text-center" onClick={() => setMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;