import  { Box, Typography, useTheme } from '@mui/material'
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";
import '../../App.css'


const Footer = () => {

    const theme = useTheme();
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "6rem",
            width: "100%",
            borderTop: "1px solid #E5E5E5",
            position: "relative",
            bottom: 0,
            left: 0,
            zIndex: 10,
        }}>
            <Box>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1.2rem",
                    color: theme.palette.text.primary,
                    fontSize: "1.6rem",
                    marginTop: "0.9rem",
                }}>
                    <a href="http://" target="_blank">
                    <FaLinkedin size={30}/>
                    </a>
                    <a href="https://www.figma.com/design/Q8kgQVkfVRZXnB2xtAoUdj/PoloIT---New-desing?node-id=0-1&node-type=CANVAS&t=CUIpFKWOzaBCUjMw-0" target="_blank">
                    <FaFigma size={30}/>
                    </a>
                    <a href="http://" target="_blank">
                    <FaGithub size={30}/>
                    </a>
                </div>
                <Typography sx={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    color: theme.palette.text.primary,
                    marginTop: "0.9rem",
                }}>
                    © 2024 ClassTer Inc.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer