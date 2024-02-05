import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ShieldIcon from "@mui/icons-material/Shield";
import SavingsIcon from "@mui/icons-material/Savings";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

const CardDifferences = (props: { title: string; icon: any }) => {
  const msg = `Olá!! Gostaria de saber mais sobre a o Doutor Reparos!`;
  const zapHref = `https://api.whatsapp.com/send?phone=5561991711401&text=${encodeURIComponent(
    msg
  )}`;
  return (
    <CardContainer>
      <Typography variant="h5">{props.title}</Typography>
      {props.icon ?? undefined}
      <Button
        variant="contained"
        sx={{ fontSize: "1rem" }}
        onClick={() => window.open(zapHref, "_blank")}
      >
        Saber Mais
      </Button>
    </CardContainer>
  );
};

const Differences = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap={5}
      width="100%"
      justifyContent="center"
      p={10}
      rowGap={"2rem"}
      flexWrap={"wrap"}
    >
      <CardDifferences
        icon={<PaidIcon style={{ fontSize: 100 }} />}
        title="Pagamento Facilitado"
      />
      <CardDifferences
        icon={<ShieldIcon style={{ fontSize: 100 }} />}
        title="Serviço com Garantia!"
      />
      <CardDifferences
        icon={<SavingsIcon style={{ fontSize: 100 }} />}
        title="Preço Justo!"
      />
      <CardDifferences
        icon={<MoneyOffIcon style={{ fontSize: 100 }} />}
        title="Orçamento Gratuito!"
      />
    </Box>
  );
};

const CardContainer = styled(Box)`
  border-radius: 0.3rem;
  border: 2px solid #d5d5d5;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e4e4e4;
  transition: 0.5s;
  row-gap: 2rem;
  min-width: 300px;
  :hover {
    opacity: 0.7;
  }
`;

export default Differences;
