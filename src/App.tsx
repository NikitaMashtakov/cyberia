import { useState } from 'react';

import './App.module.css';
import { FeedbackForm } from './components/Form/FeedbackForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FeedbackForm>Раскажитеи своем проекте</FeedbackForm>
    </>
  );
}

export default App;
