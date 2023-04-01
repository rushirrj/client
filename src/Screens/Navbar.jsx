import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
    const [hamburger, setHamburger] = useState(false);

    return (
        <div className="flex justify-between items-center p-4 shadow-lg bg-navBlue">
            {/* Sidebar starts */}
            <div
                className=" flex flex-col justify-between w-3/6 sm:w-56"
                style={{
                    minHeight: "100vh",
                    background: "rgb(57 61 70 / 94%)",
                    padding: 10,
                    boxShadow: "6px 0px 2px rgba(0, 0, 0, 0.15)",
                    zIndex: 2,
                    position: "fixed",
                    top: 0,
                    left: !hamburger ? "-100%" : 0,
                    bottom: 0,
                    transition: "300ms ease-in",
                }}
            >
                <span
                    onClick={() => setHamburger(false)}
                    style={{
                        position: "absolute",
                        right: 10,
                        top: 10,
                        zIndex: 2,
                        cursor: "pointer",
                    }}
                >
                    <CloseIcon style={{ color: "white" }} />
                </span>
                <div>
                    <div className="flex flex-col gap-7 pr-8 justify-center items-center pt-11 ">
                        <div onClick={() => navigate("/")} className="cursor-pointer text-lg hover:font-bold text-white">
                            Home
                        </div>
                        <div onClick={() => navigate("/")} className="cursor-pointer text-lg hover:font-bold text-white">
                            About
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar Ends */}
            <div className="flex flex-row sm:pl-8 justify-center items-center">
                <div className="h-full flex justify-center items-center">
                    <img src="logo.jpg" alt="" className="h-8 sm:full" />
                </div>
            </div>
            <div className="hidden md:flex flex-row gap-7 pr-8 justify-center items-center ">
                <div onClick={() => navigate("/")} className="cursor-pointer text-lg hover:font-bold text-white">Home</div>
                <div onClick={() => navigate("/")} className="cursor-pointer text-lg hover:font-bold text-white">About</div>
            </div>
            <div className="md:hidden cursor-pointer" onClick={() => {setHamburger(true);}}>
                <MenuIcon
                    className="text-white"
                    style={{ height: "32px", width: "32px" }}
                />
            </div>
        </div>
    );
};

export default Navbar;
