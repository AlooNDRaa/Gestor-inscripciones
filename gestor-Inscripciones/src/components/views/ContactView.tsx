import { Box } from "@mui/material";
import ContactForm from "../contact/ContactForm";
import Footer from "../generals/Footer";
import { ContactStart } from "../contact/ContactStart";



export default function ContactView() {
  return (
    <Box>
        <ContactStart/>
        <ContactForm/>
        <Footer/>
    </Box>
  )
}