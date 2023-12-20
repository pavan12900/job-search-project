import React from 'react'

const NavBar = () => {
  return (
    <div className='navber flex justify-between items-center p-[3rem]'>
        <div className='logoDiv'>
            <h1 className="logo text-[25px] text-bluecolor"><strong>Job</strong>Search</h1>
       </div>
       <div className="manu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-bluecolor">Resister</li>
       </div>
      
    </div>
  )
}

export default NavBar
