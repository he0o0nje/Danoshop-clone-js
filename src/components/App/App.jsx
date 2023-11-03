import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import Cart from "../../pages/Cart/Cart";
import Login from "../../pages/Login/Login";
import * as style from "./AppStyle";
import GlobalStyles from "../../GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<AboutPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <style.ShadowLayer />
    </>
  );
}

export default App;
