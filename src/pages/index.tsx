import Head from "next/head";
import LandingPage from "@/globals/sections/landingpage";
import { Box, Typography } from "@mui/material";

export default function Application() {
  return (
    <Box position="relative">
      <Head>
        <title>Doutor Reparos | Consertos e Manutenções</title>
        <meta
          name="description"
          content="Consertos e Manutenções para o seu Lar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </Box>
  );
}
