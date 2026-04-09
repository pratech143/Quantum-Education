import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import SmoothScroll from "../Components/UX/SmoothScroll";

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
            {/* Top Navigation */}
            <NavBar />

            {/* Page Content */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    </SmoothScroll>
    );
};

export default Layout;