import { useEffect, useState } from 'react';
import './App.module.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router';
import { Layout } from './pages/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';
import { Cases } from './pages/Cases/Cases';

const StyledMain = styled.main`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 65vw;
  margin: auto;
`;

function App() {
  // const { isLoading } = useStore();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cases" element={<Cases />}></Route>
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
