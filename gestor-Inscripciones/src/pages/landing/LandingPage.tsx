import { useMediaQuery, useTheme } from "@mui/material";
import LandingDesktopComp from "../../components/landing/desktopLand/LandingDesktop";
import LandingMobileComp from "../../components/landing/LandingComp";

const LandingPage = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div>
      {isMobile ? <LandingMobileComp /> : <LandingDesktopComp />}
    </div>
  );
};

export default LandingPage;
