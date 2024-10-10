"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Rubik_Spray_Paint } from 'next/font/google';

const roboto = Rubik_Spray_Paint({
  weight: '400',
  subsets: ['latin'],
});

const Header = () => {
  const [isProfileCardVisible, setProfileCardVisible] = useState(false);

  const toggleProfileCard = () => {
    setProfileCardVisible(!isProfileCardVisible);
  };

  return (
    <div className="fixed top-0 w-full bg-black border-b-2 justify-center flex items-center border-white z-50 h-20">
      <div className="flex justify-between h-10 bg-black w-[90%]">
        <div className={roboto.className}>
          <h1 className="bg-black text-4xl sm:text-5xl pt-1 h-full float-left w-max">Guns-Mart</h1>
        </div>
        <div
          className="ml-auto w-[43px] right-0 bg-black h-[43px] relative cursor-pointer"
          onClick={toggleProfileCard}
        >
          <Image
            className="w-[55px] bg-black h-[55px] pb-2 object-cover rounded-full"
            src="/images/profile.png" 
            width={50}
            height={50}
            alt="Profile"
          />
          {isProfileCardVisible && (
            <div className="absolute z-30 top-full right-[-15px] mt-6 w-max bg-white p-4 rounded-md shadow-md">
              <h2 className="text-2xl bg-white font-semibold  text-black ">Demo Profile</h2>
              <h2 className="text-xl bg-white font-medium mb-2 text-black ">Username: Rajat Kumar</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
