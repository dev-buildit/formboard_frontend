import formboardLogo from "../assets/logo-2.png";
export default function Home() {
  return (
    <>
      <div className="container-fluid p-5 d-flex align-items-center justify-content-center bg-primary rounded-3 mt-5">
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={formboardLogo} alt="Formboard Logo" className="me-3" />
            <h1 className="display-4 text-white">Welcome</h1>
          </div>
          <p className="text-center lead text-white mt-3">
            Select a form or project to get started
          </p>
        </div>
      </div>
    </>
  );
}
