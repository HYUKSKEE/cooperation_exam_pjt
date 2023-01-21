import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Test from './pages/Test';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
