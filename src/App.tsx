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
  // const [cases, setCases] = useState([]);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.test.cyberia.studio/api/v1/projects')
  //     .then((loadedData) => loadedData.json())
  //     .then((loadedCases) => {
  //       setCases(loadedCases.items);
  //     });
  //   fetch('https://api.test.cyberia.studio/api/v1/project-categories')
  //     .then((loadedData) => loadedData.json())
  //     .then((loadedCategories) => {
  //       setCategories(loadedCategories.items);
  //     });
  // }, []);
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
        <FeedbackForm>Раскажите о своем проекте</FeedbackForm>
      </>
    </StyledMain>
  );
}

export default App;
