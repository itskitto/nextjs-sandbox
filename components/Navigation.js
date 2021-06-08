import styled from "styled-components";

const Navigation = () => {
  return (
    <Container>
      <Logo>itskitto</Logo>
      <NavigationMenu>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Blog</NavigationItem>
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
  font-size: 2em;
  font-weight: 700;
`;

const NavigationMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationItem = styled.li`
  margin: 0 10px;
`;

export default Navigation;
