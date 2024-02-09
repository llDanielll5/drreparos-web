import React from "react";
import { Box, Button, IconButton, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import MiniCardBanner from "./mini-card";
import { whatsappNumber } from "./card-services";

const Banner = () => {
  const msg = `Olá!! Gostaria de saber mais sobre a o Doutor Reparos!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    msg
  )}`;
  const handleOpenZap = () => window.open(zapHref, "_blank");

  return (
    <Box position="relative">
      <BannerSection>
        <TextTitle variant="h4" color="white" textAlign="center">
          Sofisticação em Conserto!
        </TextTitle>
      </BannerSection>

      <ImageSection>
        <MiniCardBanner
          text="Consertamos Tudo que for preciso!"
          textHeight={"h4"}
        />
        <MiniCardBanner text="Não cobramos Orçamentos!" textHeight={"h6"} />
        <CallButton variant="contained" onClick={handleOpenZap}>
          Entrar em Contato
        </CallButton>
      </ImageSection>
    </Box>
  );
};

const BannerSection = styled(Box)`
  background-color: ${ColorsPallete.primary};
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3rem;
`;

const ImageSection = styled("div")`
  background-image: url("/images/2.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
`;

const DownArrow = styled(IconButton)`
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  bottom: 0;
`;

const CallButton = styled(Button)`
  background-color: ${ColorsPallete.primary};
  transition: 0.4s;

  :hover {
    scale: 110%;
    background-color: rgb(255, 100, 0);
  }
`;

const TextTitle = styled(Typography)`
  @media screen and (max-width: 760px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 580px) {
    max-width: 80%;
    font-size: 1.3rem;
  }
`;

export default Banner;
