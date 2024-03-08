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
          content="Doutor Reparos - Consertos e Manutenções para o seu Lar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="doutor, reparos, reformas, pinturas, valparaíso, goiás, móveis, mudanças, elétrica, hidráulica, marido, aluguel, marido aluguel, brasília, df, entorno, marcenaria, esgoto, diversos, fibra sintética, carpintaria, pedreiro, ladrilheiro, vidraceiro, moldura, bolserie, moldura bolserie"
        />
        <meta name="robôs" content="index, follow"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </Box>
  );
}
