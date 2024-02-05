import React from "react";
import { Box, Typography, styled } from "@mui/material";

const MiniCardBanner = (props: { text: string; hasReverse?: boolean }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={props.hasReverse ? "row-reverse" : "row"}
      width={"100%"}
      alignItems={"center"}
    >
      <MiniCard>
        <Typography variant="h4">{props.text}</Typography>
      </MiniCard>
    </Box>
  );
};

const MiniCard = styled(Box)`
  background-color: rgba(250, 250, 250, 0.8);
  padding: 0.3rem 1rem;
  width: max-content;
`;
export default MiniCardBanner;
