import React from "react" 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home";
import Test from "./test";
function NavList() { 
    return (
        <>
        <div className="navbar">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Home/>} />
                    <Route path ="Test" element={<Test />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
        </>
    );
}

export default NavList;