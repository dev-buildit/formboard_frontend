import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* Don't delete code within this two comment */}
      {/* The code below is for the prompt and alert */}
      <div id="modalContainer"></div>
      <div
        id="alertContainer"
        className="position-fixed text-center bottom-0 end-0 px-5"
      ></div>
      {/* Stopping here */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
