import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FloatingButton = () => {
    const [showButton, setShowButton] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Muestra el botón cuando el usuario ha hecho scroll más allá de 100px
            // y ocúltalo cuando esté cerca del final de la página
            if (scrollPosition < documentHeight - 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Inicializa el botón en la carga inicial de la página
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        showButton && (
            <Button
                sx={{
                    position: "fixed",
                    bottom: "1rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
                    borderRadius: "10px",
                    width: "10rem",
                    height: "4rem",
                    padding: "0.5rem",
                    zIndex: 1000,
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
        )
    );
};

export default FloatingButton;
