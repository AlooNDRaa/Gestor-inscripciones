import { Box, Typography, useTheme, Button } from "@mui/material";
import Footer from '../generals/Footer';
import { useNavigate } from "react-router-dom";
import iconSocket from "../../assets/images/iconixto/linear/icon.png";
import FloatingButton from "./buttons/Button";

const LandingPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ 
                position: "relative", 
                textAlign: "center", 
                mt: 1,
                width: "100%", 
                height: "auto", 
                maxWidth: "100%", 
                overflow: "hidden", 
            }}>
                <svg width="100%" height="100%" viewBox="0 0 430 310" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <path d="M-45.9837 102.545C-44.5419 91.8969 -37.3301 82.9185 -27.243 79.2141L67.9165 44.2676C69.5065 43.6837 71.1446 43.2402 72.812 42.9422L197.233 20.7076L422.684 0.261295C438.74 -1.19482 452.901 10.7236 454.208 26.7923L469.211 211.295C470.961 232.815 449.421 248.632 429.411 240.521L412.688 233.741C407.929 231.812 402.744 231.181 397.662 231.912L274.289 249.663C271.699 250.035 269.171 250.757 266.775 251.808L196.935 282.427C192.533 284.357 187.72 285.162 182.929 284.771L46.7232 273.639C39.7269 273.067 32.7606 275.052 27.1168 279.226L-4.67416 302.738C-9.31323 306.169 -14.8703 308.138 -20.6346 308.394L-39.4971 309.229C-57.5609 310.03 -71.9445 294.285 -69.5185 276.367L-45.9837 102.545Z" 
                    fill="url(#paint0_linear_1_19)"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_19" x1="170.5" y1="203" x2="144.255" y2="-30.6289" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0A1944"/>
                    <stop offset="1" stopColor="#01E8B9"/>
                    </linearGradient>
                    </defs>
                </svg>
                <Typography sx={{
                    position: "absolute",
                    top: "45%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "clamp(1.5rem, 3vw, 1.5rem)", 
                    fontWeight: "medium",
                    color: theme.palette.primary.main,
                    fontFamily: "Roboto",
                    textAlign: "center",
                    width: "80%", 
                    lineHeight: "1.2", 
                }}>
                    ¡Creá tu proyecto<br />Con mentores profesionales<br />De las mejores empresas!
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
                padding: "0 1rem",
                gap: "1rem",
            }}>
                <Typography
                    sx={{
                        fontSize: "1.2rem",
                        fontWeight: "medium",
                        color: theme.palette.text.primary,
                        fontFamily: "Roboto",
                        textAlign: "center",
                        marginTop: "0.1rem",
                        marginBottom: "1rem",
                        lineHeight: "1.5",
                        maxWidth: "95%",
                    }}
                >
                    Empodera tu carrera con el respaldo de mentores expertos. 
                    Conectamos egresados de diferentes entidades con líderes de la industria para impulsar proyectos que generan un impacto real en la sociedad. 
                    ¡Da el siguiente paso y fortalece tu misión con nuestro apoyo!
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
            }}> 
                <Typography sx={{
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    color: theme.palette.text.primary,
                    fontFamily: "Roboto",
                    textAlign: "center",
                    width: "22.5rem",
                }}>
                ¡Conecta con mentores expertos y crea proyectos que generen impacto!
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1.5rem",
                marginBottom: "3rem",
                gap: "1rem",
            }}>
                <img src={iconSocket} alt="socket" style={{ width:"1.5rem" }}/> 
                <img src={iconSocket} alt="socket" style={{ width:"1.5rem" }}/> 
                <img src={iconSocket} alt="socket" style={{ width:"1.5rem" }}/> 
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1.5rem",
                marginBottom: "5rem",
            }}>
                <Typography sx={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    fontFamily: "Roboto",
                    textAlign: "center",
                    width: "20rem",
                }}>
                    ¡Impulsa tu carrera ahora y crece junto a nosotros!
                    Ingresa ahora y descubre cómo puedes hacer una diferencia significativa en tu carrera y en el mundo.
                </Typography>
            </Box>
             <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "4rem",
            }}>
                <Button
                    sx={{
                        backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
                        borderRadius: "10px",
                        width: "10rem",
                        height: "4rem",
                        padding: "0.5rem",
                    }}
                    onClick={() => navigate("/selecUser")}
                >
                    <Typography sx={{
                        fontSize: "1rem",
                        color: theme.palette.primary.main,
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>
                        Iniciar
                    </Typography>
                </Button>
            </Box>
            
            <FloatingButton />
            <Footer />
        </>
    );
};

export default LandingPage;