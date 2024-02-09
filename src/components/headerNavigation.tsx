import React from "react";
import { Box, IconButton, Menu, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigationMenu } from "@/_mock/landingpage";
import useWindowSize from "@/globals/hooks/useWindowSize";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderNavigation = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (e: any) => setAnchorEl(e.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <Container>
      <Logo src={"/images/logo.png"} alt="" onClick={() => router.push("/")} />
      <Box display="flex" alignItems="center" columnGap={2}>
        {width! > 760 &&
          navigationMenu.map((v, i) => (
            <Link key={i} href={v.href} passHref>
              <MenuLink variant="subtitle1">{v.text}</MenuLink>
            </Link>
          ))}
        {width! <= 760 && (
          <IconButton onClick={handleOpenMenu}>
            <MenuIcon sx={{ fontSize: 30, color: ColorsPallete.primary }} />
          </IconButton>
        )}
      </Box>
      <MobileMenu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {navigationMenu.map((v, i) => (
          <LinkContainer
            passHref
            href={v.href}
            key={i}
            onClick={handleCloseMenu}
          >
            <MenuLink variant="subtitle1">{v.text}</MenuLink>
          </LinkContainer>
        ))}
      </MobileMenu>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 2rem;
  background-color: white;
  z-index: 2;
  @media screen and (max-width: 760px) {
    justify-content: space-between;
  }
`;

const Logo = styled("img")`
  cursor: pointer;
  width: 30%;
  max-width: 250px;
`;

const LinkContainer = styled(Link)`
  padding: 0 2rem;
`;
const MobileMenu = styled(Menu)`
  padding: 2rem;
`;
const MenuLink = styled(Typography)`
  color: ${ColorsPallete.primary};
  transition: 0.4s;
  :hover {
    color: ${ColorsPallete.secondary};
    margin-bottom: 10px;
  }
  @media screen and (max-width: 760px) {
    text-align: center;
    border-bottom: 1px solid #d5d5d5;
    padding: 0 1rem;
  }
`;

export default HeaderNavigation;
