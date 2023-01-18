import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Navigate to="/" /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
