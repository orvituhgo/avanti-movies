import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import AllRoutes from "./configs/AllRoutes";

import Main from "./components/Main/Main";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Main>
        <AllRoutes />
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
