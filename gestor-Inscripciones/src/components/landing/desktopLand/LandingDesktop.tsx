import { Box, Typography, useTheme } from "@mui/material";
import StartButton from "../buttons/Button";
import People from "../../../assets/images/imgs/fondoImg.png";

const LandingDesktopComp = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "95vh",
        position: "relative",
        padding: "1rem", 
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.text.secondary,
          fontWeight: "bold",
          textAlign: "center",
          flexDirection: "column",
          flex: 1, 
        }}
      >
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            width: "50%", 
          }}
          variant="h3"
        >
          Ahora creá tu proyecto con mentores profesionales de las mejores empresas
        </Typography>

        <Box sx={{ marginTop: "2rem" }}>
          <StartButton />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "0", 
          right: "0", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width:"auto", 
        }}
      >
        <img
          src={People}
          alt="People"
          style={{
            width: "70%",
            height: "auto",
            marginLeft: "3rem",
            borderRadius: "1rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default LandingDesktopComp;
