import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ManufacturerProfilePage from "./pages/ManufacturerProfilePage.jsx";
import BuyerDashboard from "./pages/BuyerDashboard.jsx";
import ManufacturerDashboard from "./pages/ManufacturerDashboard.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/manufacturer/:id" element={<ManufacturerProfilePage />} />
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route path="/manufacturer/dashboard" element={<ManufacturerDashboard />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
