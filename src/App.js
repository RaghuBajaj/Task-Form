import { useContext } from "react";
import "./App.css";
import Page1 from "./comonents/Page1";
import Page2 from "./comonents/Page2";
import Page3 from "./comonents/Page3";
import Page4 from "./comonents/Page4";
import { PlanContext } from "./context";
import Preview from "./comonents/Preview";

function App() {
  const { page, setPage } = useContext(PlanContext);
  const handlePageChange = () => {
    if (page < 5) {
      setPage(page + 1);
      console.log(page);
    }
  };
  return (
    <div className="full_app">
      <div className="shade_app"></div>
      <div className="red_l_app">
        <p className="line_app bg2"></p>
        <p className={page >= 2 ? "line_app bg2" : "line_app bg1"}></p>
        <p className={page >= 3 ? "line_app bg2" : "line_app bg1"}></p>
        <p className={page >= 4 ? "line_app bg2" : "line_app bg1"}></p>
      </div>
      <div className="components_app">
        {page === 1 && <Page1 />}
        {page === 2 && <Page2 />}
        {page === 3 && <Page3 />}
        {page >= 4 && <Page4 />}
        {page < 4 && <Preview />}
      </div>
      <div className="footer_app">
        {page < 4 && (
          <button
            className="btn_app"
            onClick={() => {
              handlePageChange();
            }}
          >
            Next
          </button>
        )}
        {page === 4 && (
          <button
            className="btn_app"
            onClick={() => {
              handlePageChange();
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
