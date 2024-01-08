import { Route, Routes } from "react-router-dom";
import TjenestePage from "./TjenestePage";
import TjenesterPage from "./TjenesterPage";

const Tjenester = () => {
  return (
    <Routes>
      <Route path="/" element={<TjenesterPage />} />
      <Route path=":tjenestetype" element={<TjenestePage />} />
    </Routes>
  );
};

export default Tjenester;
