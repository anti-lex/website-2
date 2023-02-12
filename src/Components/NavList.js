import React from "react" 
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./home";
import Test from "./test";
function NavList() { 
    return (
        <>
        <div className="navbar">
        <BrowserRouter>
            <ul className="top-nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Test">Test</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route index element={<Home/>} />
                <Route path ="/Test" element={<Test />} />
            </Routes>
        </BrowserRouter>
        </div>
        </>
    );
}

export default NavList;