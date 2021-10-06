import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../../Images/Untitled.png"

const Header = () => {
    return (

        <div>
            <div className="container mx-auto  relative p-6">
                <nav className="relative flex items-center sm:h-10 lg:justify-between sm:m-4 lg:m-8 lg:w-4/5">
                    <div>
                        <img src={img} alt="" />
                    </div>


                    <div className="md:block md:ml-10 md:pr-4 md:space-x-8 font-bold text-xl">
                        <NavLink className="font-medium text-red-600 hover:text-black" to="/home">Home</NavLink>
                        <NavLink className="font-medium text-red-600 hover:text-black" to="/about" >About</NavLink>
                        <NavLink className="font-medium text-red-600 hover:text-black" to="/services">Services</NavLink>
                        <NavLink className="font-medium text-red-600 hover:text-black" to="/contact">Contact</NavLink>

                    </div >
                </nav>
            </div >
        </div >
    );
};

export default Header;