import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<MainPage />} />
      </Routes>
  );
}

export default App
