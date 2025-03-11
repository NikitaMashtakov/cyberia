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
  const [cases, setCases] = useState([]);
  useEffect(() => {
    fetch('https://api.test.cyberia.studio/api/v1/projects')
      .then((loadedData) => loadedData.json())
      .then((loadedCases) => {
        setCases(loadedCases.items);
      });
  }, []);
  return (
    <main>
      <CasesContainer items={cases}></CasesContainer>
      <FeedbackForm>Раскажитеи своем проекте</FeedbackForm>
    </main>
  );
}

export default App;
