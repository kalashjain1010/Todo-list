import React, { useState } from 'react';
import { FaList, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "" },
    { name: "SERVICE", link: "" },
    { name: "ABOUT", link: "" },
    { name: "CONTACT", link: "" },
    { name: "REQUIREMENTS", link: "" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <FaList className='w-7 h-7' />
          <span>Todo list </span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {open ? <FaTimes /> : <FaBars />}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
              <div className='text-gray-800 hover:text-blue-400 duration-500 cursor-pointer'>{link.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
          </>
  );
};

export default Navbar;
