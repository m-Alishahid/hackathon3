
"use client";
import React, { FC, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onSearch?: (searchTerm: string) => void; // Optional for non-home pages
}

const Navbar: FC<NavbarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value); // Update the local state
    if (onSearch) {
      onSearch(value); // Trigger search only on pages with `onSearch`
    }
  };

  const renderIcon = (src: string, alt: string, href: string, size: number) => (
    <a href={href} aria-label={alt} className="flex items-center">
      <Image src={src} alt={alt} width={size} height={size} />
    </a>
  );

  return (
    <nav className="h-auto w-full flex flex-wrap items-center justify-between px-4 py-4 bg-white shadow-sm">
      {/* Logo Section */}
      <div className=" ml-8 logo-container w-[120px] h-[40px] flex-shrink-0">

        <h2 className="text-blue-500 text-3xl font-black">AliCarGO </h2>


      </div>

      {/* Search Section */}
      <div className="search-bar flex items-center gap-2 w-full max-w-[492px] h-[44px] border rounded-full px-3 mt-4 ml-1 md:mt-0 md:flex-1 md:mr-8">
        <Image
          src="/search-normal.png"
          alt="Search Icon"
          className="w-[20px] h-[20px]"
          width={20}
          height={20}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search your best car"
          className="flex-1 bg-transparent border-none outline-none text-sm px-2"
        />
        <Image
          src="/filter.png"
          alt="Filter Icon"
          className="w-[20px] h-[20px]"
          width={20}
          height={20}
        />
      </div>

      {/* Profile Icons Section */}
      <div className="profile-icons flex items-center space-x-4 mt-4 md:mt-0">
        {renderIcon("/Like.png", "Like", "#", 36)}
        {renderIcon("/Notification.png", "Notification", "#", 36)}
        {renderIcon("/Settings.png", "Settings", "#", 36)}
        <a href="#" aria-label="Profile">
          <Image
            src="/dev-ali.jpg"
            alt="Profile Picture"
            className="w-[44px] h-[44px] rounded-full"
            width={44}
            height={44}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
