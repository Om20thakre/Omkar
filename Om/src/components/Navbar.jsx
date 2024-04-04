import React from 'react'

import { createBrowserRouter , Link, RouterProvider } from 'react-router-dom';

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "About",
    link: "/About",

  },
  {
    id: 3,
    name: "Projects",
    link: "/project",
  },

  {
    id: 4,
    name: "Blogs",
    link: "/blog",
  },
  {
    id: 5,
    name: "Contact us",
    link: "/Contactus",
  },
];


const Navbar = () => {
  
  return (
    
    <div className='fixed z-[999] w-full px-20 py-0 flex justify-between items-center'>
     <div className='logo cursor-pointer w-28 '>
   <img src="logo.png" alt="" srcset="" />
     </div>
     <div className="links flex gap-10 cursor-pointer font-Tauri">
        {MenuLinks.map((item, index)=>


        <Link to={item.link}>
        <h1  key={index} className={`text-lg text-zinc-900 captalize py-1 ${index === 4 && "ml-40 px-5 pt-1 font-Bebas border-[2px] border-zinc-900 rounded-full"}`}>{item.name}</h1>
        
        </Link>
        )
        
        
        }
     </div>
    </div>
  )
}

export default Navbar