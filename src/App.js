import "./App.css";
import Navbar from "./components/Navbar";
import AllStudent from "./components/AllStudents";
import AddStudent from "./components/AddStudent";
import Notfound from "./components/Notfound";

import { Routes, Route } from "react-router-dom";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllStudent />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
