//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import HeaderNavigation from "@/components/headerNavigation";
import { servicesMock } from "@/_mock/services";
import { ColorsPallete } from "@/styles/colors";
import Footer from "@/globals/sections/landingpage/components/footer";
import CreditsFooter from "@/globals/sections/landingpage/components/credits";
import Carousel from "react-elastic-carousel";

interface ServiceInterface {
  img: string;
  title: string;
  subtitle: string;
  slug: string;
  icon: string;
  services: string[];
  images: string[];
}

const ServicesDetailsPage = () => {
  const router = useRouter();
  let routerName = router.query?.slug;
  const [serviceDetails, setServiceDetails] = useState<ServiceInterface | null>(
    null
  );
  const breakPoints = [{ width: 1, itemsToShow: 1 }];

  const getServicesDetails = () => {
    let filter: any = servicesMock.find((e) => e.slug === routerName);
    setServiceDetails(filter);
  };

  useEffect(() => {
    if (routerName === undefined || routerName === null) return;

    getServicesDetails();
  }, [routerName]);

  return (
    <Box>
      <HeaderNavigation />
      <Box>
        <Typography
          textAlign="center"
          variant="h4"
          color={ColorsPallete.primary}
        >
          {serviceDetails?.title}
        </Typography>

        <StyledCarousel
          breakPoints={breakPoints}
          showArrows={false}
          itemPadding={[3]}
        >
          {serviceDetails?.images?.map((v, i) => (
            <StyledImage src={v} key={i} />
          ))}
        </StyledCarousel>

        <Typography
          px={2}
          variant="h5"
          textAlign="center"
          color={ColorsPallete.primary}
        >
          Nossos Serviços de {serviceDetails?.title} são:
        </Typography>

        <GridContainer>
          {serviceDetails?.services?.map((v, i) => (
            <Paper
              key={i}
              elevation={20}
              sx={{
                maxHeight: "150px",
                minHeight: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                color={ColorsPallete.primary}
                textAlign="center"
                p={2}
              >
                · {v}
              </Typography>
            </Paper>
          ))}
        </GridContainer>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
        py={5}
        sx={{ backgroundColor: ColorsPallete.primary }}
      >
        <Typography variant="h5" textAlign="center" color={"white"} pb={2}>
          Gostaria de receber um orçamento Gratuito?
        </Typography>
        <Button variant="contained">Receber Orçamento!</Button>
      </Box>

      <Footer />

      <CreditsFooter />
    </Box>
  );
};

const StyledImage = styled("img")`
  width: 50%;
  height: 350px;
  max-height: 350px;
  border-radius: 20px;
  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 760px) {
    width: 90%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
    min-width: 300px;
  }
`;

const GridContainer = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 33%);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 45%);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 90%);
  }
`;
const StyledCarousel = styled(Carousel)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 550px) {
    min-width: 100vw;
    padding: 0;
  }
`;

export default ServicesDetailsPage;
