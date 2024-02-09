import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import { servicesMock } from "@/_mock/services";
import { useRouter } from "next/router";
import CardServices from "./card-services";
import AddIcon from "@mui/icons-material/Add";
import useWindowSize from "@/globals/hooks/useWindowSize";

const Services = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  return (
    <Box sx={{ backgroundColor: "#f4f4f4" }} pb={10} id={"services"}>
      <Box
        sx={{ backgroundColor: ColorsPallete.primary }}
        width={"100vw"}
        mb={5}
      >
        <Typography
          textAlign="center"
          variant="h4"
          color="white"
          letterSpacing={".5rem"}
          p={1}
        >
          Serviços
        </Typography>
      </Box>
      <ContainerPadding>
        <GridContainer>
          {servicesMock.map((v, i) => {
            if (width! > 1200 && i < 8)
              return (
                <CardServices
                  key={i}
                  slug={v.slug}
                  subtitle={v.subtitle}
                  title={v.title}
                  img={v.img}
                />
              );
            else if (width! > 760 && i < 6)
              return (
                <CardServices
                  key={i}
                  slug={v.slug}
                  subtitle={v.subtitle}
                  title={v.title}
                  img={v.img}
                />
              );
            else if (width! > 550 && i < 4)
              return (
                <CardServices
                  key={i}
                  slug={v.slug}
                  subtitle={v.subtitle}
                  title={v.title}
                  img={v.img}
                />
              );
            else if (i < 4)
              return (
                <CardServices
                  key={i}
                  slug={v.slug}
                  subtitle={v.subtitle}
                  title={v.title}
                  img={v.img}
                />
              );
          })}
        </GridContainer>
        <Box display="flex" justifyContent="right" width="100%" mt={2} pr={2}>
          <Button
            variant="contained"
            sx={{ fontSize: "1rem" }}
            endIcon={<AddIcon />}
            onClick={() => router.push("/servicos")}
          >
            Ver Mais Serviços
          </Button>
        </Box>
      </ContainerPadding>
    </Box>
  );
};

const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  width: 100%;
  align-content: center;
  justify-items: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 33%);
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 100%);
    overflow-x: auto;
    width: 100%;
    padding: 2rem 0;
  }
`;

const ContainerPadding = styled(Box)`
  padding: 0 5rem;
  @media screen and (max-width: 580px) {
    padding: 0;
  }
`;

export default Services;
