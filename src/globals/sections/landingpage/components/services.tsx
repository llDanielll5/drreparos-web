import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { servicesMock } from "@/_mock/landingpage";
import CardServices from "./card-services";

const Services = () => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      width={"100%"}
      justifyContent="space-around"
      columnGap={5}
      rowGap={5}
      px={10}
      py={10}
      sx={{ backgroundColor: "#f4f4f4" }}
    >
      {servicesMock.map((v, i) => (
        <CardServices
          key={i}
          icon={v.icon}
          subtitle={v.subtitle}
          title={v.title}
          img={v.img}
        />
      ))}
    </Box>
  );
};

export default Services;
