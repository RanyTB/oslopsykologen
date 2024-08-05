import Header from "./components/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import OmMeg from "./pages/Om Meg";
import Tjenester from "./pages/Tjenester";
import Priser from "./pages/Priser";
import Hjem from "./pages/Hjem";
import Footer from "./components/Footer";
import Layout from "./Layout";
import "./App.css";
import texts from "./cms";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Hjem />} />
            <Route path="/om-oss" element={<OmMeg />} />
            <Route path="/tjenester/*" element={<Tjenester />} />
            <Route path="/bestill" element={<Priser />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<div>{texts.common.pageNotFound}</div>} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
