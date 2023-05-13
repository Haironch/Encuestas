import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navar from "./components/Navar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Students from "./pages/Students";
import "./App.css";

function App() {
  const [studentUpdate, setStudentUpdate] = useState({});
 
  return (
      <BrowserRouter>
        <Navar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/crear-estudiante"
            element={
              <Signup
                studentUpdate={studentUpdate}
                setStudentUpdate={setStudentUpdate}
              />
            }
          />
          <Route
            path="/estudiantes"
            element={
              <Students
                studentUpdate={studentUpdate}
                setStudentUpdate={setStudentUpdate}
              />
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
