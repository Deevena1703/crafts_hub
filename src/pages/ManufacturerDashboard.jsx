import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { products } from "../lib/mock-data.js";
import { motion } from "framer-motion";
import { Plus, Package, Mic, Video, Edit } from "lucide-react";
import { useState } from "react";

const ManufacturerDashboard = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const myProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="dashboard-header-row">
            <div>
              <h1 className="dashboard-title">Manufacturer Dashboard 🏭</h1>
              <p className="dashboard-subtitle">Manage your products and craft stories</p>
            </div>
            <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
              <Plus style={{ height: '1rem', width: '1rem' }} /> Add Product
            </button>
          </div>
        </motion.div>

        <div className="stats-grid">
          {[
            { icon: Package, label: "Products", value: String(myProducts.length) },
            { icon: Video, label: "Videos", value: "2" },
            { icon: Edit, label: "Pending", value: "0" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <stat.icon className="stat-icon" />
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {showAddForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="add-form">
            <h2 className="add-form-title">Add New Product</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddForm(false); }}>
              <div className="add-form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="productName">Product Name</label>
                  <input className="form-input" id="productName" placeholder="e.g. Hand-woven Silk Scarf" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="price">Price (₹)</label>
                  <input className="form-input" id="price" type="number" placeholder="500" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="description">Description</label>
                <textarea className="form-textarea" id="description" placeholder="Describe your product..." rows={3} />
              </div>
              <div className="form-group">
                <label className="form-label">Or describe using voice</label>
                <button type="button" className="btn btn-outline btn-full" style={{ marginTop: '0.25rem' }}>
                  <Mic style={{ height: '1rem', width: '1rem', color: 'hsl(var(--primary))' }} /> Record Voice Description
                </button>
              </div>
              <div className="add-form-grid">
                <div className="form-group">
                  <label className="form-label">Product Photos</label>
                  <div className="upload-area">
                    <p className="upload-text">Click or drag to upload photos</p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Craft-Making Video</label>
                  <div className="upload-area">
                    <Video className="upload-icon" />
                    <p className="upload-text">Upload manufacturing video</p>
                  </div>
                </div>
              </div>
              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">Save Product</button>
                <button type="button" className="btn btn-outline" onClick={() => setShowAddForm(false)}>Cancel</button>
              </div>
            </form>
          </motion.div>
        )}

        <h2 className="section-title mt-10">Your Products</h2>
        <div className="mt-4">
          {myProducts.map((p) => (
            <div key={p.id} className="product-list-item">
              <img src={p.image} alt={p.name} className="product-list-img" />
              <div className="product-list-info">
                <h3 className="product-list-name">{p.name}</h3>
                <p className="product-list-meta">{p.category} · ₹{p.price.toLocaleString("en-IN")}</p>
              </div>
              <button className="btn btn-outline btn-sm">
                <Edit style={{ height: '0.75rem', width: '0.75rem' }} /> Edit
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManufacturerDashboard;
