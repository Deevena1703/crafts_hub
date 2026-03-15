import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { products, categories } from "../lib/mock-data.js";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Clock } from "lucide-react";

const BuyerDashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="dashboard-title">Welcome, Buyer! 👋</h1>
          <p className="dashboard-subtitle">Explore authentic handmade products</p>
        </motion.div>

        <div className="stats-grid">
          {[
            { icon: ShoppingBag, label: "Orders", value: "0" },
            { icon: Heart, label: "Wishlist", value: "0" },
            { icon: Clock, label: "Recently Viewed", value: String(products.length) },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <stat.icon className="stat-icon" />
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title mt-10">Browse Categories</h2>
        <div className="categories-grid mt-4">
          {categories.map((c) => (
            <CategoryCard key={c.id} {...c} />
          ))}
        </div>

        <h2 className="section-title mt-10">All Products</h2>
        <div className="products-grid mt-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerDashboard;
