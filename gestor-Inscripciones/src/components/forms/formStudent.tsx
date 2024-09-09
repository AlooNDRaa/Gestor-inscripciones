import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormStudent: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //LOGICA CON LA CONEXION AL BACK END
    // Navigation momentanea, luego al implementar la autenticacion se cambia
    console.log("Buendia");
    navigate("/userBoard")
    

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
        }}
      >
        Iniciar como Alumno
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />

      <Button type="submit"
        sx={{
          backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
          borderRadius: "10px",
          width: "10rem",
          height: "4rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            color: theme.palette.primary.main,
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

export default FormStudent;
