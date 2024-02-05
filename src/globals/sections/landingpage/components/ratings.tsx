import React from "react";
import { Box, Rating, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import { ratingsMock } from "@/_mock/landingpage";

const Ratings = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          color="white"
          letterSpacing={".2rem"}
          my={2}
          textAlign="center"
        >
          O que nossos clientes dizem
        </Typography>
      </Container>
      <MosaicContainer>
        {ratingsMock.map((v, i) => (
          <Box key={i}>
            <Typography variant="h6" color={ColorsPallete.primary}>
              {v.user}
            </Typography>
            <Typography variant="subtitle2" color={ColorsPallete.primary}>
              {v.text}
            </Typography>
            <Rating name="read-only" value={v.stars} readOnly />
          </Box>
        ))}
      </MosaicContainer>
    </>
  );
};

const Container = styled(Box)`
  background-color: ${ColorsPallete.primary};
  width: 100%;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MosaicContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  column-gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f4f4f4;
  row-gap: 1rem;
  @media screen and (max-width: 1080px) {
  }
`;

export default Ratings;
