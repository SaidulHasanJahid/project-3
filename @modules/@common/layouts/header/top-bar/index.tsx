'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaGlobe, FaUser } from 'react-icons/fa';
import { useUser } from '@/@modules/context/user-context'; // Adjust path as needed

type Option = {
  label: string;
  path?: string;
  action?: () => void;
};

const TopBar = () => {
  const currencies = ['USD', 'BDT', 'INR', 'EURO'];
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const languages = ['English', 'Spanish', 'French', 'Bangla'];
  const [selectedLang, setSelectedLang] = useState('English');

  const { isLoggedIn, logout } = useUser();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    alert('Logged out!');
    setIsOpen(false);
  };

  const accountOptions: Option[] = isLoggedIn
    ? [
      { label: 'User Panel', path: '/dashboard' },
        { label: 'Edit Profile', path: ' /edit-profile' },
        { label: 'Logout', action: handleLogout },
      ]
    : [
        { label: 'Login', path: '/login' },
        { label: 'Register', path: '/register' },
      ];

  return (
    <div className="flex justify-between items-center text-[15px] text-[#767678] max-[1000px]:hidden">
      {/* Left side */}
      <div>Contact & Support : 00 000 000 000</div>

      {/* Right side */}
      <div className="flex gap-4 sm:gap-6 items-center relative z-50">
        {/* Language dropdown */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-4 pr-4 border-r border-[#767678d2] h-[25px]">
            <FaGlobe /> {selectedLang} <FaChevronDown className="text-xs" />
          </div>
          <ul
            className="absolute top-full left-0 mt-2 w-28 bg-white shadow-md px-4 py-2 text-[#444] text-[13px] text-center rounded-md 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 ease-in-out z-50"
          >
            {languages.map((lang, i) => (
              <li
                key={i}
                onClick={() => setSelectedLang(lang)}
                className="py-1 hover:text-black cursor-pointer"
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>

        {/* Currency dropdown */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-4 pr-4 border-r border-[#767678d2] h-[25px]">
            $ {selectedCurrency} <FaChevronDown className="text-xs" />
          </div>
          <ul
            className="absolute top-full left-0 mt-2 w-28 bg-white shadow-md px-4 py-2 text-[#444] text-[13px] text-center rounded-md 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 ease-in-out z-50"
          >
            {currencies.map((cur, i) => (
              <li
                key={i}
                onClick={() => setSelectedCurrency(cur)}
                className="py-1 hover:text-black cursor-pointer"
              >
                {cur}
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div
          ref={dropdownRef}
          className="relative cursor-pointer select-none inline-block"
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 pr-4 text-sm  h-[25px]"
          >
            <FaUser /> My Account <FaChevronDown className="text-xs" />
          </div>

          {isOpen && (
            <ul className="absolute top-full left-0 mt-2 w-44 bg-white shadow-md px-4 py-2 text-[#444] text-[13px] rounded-md z-50">
              {accountOptions.map(({ label, path, action }, idx) => (
                <li
                  key={idx}
                  className="py-1 hover:text-black cursor-pointer text-center"
                  onClick={() => {
                    if (action) {
                      action();
                    }
                    setIsOpen(false);
                  }}
                >
                  {path ? (
                    <Link href={path} className="block w-full">
                      {label}
                    </Link>
                  ) : (
                    label
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
