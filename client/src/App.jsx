import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CategoriesList from "./components/categoriesList";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/products" element={<p>products</p>} />
        <Route path="/discount" element={<p>discount</p>} />
        <Route path="/cart" element={<p>cart</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
