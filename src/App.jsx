import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import BadgeDocs from "./docs/BadgeDocs";
import ButtonDocs from "./docs/ButtonDocs";
import CardDocs from "./docs/CardDocs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/badge" />} />
            <Route path="/badge" element={<BadgeDocs />} />
            <Route path="/button" element={<ButtonDocs />} />
            <Route path="/card" element={<CardDocs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
