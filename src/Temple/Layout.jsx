import React from "react";
import NavHeader from "../Components/NavHeader/NavHeader";
import NavHeaderTablet from "../Components/NavHeader/NavHeaderTablet";
import DesktopResponsive from "../HOC/DesktopResponsive";
import TabletResponsive from "../HOC/TabletResponsive";
import Footer from "../Components/Footer/Footer";

export default function Layout({ Component }) {
  return (
    <div>
      <DesktopResponsive>
        <NavHeader />
      </DesktopResponsive>
      <TabletResponsive>
        <NavHeaderTablet />
      </TabletResponsive>
      <Component />
      <Footer />
    </div>
  );
}
