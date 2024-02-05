import LandingPage from "@/globals/sections/landingpage";
import { Typography } from "@mui/material";
import Head from "next/head";

export default function Application() {
  return (
    <>
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
    </>
  );
}
