import { useState, useRef, useEffect } from 'react';

const LanguageDropdown = ({languages,language,setLanguage}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef= useRef(null);

  const selectedLang= languages.find(l => l.code === language);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative hidden md:block">

      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="text-base">{selectedLang?.flag}</span>
        <span>{selectedLang?.label}</span>

        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180':''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border z-50 overflow-hidden">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left transition ${
                language === lang.code
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
