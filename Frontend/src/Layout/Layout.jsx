import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import SmoothScroll from "../Components/UX/SmoothScroll";
import LoadingScreen from "../Components/UX/LoadingScreen";

const Layout = () => {
    return (
        <SmoothScroll>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <ScrollToTop />
                <NavBar />

                <main className="flex-1 w-full">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default Layout;