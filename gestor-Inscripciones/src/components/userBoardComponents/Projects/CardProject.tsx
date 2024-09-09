import { Box, Typography, useTheme, Button } from "@mui/material";

import iconSocket from "../../../assets/images/iconixto/linear/iconWhite.png";

const CardProject = () => {
  const theme = useTheme();
    return (
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
          backgroundImage: `linear-gradient(to bottom left, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
          color: theme.palette.primary.main,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          paddingBottom: "0.5em",
        }}
      >
        <Typography
          sx={{
            padding: ".5em .5em 0 .5em",
            fontSize: "1rem",
            fontFamily: "Montserrat",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Ecommerce
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "10px",
            gap: "10px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <img src={iconSocket} alt="socket" style={{ width: "2.5rem" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "3px"
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontFamily: "Montserrat",
              }}
            >
              Chicas en tecnología
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontFamily: "Montserrat",
              }}
            >
              Tecnologías: React, Tailwind CSS, Express, TypeScript.
            </Typography>
          </Box>

        </Box>
        <Button
        sx={{
        //   backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
          borderRadius: "10px",
          border: "1px solid black"
        }}
      >
        <Typography
          sx={{
            fontSize: "0.7rem",
            color: theme.palette.primary.main,
            fontFamily: "Roboto",
          }}
        >
          Ver mas
        </Typography>
      </Button>
      </Box>
    )
}

export default CardProject;