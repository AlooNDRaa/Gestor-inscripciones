import { Box, Typography } from "@mui/material";
import CardProject from "./CardProject.tsx";

const UserProjects = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textTransform: "uppercase",
          fontFamily: "Montserrat",
          textAlign: "start",
        }}
      >
        Mis Proyectos
      </Typography>
      <Box
        sx={{
          borderTop: "1px solid black",
          display: "flex",
          flexDirection: "column",
          padding: "1em .5em",
        }}
      >
       <CardProject/>
      </Box>
    </Box>
  );
};
export default UserProjects;
