"use client"
import React from 'react';
import { BsBag } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdHelpOutline } from "react-icons/md";
import { useMainMenu } from '../store';

const Header2 = () => {

   const handleMainMenuClicked = useMainMenu(state => state.handleMainMenuClicked);  
  
  return (
    <div className='flex bg-[#484536] lg:h-15 text-white w-full p-5 lg:gap-[370px] md:gap-[330px] opacity-75 max-sm:gap-[120px]'>
      <div className='md:hidden max-sm:hidden lg:flex gap-13 ml-[580px]'>
        {/*for large devices lg*/}
        <p>Women</p>
        <p>Men</p>
        <p>Category</p>
        <p>Stores</p>
      </div>
      <div className='md:hidden lg:flex gap-6 max-sm:hidden'>
        <p>Search</p>
        <p>Help</p>
        <div className='flex gap-2'>
            <p className='mt-1 '><BsBag /></p>
            <p>0</p>
        </div>
      </div>
      {/* for medium md*/}
      <div className='lg:hidden flex gap-7 mt-[-8px] ml-[15px] max-sm:hidden'>
        <button onClick={handleMainMenuClicked}><IoMenu className='h-9 w-9' /></button>
        <button><CiSearch className='h-9 w-9 '/></button>
      </div>
      {/* for md */}
      <div className='lg:hidden ml-[120px] mt-2 flex gap-7 max-sm:hidden'>
        <button><MdHelpOutline className='h-12 w-12 ml-3 mt-[-15px]'/></button>
        <div className='flex gap-3'>
            <button><BsBag className='h-12 md:w-10 mt-[-20px]'/></button>
            <p className='mt-[-14px] text-4xl'>0</p>
        </div>
       </div>
       {/* for sm */}
       <div className='lg:hidden md:hidden flex gap-7 mt-[-8px] ml-[15px]'>
        <button onClick={handleMainMenuClicked}><IoMenu className='h-9 w-9' /></button>
        <button><CiSearch className='h-9 w-9 '/></button>
       </div>
       {/* same for sm like phones */}
       <div className='lg:hidden md:hidden max-sm:flex max-sm:gap-7 max-sm:mt-1'>
        <button><MdHelpOutline className='max-sm:h-9 max-sm:w-9 max-sm:ml-3 max-sm:mt-[-15px]'/></button>
        <div className='max-sm:flex gap-3'>
            <button><BsBag className='max-sm:h-9 max-sm:w-9 max-sm:mt-[-20px]'/></button>
            <p className='max-sm:mt-[-9px] max-sm:text-3xl'>0</p>
        </div>    
       </div>
    </div>
  )
}

export default Header2
