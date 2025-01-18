import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/Signup";
import Header from "./components/Header";
import FormInfo from "./pages/FormInfo";
import LoginPage from "./pages/Login";

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
          <Route path="auth" element={<Outlet />}>
            <Route path="signup" element={<SignUpForm />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="form/:id" element={<FormInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
