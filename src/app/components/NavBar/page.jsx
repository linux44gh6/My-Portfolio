import Link from 'next/link';
import React from 'react';
const NavBarPage = () => {
    const link=[
        {
            title:'service'
        },
        {
            title:'Works'
        },
        {
            title:'Resume'
        },
        {
            title:'Skills'
        },
        {
            title:'Testomonials'
        },
        {
            title:'Contact'
        },
    ]
    return (
        <div>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
           
        }
      </ul>
    </div>
    <a className="flex  items-center text-xl text-white"> <img className='w-24' src="logo.png" alt="" /> <span className='font-font1 text-2xl'>abireshan32@gmail.com</span></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5">
      {
        link?.map(li=><Link className='text-white font-bold text-xl font-font1 capitalize' href={''}>{li.title}</Link>)
      }
    </ul>
    <div className="ms-2">
    <a className="btn rounded-full bg-gradient-to-r from-color1 to-color2  
    hover:bg-gradient-to-r from-color2 to-color1 text-white">Hire Me!</a>
  </div>
  </div>
 
</div>
        </div>
    );
};

export default NavBarPage;