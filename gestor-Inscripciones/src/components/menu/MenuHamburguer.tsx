import React, { useState } from "react";
import  { useNavigate }  from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Backdrop,
  Theme,
} from "@mui/material";
import { styled } from "@mui/system";
import { FiHome } from "react-icons/fi";
import { RiContactsLine, RiAdminLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { PiUsersFourLight } from "react-icons/pi";



const Line = styled(Box)(() => ({
  width: "2rem",
  height: "1px",
  backgroundColor: "#000",
  margin: "0.33rem 0",
  transition: "0.4s",
  borderRadius: "5px",
  zIndex: 1001,
}));

const MenuContainer = styled(Box)<{ open: boolean }>(({ open }) => ({
  position: "fixed",
  top: 0,
  left: open ? 0 : "-100%",
  width: "80%",
  height: "100vh",
  backgroundColor: "#fff",
  boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
  transition: "left 0.4s ease",
  zIndex: 1001,
  paddingTop: "60px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
}));

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme<Theme>();
  const navigate = useNavigate();

  const handleBackdropClick = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          top: "1rem",
          left: "0",
          right: "1rem",
          zIndex: 1000,
        }}
      >
        <Box
          onClick={() => setOpen(!open)}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            padding: "0.5rem",
            top: "0rem",
            right: "0.5rem",
          }}
        >
          <Line
            sx={{
              transform: open ? "rotate(-45deg) translate(-7px, 6px)" : "rotate(0)",
            }}
          />
          <Line sx={{ width: "1.5rem", opacity: open ? 0 : 1 }} />
          <Line
            sx={{
              transform: open ? "rotate(45deg) translate(-7px, -6px)" : "rotate(0)",
            }}
          />
        </Box>

        <MenuContainer onClick={() => {
          setOpen(false);
        }} open={open}>
          <List sx={{
            color: theme.palette.text.primary,
          }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
              button
              onClick={() => navigate("/")}
            >
              <FiHome size={24} />
              <ListItemText
                primary="Inicio"
                primaryTypographyProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    marginLeft: "1rem",
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
              button
              onClick={() => navigate("/contacto")}
            >
              <RiContactsLine size={24} />
              <ListItemText
                primary="Contacto"
                primaryTypographyProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    marginLeft: "1rem",
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
              button
              onClick={() => setOpen(false)}
            >
              <IoBookOutline size={24} />
              <ListItemText
                primary="Blog"
                primaryTypographyProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    marginLeft: "1rem",
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
              button
              onClick={() => setOpen(false)}
            >
              <PiUsersFourLight size={27} />
              <ListItemText
                primary="Sobre Nosotros"
                primaryTypographyProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    marginLeft: "1rem",
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
              button
              onClick={() => setOpen(false)}
            >
              <RiAdminLine size={24} />
              <ListItemText
                primary="Iniciar Sesion"
                primaryTypographyProps={{
                  sx: {
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    marginLeft: "1rem",
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </ListItem>
          </List>
        </MenuContainer>
      </Box>

      <Backdrop
        sx={{
          zIndex: 1000,
          color: "#fff",
          backdropFilter: open ? "blur(12px)" : "none",
          transition: "backdrop-filter 0.4s ease",
        }}
        open={open}
        onClick={handleBackdropClick}
      />
    </Box>
  );
};

export default HamburgerMenu;
