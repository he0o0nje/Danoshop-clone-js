import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import Cart from "../../pages/Cart/Cart";
import Login from "../../pages/Login/Login";
import * as style from "./AppStyle";
import GlobalStyles from "../../GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollProvider } from "../Sub/ScrollContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<AboutPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <style.ShadowLayer />
      </ScrollProvider>
    </>
  );
}

export default App;
