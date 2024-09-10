import { Box, Typography, useTheme } from '@mui/material';
import { FaGithub, FaLinkedin, FaFigma } from 'react-icons/fa';
import '../../App.css';

const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                minHeight: '6rem', 
                width: '100%',
                borderTop: '1px solid #E5E5E5',
                py: 2,
                position: 'relative',
                bottom: 0,
                left: 0,
                zIndex: 10,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '1.6rem',
                    fontWeight: 'medium',
                    fontFamily: 'Roboto',
                    textAlign: 'center',
                    color: theme.palette.text.primary,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.2rem',
                        mb: '0.9rem',
                    }}
                >
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://www.figma.com/design/Q8kgQVkfVRZXnB2xtAoUdj/PoloIT---New-desing?node-id=0-1&node-type=CANVAS&t=CUIpFKWOzaBCUjMw-0" target="_blank" rel="noopener noreferrer">
                        <FaFigma size={30} />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                </Box>
                <Typography
                    sx={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        color: theme.palette.text.primary,
                    }}
                >
                    © 2024 ClassTer Inc.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
