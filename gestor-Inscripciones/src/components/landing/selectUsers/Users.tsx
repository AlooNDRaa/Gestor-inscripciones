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
            justifyContent: "center",
            padding: "3rem 5rem", 
            height: "90vh",
        }}>
            <Typography sx={{
                fontSize: "2.5rem", 
                fontWeight: "bold",
                color: theme.palette.text.secondary,
                fontFamily: "Roboto",
                textAlign: "center",
                marginBottom: "3rem", 
            }}>
                Ingrese como...
            </Typography>

            <Box sx={{
                display: "flex", 
                justifyContent: "center",
                gap: "4rem", 
                width: "100%",
                textAlign: "center",
                "@media (max-width: 600px)": { 
                    flexDirection: "column",
                },
            }}>
                <Button sx={{
                    backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
                    borderRadius: "0.8rem", 
                    minWidth: "16rem",
                    height: "6rem",
                    boxShadow: "0px 0px 12px rgba(0,0,0,0.6)",
                    transition: "all 0.3s ease-in-out",
                   '&:hover': {
                        backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.contrastText}, ${theme.palette.background.paper})`,
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                        borderRadius: "1rem",
                        transform: "scale(1.1)",
                    }
                }} onClick={handleMentorClick}>
                    <Typography sx={{
                        fontSize: "1.3rem",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}>
                        <RiContactsLine size={30}/> Mentor
                    </Typography>
                </Button>

                <Button sx={{
                    backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.contrastText})`,
                    borderRadius: "0.8rem",
                    minWidth: "16rem",
                    height: "6rem",
                    boxShadow: "0px 0px 12px rgba(0,0,0,0.6)",
                    transition: "all 0.3s ease-in-out",
                    '&:hover': {
                        backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.contrastText}, ${theme.palette.background.paper})`,
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                        borderRadius: "1rem",
                        transform: "scale(1.1)",
                    }
                }} onClick={handleStudentClick}>
                    <Typography sx={{
                        fontSize: "1.3rem",
                        fontWeight: 500,
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
                        backgroundColor: "white",
                        padding: "2rem",
                        borderRadius: "20px",
                        width: "50%", 
                        maxHeight: "80%", 
                        overflowY: "auto",
                        position: "relative",
                        boxShadow: 24,
                    }}>
                        <Button
                            onClick={handleCloseModal}
                            sx={{
                                position: "absolute",
                                top: "10px",
                                right: "5px",
                                color: theme.palette.secondary.main,
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
};

export default SelectUsers;
