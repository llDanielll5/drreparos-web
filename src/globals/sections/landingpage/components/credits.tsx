import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";

const CreditsFooter = () => {
  return (
    <Container>
      <Typography variant="subtitle1">
        Página desenvolvida por{" "}
        <a href="https://sofx.vercel.app" target="_blank">
          <b>SOFX - Soluções Digitais</b>
        </a>
      </Typography>
      <Typography variant="subtitle1">
        2024© Todos Direitos Reservados!
      </Typography>
    </Container>
  );
};

const Container = styled(Box)`
  background-color: #e4e4e4;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  color: ${ColorsPallete.primary};
`;

export default CreditsFooter;
