import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home'
import Product from './pages/product'
import Cart from './pages/cart'
import CartProvider from "./context/cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
