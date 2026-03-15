import { useParams, useNavigate } from "react-router-dom";
import { manufacturers, products } from "../lib/mock-data.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { ArrowLeft, MapPin, Play } from "lucide-react";
import { motion } from "framer-motion";

const ManufacturerProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const manufacturer = manufacturers.find((m) => m.id === id);

  if (!manufacturer) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-10 text-center">
          <h1 className="section-title">Artisan Not Found</h1>
          <button className="btn btn-outline mt-4" onClick={() => navigate("/products")}>
            <ArrowLeft style={{ height: '1rem', width: '1rem' }} /> Back
          </button>
        </div>
      </div>
    );
  }

  const manufacturerProducts = products.filter((p) => p.manufacturerId === manufacturer.id);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10">
        <button className="btn btn-ghost btn-sm mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft style={{ height: '1rem', width: '1rem' }} /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="profile-header">
          <div className="profile-info">
            <img src={manufacturer.avatar} alt={manufacturer.name} className="profile-avatar" />
            <div style={{ flex: 1 }}>
              <h1 className="profile-name">{manufacturer.groupName}</h1>
              <div className="profile-location">
                <MapPin className="profile-location-icon" /> {manufacturer.location}
              </div>
              <p className="profile-bio">{manufacturer.bio}</p>
            </div>
          </div>

          <div className="profile-video">
            <Play className="profile-video-icon" />
            <p className="profile-video-title">Our Craft Journey</p>
            <p className="profile-video-desc">Watch how we create our handmade products using traditional techniques</p>
          </div>
        </motion.div>

        <div className="profile-products">
          <h2 className="profile-products-title">Products by {manufacturer.name}</h2>
          <div className="products-grid">
            {manufacturerProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManufacturerProfilePage;
