import React from "react";

import { useMediaQuery } from "react-responsive";

export default function TabletResponsive({ children }) {
  const isTablet = useMediaQuery({ minWidth: 0, maxWidth: 1024 });
  return isTablet ? children : null;
}
