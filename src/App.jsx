import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactanos from "./contactanos/Contactanos";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
