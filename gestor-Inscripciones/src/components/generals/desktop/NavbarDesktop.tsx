import { Box,  Typography, useTheme } from "@mui/material";
import iconSocket from "../../../assets/images/iconixto/linear/icon.png";   

 const NavbarDesktop = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: theme.palette.background.default,
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            padding: "0.5rem",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                padding: "0.3rem",
                gap: "0.1rem",
                marginInline: "0.5rem",
            }}>
                <Typography sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    color: theme.palette.text.primary,
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                }}>
                    CLASSTER
                </Typography>
                <img src={iconSocket} alt="socket" style={{ width:"2rem" }}/> 
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                padding: "0.3rem",
                gap: "0.1rem",
                marginInline: "0.5rem",
            }}>
                <Typography sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    color: theme.palette.text.primary,
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    '&:hover': {
                        borderBottom: "2px solid #000",
                    }
                }}>
                    <a href="/">Inicio</a>
                </Typography>
                <Typography sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    color: theme.palette.text.primary,
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    '&:hover': {
                        borderBottom: "2px solid #000",
                    }
                }}>
                    <a href="/contacto">Contacto</a>
                </Typography>
                <Typography sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    color: theme.palette.text.primary,
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    textAlign: "center",
                    '&:hover': {
                        borderBottom: "2px solid #000",
                    }
                }}>
                    <a href="/sobreNosotros">Sobre <br/> Nosotros</a>
                </Typography>
                <Typography sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    color: theme.palette.text.primary,
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    textAlign: "center",
                    '&:hover': {
                        borderBottom: "2px solid #000",
                    }
                }}>
                    <a href="/usuario=?">Iniciar <br/> admin</a>
                </Typography>
            </Box>
        </Box>
    )
}
            
export default NavbarDesktop;