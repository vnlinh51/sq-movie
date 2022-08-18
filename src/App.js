// Import Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import Home from './pages/Home';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import NotFund from './pages/NotFund';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="*" element={<NotFund />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
