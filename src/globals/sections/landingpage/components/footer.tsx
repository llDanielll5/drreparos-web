import React from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const facebookUrl = "https://facebook.com";
  const instagramUrl = "https://instagram.com";

  const openFacebook = () => window.open(facebookUrl, "_blank");
  const openInstagram = () => window.open(instagramUrl, "_blank");

  return (
    <Container id={"footer"}>
      <InnerContainer>
        <LogoWhite src={"/images/logo.png"} alt="" />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle1">Nossas Redes:</Typography>
          <Box display="flex" alignItems="center">
            <IconButton
              size="small"
              sx={{ color: ColorsPallete.primary }}
              onClick={openInstagram}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{ color: ColorsPallete.primary }}
              onClick={openFacebook}
            >
              <FacebookIcon />
            </IconButton>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="subtitle1" textAlign="center">
            Gostou dos nossos serviços? Solicite um orçamento!
          </Typography>
          <Typography variant="subtitle1">
            <b>(62) 9 9278-4628 </b>
          </Typography>
        </Box>
      </InnerContainer>
    </Container>
  );
};

const Container = styled(Box)`
  width: 100vw;
  padding: 2rem 4rem 4rem 4rem;
  color: ${ColorsPallete.primary};
`;

const LogoWhite = styled("img")`
  max-width: 180px;
`;

const InnerContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

export default Footer;
