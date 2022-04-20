import { useMediaQuery } from "react-responsive";

export default function DesktopResponsive({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  return isDesktop ? children : null;
}
