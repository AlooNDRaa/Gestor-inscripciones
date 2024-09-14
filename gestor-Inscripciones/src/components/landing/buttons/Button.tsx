import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartButton = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
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
                    borderRadius: "0.5rem",
                    width: "10rem",
                    height: "4rem",
                    padding: "0.5rem",
                    transition: "all 0.3s ease-in-out",
                    '&:hover': {
                        backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.contrastText}, ${theme.palette.background.paper})`,
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                        borderRadius: "1rem",
                        transform: "scale(1.1)",
                    }
                }}
                onClick={() => navigate("/usuario=?")}
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
        )
};

export default StartButton;
