import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { BsEnvelope } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuMessageSquarePlus } from "react-icons/lu";
import { MdCameraFront } from "react-icons/md";


export default function ContactForm() {
    const theme = useTheme();
    const [message, setMessage] = useState(""); 

    const handleMessageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setMessage(event.target.value);
    };

    const characterCount = message.length;
    const maxLength = 800;

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            marginBottom: "5rem",
        }}>
             <TextField
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
                        <MdCameraFront style={{ marginRight: 8 }} />
                        Nombre completo
                    </Box>
                }
                variant="outlined"
                sx={{
                    borderRadius: "1rem",
                    width: { xs: "80%", md: "60%" },
                    marginBottom: "0.5rem",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: theme.palette.background.paper,
                            borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                            borderColor: "black",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "black",
                        fontSize: '1rem',
                        "&.Mui-focused": {
                            color: "black",
                        },
                    },
                }}
            />
            <TextField
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
                        <BsEnvelope style={{ marginRight: 8 }} />
                        Email
                    </Box>
                }
                variant="outlined"
                sx={{
                    borderRadius: "1rem",
                    width: { xs: "80%", md: "60%" },
                    marginBottom: "0.5rem",
                    marginTop: "1rem",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: theme.palette.background.paper,
                            borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                            borderColor: "black",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "black",
                        fontSize: '1rem',
                        "&.Mui-focused": {
                            color: "black",
                        },
                    },
                }}
            />
            <TextField
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
                        <IoPhonePortraitOutline style={{ marginRight: 8 }} />
                        Teléfono
                    </Box>
                }
                variant="outlined"
                sx={{
                    borderRadius: "1rem",
                    width: { xs: "80%", md: "60%" },
                    marginTop: "1rem",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: theme.palette.background.paper,
                            borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                            borderColor: "black",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "black",
                        fontSize: '1rem',
                        "&.Mui-focused": {
                            color: "black",
                        },
                    },
                }}
            />
            <Typography sx={{
                fontSize: '0.8rem',
                marginTop: "0.3rem",
                marginBottom: "0.5rem",
                color: theme.palette.text.secondary,
            }}>
                Con el siguiente formato +56999999999
            </Typography>
            <TextField
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
                        <LuMessageSquarePlus style={{ marginRight: 8 }} />
                        Mensaje
                    </Box>
                }
                variant="outlined"
                value={message}
                onChange={handleMessageChange}
                sx={{
                    borderRadius: "1rem",
                    width: { xs: "80%", md: "60%" },
                    marginTop: "1rem",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: theme.palette.background.paper,
                            borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                            borderColor: "black",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "black",
                        fontSize: '1rem',
                        "&.Mui-focused": {
                            color: "black",
                        },
                    },
                    "& input": {
                        height: "6rem",
                        padding: '1rem',
                    },
                }}
            />
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1rem",
                width: { xs: "19rem", md: "24rem" },
            }}>
                <Typography sx={{
                    fontSize: '0.8rem',
                    marginTop: "0.3rem",
                    marginBottom: "0.5rem",
                    color: theme.palette.text.secondary,
                }}>
                    Máximo 800 caracteres
                </Typography>
                <Typography sx={{
                    fontSize: '0.8rem',
                    marginTop: "0.3rem",
                    marginBottom: "0.5rem",
                    color: theme.palette.text.secondary,
                }}>
                    {characterCount}/{maxLength}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
                width: "100%",
            }}>
                <Button sx={{
                    backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
                    borderRadius: "10px",
                    minWidth: { xs: "80%", md: "60%" },
                    height: "3.5rem",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    color: "white",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease-in-out",
                    '&:hover': {
                        backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.contrastText}, ${theme.palette.background.paper})`,
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                        borderRadius: "1rem",
                        transform: "scale(1.1)",
                    }
                }}>
                    ENVIAR
                </Button>
            </Box>
        </Box>
    );
}