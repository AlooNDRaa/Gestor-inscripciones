import { Box, Button, Typography, useTheme } from "@mui/material";
import { PiStudent } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";



const SelectUsers = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2.5rem",
        }}>
            <Typography sx={{
                fontSize: "2.1rem",
                fontWeight: "bold",
                color: theme.palette.text.secondary,
                fontFamily: "Roboto",
                textAlign: "center",
                minWidth: "25rem",
                marginTop: "2rem",
            }}>
                Ingrese en ClassTer como...
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2.5rem",
                marginTop: "6rem",
                marginBottom: "2rem",
                gap: "2rem",
                textAlign: "center",
            }}>
                <Button sx={{
                    backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
                    borderRadius: "0.5rem",
                    marginBottom: "2rem",
                    minWidth: "18rem",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.contrastText,
                        color: theme.palette.primary.main,
                    },
                }}>
                    <Typography sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                        fontFamily: "Roboto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}>
                      <RiContactsLine size={25}/> Mentor
                    </Typography>
                </Button>
                <Button sx={{
                    backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
                    borderRadius: "0.5rem",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    minWidth: "18rem",
                    height: "6rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.contrastText,
                        color: theme.palette.primary.main,
                    },
                }}>
                    <Typography sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                        fontFamily: "Roboto",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}>
                       <PiStudent size={30}/> Alumno
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default SelectUsers;
