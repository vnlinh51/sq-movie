// Import Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import Header from './component/header/Header';
import Home from './pages/Home';
import Footer from './component/footer/Footer';
import NotFund from './pages/NotFund';
import PageHeader from './component/page-header/PageHeader';
import Catalog from './pages/Catalog';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="*" element={<NotFund />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
