import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from './ui/mode-toggle';

const Navbar = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <>
        <nav className="w-full flex justify-between items-center px-5 p-2 border-b-2 border-b-black ">
            <div className="main-nav flex justify-center items-center gap-6">
                <div className="logo font-extrabold text-3xl">CARBON UPI</div>
                {
                    user && 
                    <ul className="tabs flex justify-between items-center gap-5 pt-2">
                        <NavLink className="tab" to="/home">Dashboard</NavLink>
                        <NavLink className="tab" to="/createPassword">Create</NavLink>
                    </ul>
                }
            </div>
            {/* <div className="mode">
                <img className="w-7 cursor-pointer" src="https://static-00.iconduck.com/assets.00/dark-theme-icon-2048x2048-ymrfkxsy.png" alt="Dark Mode Button" />
            </div> */}
            <ModeToggle/>
        </nav>
    </>
  )
}

export default Navbar
