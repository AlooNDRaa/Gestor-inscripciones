import React, { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { TbLockAccessOff, TbEye, TbEyeOff } from "react-icons/tb"; 
import { Box, Button, IconButton, InputAdornment, TextField, Typography, useTheme } from "@mui/material";

const FormMentor: React.FC = () => {
    const Theme1 = useTheme();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // LOGICA CON LA CONEXION AL BACK END
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "1.5rem",
                width: "100%",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontFamily: "Roboto",
                }}
            >
                Iniciar como mentor
            </Typography>

            <TextField
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
                        <BsEnvelope style={{ marginRight: 8 }} />
                        Email
                    </Box>
                }
                variant="outlined"
                fullWidth
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: Theme1.palette.background.paper,
                            borderWidth: "1px",
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
                    "& .MuiFormLabel-asterisk": {
                        display: "none",
                    },
                }}
            />

            <TextField
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
                        <TbLockAccessOff style={{ marginRight: 8 }} />
                        Contraseña
                    </Box>
                }
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                required
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onKeyDown={handlePasswordKeyDown}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility} edge="end">
                                {showPassword ? <TbEyeOff /> : <TbEye />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& fieldset": {
                            borderColor: Theme1.palette.background.paper,
                            borderWidth: "1px",
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
                    "& .MuiFormLabel-asterisk": {
                        display: "none",
                    },
                }}
            />

            <Button
                sx={{
                    backgroundImage: `linear-gradient(to right, ${Theme1.palette.background.paper}, ${Theme1.palette.secondary.contrastText})`,
                    borderRadius: "10px",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    width: "10rem",
                    height: "4rem",
                    padding: "0.5rem",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1rem",
                        color: Theme1.palette.primary.main,
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        textAlign: "center",
                        width: "20rem",
                    }}
                >
                    Iniciar
                </Typography>
            </Button>
        </Box>
    );
};

export default FormMentor;
