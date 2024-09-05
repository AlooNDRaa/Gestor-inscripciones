import  { Box, Typography, useTheme } from '@mui/material'
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";


const Footer = () => {

    const theme = useTheme();

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            height: "5.5rem",
            width: "100%",
            borderTop: "1px solid #E5E5E5",
            position: "relative",
            bottom: 0,
            left: 0,
            zIndex: 1000,
        }}>
            <Box>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    color: theme.palette.text.primary,
                    fontSize: "1.6rem",
                    marginTop: "0.5rem",
                }}>
                    <FaLinkedin size={30}/>
                    <FaFigma size={30}/>
                    <FaGithub size={30}/>
                </div>
                <Typography sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    color: theme.palette.text.primary,
                    marginTop: "0.5rem",
                }}>
                    © 2024 ClassTer Inc.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer