import { Box, Typography } from "@mui/material";

const AboutUs = () => {
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem 5rem",
            height: "90vh",
        }}>
            <Typography sx={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#0A1944",
                fontFamily: "Roboto",
                textAlign: "center",
                marginBottom: "3rem",
            }}>
                Sobre nosotros
            </Typography>
        </Box>
    )
}
export default AboutUs;