import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<p>main</p>} />
        <Route path="/categories" element={<p>categories</p>} />
        <Route path="/products" element={<p>products</p>} />
        <Route path="/discount" element={<p>discount</p>} />
        <Route path="/cart" element={<p>cart</p>} />
      </Routes>
    </>
  );
}

export default App;
