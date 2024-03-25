import "./App.css";
import Landingpage from "./Pages/Landingpage/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrolltotop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
