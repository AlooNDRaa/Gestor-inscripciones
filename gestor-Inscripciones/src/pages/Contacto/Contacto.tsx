import { Box } from "@mui/material";
import { ContactStart } from "../../components/contact/ContactStart";
import ContactForm from "../../components/contact/ContactForm";



export default function ContactView() {
  return (
    <Box>
        <ContactStart/>
        <ContactForm/>
    </Box>
  )
}