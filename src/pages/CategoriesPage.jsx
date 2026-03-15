import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { categories } from "../lib/mock-data.js";

const CategoriesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container py-10">
      <h1 className="section-title">Categories</h1>
      <p className="section-subtitle">Explore crafts by type</p>
      <div className="categories-grid mt-8">
        {categories.map((c) => (
          <CategoryCard key={c.id} {...c} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default CategoriesPage;
