import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Select from './pages/Select/Select';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Exam from './pages/Exam/Exam';
import Result from './pages/Result/Result';

const Router = (): JSX.Element => {
  return (
    <HashRouter basename="/">
      <Wrap>
        <Header />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="select" element={<Select />} />
          <Route path=":type/:id" element={<Exam />} />
          <Route path=":type/result" element={<Result />} />
        </Routes>
        <Footer />
      </Wrap>
    </HashRouter>
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
