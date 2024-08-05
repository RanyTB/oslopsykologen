import { Route, Routes } from "react-router-dom";
import TjenestePage from "./TjenestePage";
import TjenesterPage from "./TjenesterPage";
import GruppeTjenestePage from "./GruppeTjenestePage";

const Tjenester = () => {
  return (
    <Routes>
      <Route path="/" element={<TjenesterPage />} />
      <Route path=":tjenestetype" element={<TjenestePage />} />
      <Route
        path="grupper/:gruppeTerapiType"
        element={<GruppeTjenestePage />}
      />
    </Routes>
  );
};

export default Tjenester;
