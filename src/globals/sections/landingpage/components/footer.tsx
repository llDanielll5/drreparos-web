import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const facebookUrl = "https://facebook.com";
  const instagramUrl = "https://instagram.com";

  const openFacebook = () => window.open(facebookUrl, "_blank");
  const openInstagram = () => window.open(instagramUrl, "_blank");

  return (
    <Container>
      <Box display="flex" justifyContent="center" width="100%">
        <LogoWhite src={"/images/white-logo.png"} alt="" />
      </Box>
      <Box display="flex" justifyContent="space-around" width="100%">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle1">Nossas Redes Sociais:</Typography>
          <Box display="flex" alignItems="center" columnGap={2}>
            <FacebookIcon fontSize="large" onClick={openFacebook} />
            <InstagramIcon fontSize="large" onClick={openInstagram} />
          </Box>
        </Box>

        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="subtitle1">
            Gostou dos nossos serviços? Solicite um orçamento!
          </Typography>
          <Typography variant="subtitle1">(61) 9 91771-1401</Typography>
        </Box>
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  background-color: ${ColorsPallete.primary};
  width: 100vw;
  padding: 2rem 4rem 4rem 4rem;
  color: white;
`;

const LogoWhite = styled("img")`
  max-width: 300px;
`;

export default Footer;
