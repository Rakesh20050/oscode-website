import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Preloader from "../common/Preloader";
import { ThemeProvider } from "../../context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <div className="site-bg-mesh min-h-screen flex flex-col justify-between selection:bg-red-500/40 selection:text-white transition-colors duration-300">
        <Preloader />
        <ScrollToTop />
        <Navbar />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;