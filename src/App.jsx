import "./App.css";
// import TitleCards from './componets/TitleCards/TitleCards'

// import Hero from './componets/Hero/Hero'
// import Servicese from './componets/Servicese/Servicese'
// import Brands from './componets/Brands/Brands'
import Footer from "./componets/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NavBar from "./componets/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <NavBar/> */}
      {/* <Hero/>
      <Servicese />
      <TitleCards/>
      <Brands />
      <Footer /> */}
      {/* <Home /> */}
      
    </>
  );
}

export default App;
