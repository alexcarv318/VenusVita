import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import ContactsPage from "src/pages/ContactsPage/ContactsPage.tsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
  );
}

export default App
