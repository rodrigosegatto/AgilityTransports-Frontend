import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const widthMinResizeSidebar = 768;

  useEffect(() => {

    if (window.innerWidth <= widthMinResizeSidebar) {
      setIsSidebarOpen(false);
    }

    const handleResize = () => {
      if (window.innerWidth <= widthMinResizeSidebar) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-6 max-w-4xL mx-auto">
        <div className="border rounded-lg p-2">
          <Outlet />
        </div>
      </div>
      </div>
    </div>
  )
}
