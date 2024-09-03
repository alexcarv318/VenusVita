import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import ContactsPage from "src/pages/ContactsPage/ContactsPage.tsx";
import AboutUsPage from "src/pages/AboutUsPage/AboutUsPage.tsx";
import PricePage from "src/pages/PricePage/PricePage.tsx";
import ServicesPage from "src/pages/ServicesPage/ServicesPage.tsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/services" element={<ServicesPage />} />
      </Routes>
  );
}

export default App
