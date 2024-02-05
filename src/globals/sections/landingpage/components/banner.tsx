import React from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import Down from "@mui/icons-material/ExpandCircleDown";
import MiniCardBanner from "./mini-card";

const Banner = () => {
  return (
    <Box position="relative">
      <BannerSection>
        <Typography variant="h4" color="white">
          Sofisticação em Conserto!
        </Typography>
      </BannerSection>
      <ImageSection>
        <MiniCardBanner text="Reparos ou reformas? Chame o Doutor Reparos!" />
        <MiniCardBanner text="Preço Justo e Orçamento Gratuito!" hasReverse />
        <MiniCardBanner text="Atendimento Rápido e Personalizado!" />
      </ImageSection>
      <DownArrow size="large">
        <Down fontSize="large" sx={{ color: ColorsPallete.primary }} />
      </DownArrow>
    </Box>
  );
};

const BannerSection = styled(Box)`
  background-color: ${ColorsPallete.primary};
  height: 4rem;
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
  padding: 0 2rem;
`;

const DownArrow = styled(IconButton)`
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  bottom: -40px;
`;

export default Banner;
