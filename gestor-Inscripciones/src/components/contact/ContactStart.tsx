import { Box, Typography, useTheme } from "@mui/material";

export const ContactStart = () => {
    const theme = useTheme();

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', padding: { xs: '2rem', md: '5rem' } }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: { xs: '6rem', md: '8rem' },
                    height: { xs: '213px', md: '350px' },
                    transform: 'translate(1%, -1%)',
                }}>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 101 213"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse cx="110.427" cy="110.569" rx="73" ry="73.5" transform="rotate(146.538 110.427 110.569)" fill="url(#paint0_linear_149_1190)" />
                        <ellipse cx="42.1629" cy="82.6417" rx="25.0121" ry="25" transform="rotate(146.538 42.1629 82.6417)" fill="url(#paint1_linear_149_1190)" />
                        <ellipse cx="54.7582" cy="56.3367" rx="10.0049" ry="10" transform="rotate(146.538 54.7582 56.3367)" fill="url(#paint2_linear_149_1190)" />
                        <defs>
                            <linearGradient id="paint0_linear_149_1190" x1="110.427" y1="37.0685" x2="106.517" y2="245.594" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#0A1944" />
                                <stop offset="1" stopColor="#01E8B9" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_149_1190" x1="42.1629" y1="57.6417" x2="40.8427" y2="128.569" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#0A1944" />
                                <stop offset="1" stopColor="#01E8B9" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_149_1190" x1="53.599" y1="48.672" x2="49.6857" y2="75.4526" gradientUnits="userSpaceOnUse">
                                <stop offset="0.015" stopColor="#0A1944" />
                                <stop offset="1" stopColor="#01E8B9" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Box>

                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: { xs: '6rem', md: '8rem' },
                    height: { xs: '245px', md: '400px' },
                    transform: 'translate(-1%, 15%)',
                }}>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 107 245"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse cx="-20.1978" cy="118.404" rx="73" ry="73.5" transform="rotate(-42.9639 -20.1978 118.404)" fill="url(#paint0_linear_149_1193)" />
                        <ellipse cx="51.7403" cy="134.679" rx="25.0121" ry="25" transform="rotate(-42.9639 51.7403 134.679)" fill="url(#paint1_linear_149_1193)" />
                        <ellipse cx="43.6597" cy="162.703" rx="10.0049" ry="10" transform="rotate(-42.9639 43.6597 162.703)" fill="url(#paint2_linear_149_1193)" />
                        <defs>
                            <linearGradient id="paint0_linear_149_1193" x1="-20.1978" y1="44.9042" x2="-24.1077" y2="253.43" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#0A1944" />
                                <stop offset="1" stopColor="#01E8B9" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_149_1193" x1="51.7403" y1="109.679" x2="50.4201" y2="180.606" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#0A1944" />
                                <stop offset="1" stopColor="#01E8B9" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_149_1193" x1="42.5005" y1="155.038" x2="38.5872" y2="181.818" gradientUnits="userSpaceOnUse">
                                <stop offset="0.015" stopColor="#0A1944" />
                                <stop offset="1" stopColor="#01E8B9" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                padding: '2rem',
            }}>
                <Typography sx={{
                    fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
                    fontWeight: 'bold',
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    marginTop: { xs: '2rem', md: '3rem' },
                    marginBottom: { xs: '2rem', md: '3rem' },
                    fontFamily: 'Montserrat',
                }}>
                    Contacto
                </Typography>
                <Typography sx={{
                    fontSize: { xs: '1.4rem', md: '2rem' },
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    marginBottom: '2rem',
                    fontFamily: 'Roboto',
                    fontWeight: 500,
                }}>
                    ¡¿Te gustaría que alguno de tus proyectos se muestre en nuestra plataforma?!
                </Typography>
                <Typography sx={{
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    marginBottom: '2rem',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    width: { xs: '85%', md: '65%' },
                }}>
                    Entonces envíanos un mensaje y nos pondremos en contacto contigo a la brevedad.
                </Typography>
            </Box>
        </Box>
    );
};
