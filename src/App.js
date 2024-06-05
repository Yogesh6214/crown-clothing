import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSignUpPage from "./components/sign-in/sigin-in.component";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInandSignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
