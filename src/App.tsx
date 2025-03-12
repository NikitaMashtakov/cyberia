import { useEffect, useState } from 'react';

import './App.module.css';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import CasesContainer from './components/CasesContainer/CasesContainer';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  return (
    <main>
      <CasesContainer></CasesContainer>
      <FeedbackForm>Раскажите о своем проекте</FeedbackForm>
    </main>
  );
}

export default App;
