import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Grid, Link, Typography, useTheme } from "@mui/material";

const FooterDesktop = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[800],
        p: 6,
        fontFamily: "Roboto",
        borderTop: "1px solid #E5E5E5",
        minHeight: "1rem",
        position: "relative",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",        
      }}
    >
      <Grid container spacing={5} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0.3rem",
              marginBottom: "0.2rem",
              transition: "all 0.5s ease-out allow-discrete",
              "&:hover": {
                color: theme.palette.secondary.main,
                transform: "scale(1.1)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                fontFamily: "Montserrat",
                color: theme.palette.text.primary,
                marginRight: "0.5rem",
              }}
            >
              CLASSTER
            </Typography>
          </Box>
          <Typography
            sx={{ marginLeft: "0.4rem", fontFamily: "Roboto", fontWeight: 500 }}
            variant="body2"
            color="text.secondary"
          >
            Puedes encontrarnos en nuestras redes sociales:
          </Typography>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
              marginLeft: "0.2rem",
            }}
          >
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            gap: "0.5rem",
          }}
        >
          <Typography sx={{
            borderBottom: "2px solid #252525",
          }} variant="h6" color="text.primary" gutterBottom>
            Secciones
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sobre Nosotros
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contacto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Blog
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "auto", 
          position: "absolute", 
          bottom: 0,
          marginBottom: "0.5rem",
        }}
        mt={8}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.1rem",
              textDecoration: "none",
            }}
            href="/"
          >
            ClassTer
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterDesktop;
