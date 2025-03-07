import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import LoginRegister from "./pages/LoginRegister";
import Register from "./pages/Register";
import Men from "./pages/Men";
import Fpage from "./pages/Fpage";
import Women from "./pages/Women";
import Contact from "./pages/Contact";
import Shopi from "./pages/Shopi";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart"; // Import Cart
import Search from "./pages/Search"; 

import axios from "axios";
import './App.css';

// Configure Axios Defaults
axios.defaults.baseURL = "http://localhost:5000"; // Ensure this is the correct backend URL
axios.defaults.withCredentials = true;

export default function App() {
  const [cartItems, setCartItems] = useState([]); // Manage cart state
  const [searchQuery, setSearchQuery] = useState(""); // Manage search query

  const addToCart = (product, size) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { product, size }
    ]);
  };

  return (
    <Router>
      <Navbar setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery as prop to Navbar */}
      <Routes>
        <Route path="/shopi" element={<Shopi />} />
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/fpage" element={<Fpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />

        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} // Pass setCartItems as prop
        />
        <Route
          path="/search"
          element={<Search searchQuery={searchQuery} />} // Pass searchQuery to Search page
        />
      </Routes>
    </Router>
  );
}