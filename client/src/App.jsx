import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CategoriesList from "./components/categoriesList";
import Main from "./pages/main";
import ProductsPage from "./pages/productsPage";
import DiscountsPage from "./pages/discountsPage";
import CategoryPage from "./pages/categoryPage";
import ProductPage from "./pages/productPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/discounts" element={<DiscountsPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<p>cart</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
