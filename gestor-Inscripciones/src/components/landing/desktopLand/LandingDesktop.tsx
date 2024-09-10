import { Box, Typography, useTheme } from "@mui/material"
import StartButton from "../buttons/Button";
import People from "../../../assets/images/imgs/landingHome.png"



const LandingDesktopComp = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
        }}>
            <Box sx={{
                display: "flex",
                maxHeight: "100vh",
                justifyContent: "center",
                alignItems: "center",
                color: theme.palette.text.secondary,
                fontWeight: "bold",
                textAlign: "center",
            }}>
                <Typography sx={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "50%",
                }} variant="h3">
                    Ahora creá tu proyecto con mentores profesionales
                    de las mejores empresas
                </Typography>
            </Box>
                <StartButton/>.
            <Box>
                <img src={People} alt="People" style={{ width: "100%" }} />
            </Box>
        </Box>
    )
}

export default LandingDesktopComp;