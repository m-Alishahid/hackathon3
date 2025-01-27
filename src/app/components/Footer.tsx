import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        {/* Intro Section */}
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          <h1 className="text-blue-500 text-3xl font-black lg:text-3xl  text-center lg:text-left">AliCarGo</h1>
          <p className="text-gray-500 text-center lg:text-left w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>


        <div className="lists flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          <div className="about">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg"><h1>About</h1></li>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="community">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg"><h1>Community</h1></li>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="socials">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg"><h1>Socials</h1></li>
              <Link href="https://www.discord.com">
                <li>Discord</li>
              </Link>
              <Link href="https://www.instagram.com/codecraftali">
                <li>Instagram</li>
              </Link>
              <Link href="https://www.facebook.com/mali24">
                <li>Facebook</li>
              </Link>
              <Link href="https://www.twitter.com">
                <li>Twitter</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>


      <div className="line border-t w-full border-[#e7eef6]"></div>

      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-sm">©2025 AliCarGo. All rights reserved</h1>
        </div>
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-bold text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-sm">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}
