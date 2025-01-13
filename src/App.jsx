import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

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

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "100vw" }}
      >
        <h1>FORMBOARD PROJECT</h1>
      </div>
    </>
  );
}

export default App;
