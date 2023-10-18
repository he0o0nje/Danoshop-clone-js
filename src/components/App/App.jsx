import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import * as style from "./AppStyle";
import GlobalStyles from "../../GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <style.ShadowLayer></style.ShadowLayer>
    </>
  );
}

export default App;
