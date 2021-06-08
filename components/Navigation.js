import styled from "styled-components";
import { Moon } from "@styled-icons/heroicons-solid";
import NowPlaying from "./NowPlaying";

const Navigation = () => {
  return (
    <Container>
      <Logo>itskitto</Logo>
      <NavigationMenu>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Blog</NavigationItem>
        <ThemeSwitcher />
        <NowPlaying />
      </NavigationMenu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 2.25em;
  font-weight: 900;
`;

const NavigationMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationItem = styled.li`
  margin: 0 10px;
  font-size: 1.15em;
  font-weight: 500;
`;

const ThemeSwitcher = styled(Moon)`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  margin-bottom: 5px;
  color: #000;
`;

export default Navigation;
