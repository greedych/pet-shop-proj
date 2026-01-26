import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CategoriesList from "./components/categoriesList";
import Main from "./pages/main";
import ProductsList from "./components/productsList";
import ProductsPage from "./pages/productsPage";
import DiscountsPage from "./pages/discountsPage";
import Category from "./pages/category";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/discount" element={<DiscountsPage />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/cart" element={<p>cart</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
