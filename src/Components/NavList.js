import React from "react" 
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./home";
import Test from "./test";
import { IoHome } from "react-icons/io5";
import { IoCard } from "react-icons/io5";
function NavList() { 
    return (
        <>
        <BrowserRouter>
        <div className="navbar">
            <ul className="top-nav">
                <li>
                    <Link to="/"><IoHome/>Home</Link>
                </li>
                <li>
                    <Link to="/Test"><IoCard className="react-icons"/>Test</Link>
                </li>
            </ul>
        </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route index element={<Home/>} />
                <Route path ="/Test" element={<Test />} />
            </Routes>
        </BrowserRouter>

        </>
    );
}

export default NavList;