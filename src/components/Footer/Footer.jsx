const Footer = () =>{
    return(
        <footer className="bg-[#2C3E50] text-white py-8 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">© 2026 CareCompass. All rights reserved.</p>
                        <p className="text-xs text-gray-400 mt-1">Built with ❤️ for immigrant communities</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-sm">Language:</span>
                        <select className="bg-white text-gray-900 px-3 py-2 rounded-lg text-sm font-semibold">
                            <option>🇺🇸 English</option>
                            <option>🇪🇸 Español</option>
                            <option>🇭🇹 Kreyòl</option>
                            <option>🇫🇷 Français</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer