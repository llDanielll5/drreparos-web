import React from "react";
import { Box, Typography, styled } from "@mui/material";
import HeaderNavigation from "@/components/headerNavigation";
import { useRouter } from "next/router";
import { ColorsPallete } from "@/styles/colors";
import { servicesMock } from "@/_mock/services";
import Footer from "@/globals/sections/landingpage/components/footer";
import CreditsFooter from "@/globals/sections/landingpage/components/credits";
import Head from "next/head";

const ServicesPage = () => {
  const router = useRouter();

  const handleGetSingleService = (slug: string) => {
    router.push(`/servicos/${slug}`);
  };
  return (
    <Box>
      <Head>
        <title>Serviços Dr. Reparos - Todos Serviços</title>
      </Head>
      <HeaderNavigation />
      <Box>
        <Typography
          textAlign="center"
          variant="h4"
          color={ColorsPallete.primary}
        >
          Todos os Serviços
        </Typography>

        <GridContainer>
          {servicesMock.map((v, i) => (
            <CardSingle key={i} onClick={() => handleGetSingleService(v.slug)}>
              <StyledImage src={v.img} />
              <SmoothDisplay>
                <Typography variant="h4" textAlign="center" color="white">
                  {v.title}
                </Typography>
              </SmoothDisplay>
            </CardSingle>
          ))}
        </GridContainer>
      </Box>
      <Footer />
      <CreditsFooter />
    </Box>
  );
};

const GridContainer = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 33%);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-items: center;
  padding: 2rem 3rem;
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 50%);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    align-items: center;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 100%);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    align-items: center;
  }
`;
const StyledImage = styled("img")`
  width: 100%;
  max-height: 280px;
`;
const CardSingle = styled(Box)`
  max-width: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const SmoothDisplay = styled(Box)`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ServicesPage;
