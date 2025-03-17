import { useEffect, useState } from 'react';

import './App.module.css';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import CasesContainer from './components/CasesContainer/CasesContainer';
import styled from 'styled-components';
import { useStore } from './store/store';
import { Loader } from './components/Loader/Loader';
import Header from './components/Header/Header';

const StyledMain = styled.main`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 65vw;
  margin: auto;
`;

function App() {
  const { isLoading } = useStore();

  return (
    <StyledMain>
      {/* {isLoading ? (
        <Loader />
      ) : (

      )} */}
      <>
        <Header />
        <CasesContainer />
        <FeedbackForm>Расскажите о вашем проекте:</FeedbackForm>
      </>
    </StyledMain>
  );
}

export default App;
