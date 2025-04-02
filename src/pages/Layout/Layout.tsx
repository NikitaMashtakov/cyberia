import styled from 'styled-components';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

const StyledContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // width: 65vw;
  margin: auto;
`;
export const Layout = () => {
  return (
    <StyledContainer>
      <Header />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledContainer>
  );
};
