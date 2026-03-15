import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="product-card">
    <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
      <img src={product.image} alt={product.name} className="product-card-img" />
    </div>
    <div className="product-card-body">
      <p className="product-card-manufacturer">{product.manufacturerName}</p>
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-desc">{product.description}</p>
      <p className="product-card-price">₹{product.price.toLocaleString("en-IN")}</p>
    </div>
  </Link>
);

export default ProductCard;
