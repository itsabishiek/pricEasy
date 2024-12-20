import React from "react";
import Navbar from "./_components/navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-6">{children}</div>
    </div>
  );
};
export default DashboardLayout;
