import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Home from "./home/Home";
import Contactanos from "./contactanos/Contactanos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main>
          <Home />
          <Contactanos />
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
