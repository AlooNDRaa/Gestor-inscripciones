import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { BsEnvelope } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuMessageSquarePlus } from "react-icons/lu";

export default function ContactForm() {
    const Theme1 = useTheme();
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
                        <BsEnvelope style={{ marginRight: 8 }} />
                        Email
                    </Box>
                }
                variant="outlined"
                sx={{
                    borderRadius: "1rem",
                    width: "80%",
                    marginBottom: "0.5rem",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: Theme1.palette.background.paper,
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
                    width: "80%",
                    marginTop: "1rem",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: Theme1.palette.background.paper,
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
                color: Theme1.palette.text.secondary,
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
                    width: "80%",
                    marginTop: "1rem",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: Theme1.palette.background.paper,
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
                width: "19rem", 
            }}>
                <Typography sx={{
                    fontSize: '0.8rem',
                    marginTop: "0.3rem",
                    marginBottom: "0.5rem",
                    color: Theme1.palette.text.secondary,
                }}>
                    Máximo 800 caracteres
                </Typography>
                <Typography sx={{
                    fontSize: '0.8rem',
                    marginTop: "0.3rem",
                    marginBottom: "0.5rem",
                    color: Theme1.palette.text.secondary,
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
                    backgroundImage: `linear-gradient(to right, ${Theme1.palette.background.paper}, ${Theme1.palette.secondary.contrastText})`,
                    borderRadius: "10px",
                    minWidth: "80%",
                    height: "3.5rem",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                }}>
                    Enviar 
                </Button>
            </Box>
        </Box>
    );
}
