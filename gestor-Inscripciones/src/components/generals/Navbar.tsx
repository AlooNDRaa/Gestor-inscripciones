import { Box, Typography, useTheme } from "@mui/material";
import HamburgerMenu  from "../menu/MenuHamburguer";
import iconSocket from "../../assets/images/iconixto/linear/icon.png";


 const Navbar = () => { 
    const theme = useTheme();
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #E5E5E5",
            padding: "0.3rem",
            gap: "0.1rem",
            marginInline: "0.5rem",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.1rem",
            }}>
            <Typography sx={{
                fontSize: "1.6rem",
                color: theme.palette.text.secondary,
                fontFamily: "Montserrat",
                textAlign: "center",
                fontWeight: "800",
            }}>
                CLASSTER
            </Typography>
            <img src={iconSocket} alt="socket" style={{ width:"1.5rem" }}/> 
            </Box>
            <Box sx={{}}>
                <HamburgerMenu/>
            </Box>
        </Box>
    )
}

export default Navbar;