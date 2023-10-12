import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import { Reset } from "styled-reset";
import * as style from "./AppStyle";

function App() {
  return (
    <>
      <Reset />
      <HomePage></HomePage>
      {/* <AboutPage></AboutPage> */}
    </>
  );
}

export default App;
