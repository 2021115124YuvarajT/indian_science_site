import React from 'react';
import Sidenavbar from "../Sidenavbar/Sidenavbar"
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
export default function Mul()

{
    return(
        <div className='top-container'>
            <Navbar/>
            <Sidenavbar/>
            <Outlet/>
        </div>
    );
}