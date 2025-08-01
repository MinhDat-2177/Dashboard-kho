import React, { useState, useRef, useEffect } from 'react'
import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-cyan-800 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Search Icon */}
        <div className=" flex items-center bg-stone-700 rounded">
          <input
          type='text'
          placeholder='Tìm kiếm ...'
          className='bg-white text-black px-0.5 mx-0.5 rounded shadow'
          />
          <button
            type='button'
            className="cursor-pointer hover:bg-stone-600"
          >
            <FaSearch size={22} />
          </button>
        </div>

        {/* User Icon & Dropdown */}
        <div className="relative bg-violet-600 rounded-full h-auto" ref={menuRef}>
          <FaUser
            size={28}
            className="cursor-pointer"
            onClick={() => setMenuOpen(prev => !prev)}
          />

          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-gray-900 text-white rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Thông tin</li>
              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Cài đặt</li>
              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Đăng xuất</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
