import { Box, Button, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { PiStudent } from "react-icons/pi";
import FormStudent from "../../forms/formStudent.tsx";
import FormMentor from "../../forms/formMentor.tsx";
import { RiContactsLine } from "react-icons/ri";

const SelectUsers = () => {
    const theme = useTheme();
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    const handleMentorClick = () => {
        setModalType("mentor");
        setModalOpen(true);
    };

    const handleStudentClick = () => {
        setModalType("alumno");
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setModalType("");
    };

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
                minWidth: "17rem",
                maxWidth: "100vw",
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
                width: "100%",
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
                }} onClick={handleMentorClick} >
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
                }} onClick={handleStudentClick} >
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
            {isModalOpen && (
                <Box sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)", 
                    backdropFilter: "blur(4px)", 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: (theme) => theme.zIndex.modal,
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "white",
                        padding: "1rem",
                        borderRadius: "30px",
                        width: "90%",
                        height: "80%",
                        maxWidth: "100vw",
                        textAlign: "center",
                        position: "relative",
                        boxShadow: 24,
                    }}>
                        <Button
                            onClick={handleCloseModal}
                            sx={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                color: theme.palette.error.main,
                                fontSize: "2rem",
                            }}
                        >
                            <CloseIcon />
                        </Button>
                        {modalType === "mentor" && <FormMentor />}
                        {modalType === "alumno" && <FormStudent />}
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default SelectUsers;
