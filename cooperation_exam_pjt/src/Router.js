import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Select from './pages/Select/Select';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Exam from './pages/Exam/Exam';

const Router = () => {
  return (
    <BrowserRouter>
      <Wrap>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/select" element={<Select />} />
          <Route path="/question" element={<Exam />} />
        </Routes>
        <Footer />
      </Wrap>
    </BrowserRouter>
  );
};

export default Router;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
