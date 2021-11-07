import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Products from "./Components/Products";
import "./App.css";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const products = [
    { name: "Fancy Product", oldPrice: "$40.00", newPrice: "$38.00" },
    { name: "Fancy Product", oldPrice: "$40.00", newPrice: "$38.00" },
    { name: "Fancy Product", oldPrice: "$40.00", newPrice: "$38.00" },
    { name: "Fancy Product", oldPrice: "$40.00", newPrice: "$38.00" },
    { name: "Fancy Product", oldPrice: "$40.00", newPrice: "$38.00" },
    { name: "Fancy Product", oldPrice: "$40.00", newPrice: "$38.00" },
    { name: "Fancy Product", oldPrice: "$40.00", newPrice: "$38.00" },
    { name: "Fancy Product", oldPrice: "$40.00", newPrice: "$38.00" },
  ];
  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Banner />
      <Products products={products} setCartCount={setCartCount} />
    </div>
  );
}

export default App;
