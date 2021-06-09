import styled from 'styled-components';
import { Moon } from '@styled-icons/heroicons-solid';
import NowPlaying from './NowPlaying';

const Navigation = () => {
  return (
    <Container>
      <ThemeSwitcher />
      <NavigationMenu>
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
  color: #000;
`;

export default Navigation;
