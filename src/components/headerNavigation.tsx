import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigationMenu } from "@/_mock/landingpage";

const HeaderNavigation = () => {
  const router = useRouter();
  return (
    <Container>
      <Logo src={"/images/logo.png"} alt="" onClick={() => router.push("/")} />
      <Box display="flex" alignItems="center" columnGap={2}>
        {navigationMenu.map((v, i) => (
          <Link key={i} href={v.href} passHref>
            <MenuLink variant="subtitle1">{v.text}</MenuLink>
          </Link>
        ))}
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0.4rem 2rem;
`;

const Logo = styled("img")`
  cursor: pointer;
  width: 30%;
  max-width: 250px;
`;

const MenuLink = styled(Typography)`
  color: ${ColorsPallete.primary};
  transition: 0.4s;
  :hover {
    color: ${ColorsPallete.secondary};
    margin-bottom: 10px;
  }
`;

export default HeaderNavigation;
