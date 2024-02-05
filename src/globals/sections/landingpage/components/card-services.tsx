import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";

interface CardServicesInterface {
  icon: any;
  title: string;
  subtitle: string;
  img: string;
}

const CardServices = (props: CardServicesInterface) => {
  const msg = `Olá!! Gostaria de saber mais sobre a o Doutor Reparos!`;
  const zapHref = `https://api.whatsapp.com/send?phone=5561991711401&text=${encodeURIComponent(
    msg
  )}`;
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100%"
        p={2}
        rowGap={1}
      >
        {/* {props.icon ?? undefined} */}
        <ImageHead src={props.img} alt="" />
        <Typography variant="h6" textAlign="center">
          {props.title}
        </Typography>
        <Typography variant="subtitle2" textAlign="center">
          {props.subtitle}
        </Typography>
        <Button
          variant="contained"
          onClick={() => window.open(zapHref, "_blank")}
        >
          Saber Mais
        </Button>
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  background-color: white;
  -webkit-box-shadow: 7px 7px 12px 0px #e4e4e4;
  -moz-box-shadow: 7px 7px 12px 0px #e4e4e4;
  box-shadow: 7px 7px 12px 0px #e4e4e4;
  max-width: 250px;
`;

const ImageHead = styled("img")`
  width: 100%;
`;

export default CardServices;
