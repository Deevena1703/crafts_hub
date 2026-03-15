import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { products, categories } from "../lib/mock-data.js";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryFilter || "all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10">
        <h1 className="section-title">All Products</h1>
        <p className="section-subtitle">Authentic handmade crafts from rural India</p>

        <div className="filter-pills">
          <button onClick={() => setActiveCategory("all")} className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}>All</button>
          {categories.map((c) => (
            <button key={c.id} onClick={() => setActiveCategory(c.id)} className={`filter-pill ${activeCategory === c.id ? "active" : ""}`}>
              {c.icon} {c.name}
            </button>
          ))}
        </div>

        <div className="products-grid mt-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="no-results">No products found in this category.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
