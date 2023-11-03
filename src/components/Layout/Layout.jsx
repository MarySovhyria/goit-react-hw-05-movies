
import { Outlet } from 'react-router-dom';
import { Links, Header, Container} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Links to="/" end>
              Home
            </Links>
            <Links to="/movies">Movie</Links> 
          </nav>
        </Header>
          <Outlet />
      </Container>
    </>
  );
};

export default Layout;