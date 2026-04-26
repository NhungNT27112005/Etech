import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="home-container">
      {/* 1. Hero Section - Banner quảng cáo */}
      <section className="hero-section">
        <div className="hero-text">
          <h2>Thế giới thiết bị điện tử thông minh<br /> E-Tech</h2>
          <button className="btn-buy">Mua ngay</button>
        </div>
        <div className="hero-image">
          <img src="/banner.png" alt="Banner E-Tech" className="banner-img" />
        </div>
      </section>
    
    {/* 1.2. Sản phẩm gợi ý*/}
      {/* 3. Product Section - Sản phẩm gợi ý */}
      <section className="product-section">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <div className="product-grid">
            {products.map((product) => ( 
                <Link to={`/products/${product.product_id}`} key={product.product_id} className="product-card-link">
                <div className="product-card">
                  <img src={product.image_url} alt={product.product_name} />
                  <h3>{product.product_name}</h3>
                  <span>{product.unit_price?.toLocaleString()}đ</span>
                </div>
              </Link>
            ))}
        </div>
      </section>

 {/* 2. Promo Section - Khuyến mãi đặc biệt */}
<section className="promo-section">
  <div className="promo-card">
    {/* Tiêu đề có icon phía trước */}
    <div className="promo-header">
      <i className="fa-solid fa-percent promo-icon"></i>
      <span className="promo-text">Khuyến mãi đặc biệt</span>
    </div>

    {/* Danh sách các mức giảm giá */}
    <div className="promo-content">
      <div className="promo-item">
        <span className="promo-label">Giảm đến</span>
        <span className="promo-value">50%</span>
      </div>
      
      <div className="promo-divider"></div> {/* Đường kẻ dọc */}
      
      <div className="promo-item">
        <span className="promo-value">25%</span>
      </div>
      
      <div className="promo-divider"></div>
      
      <div className="promo-item">
        <span className="promo-value">20%</span>
      </div>
    </div>
  </div>
</section>

      {/* 3. Product Section - Sản phẩm gợi ý */}
      <section className="product-section">
        <h2 className="section-title">Gợi ý cho bạn</h2>
        <div className="product-grid">
          {/* Chúng ta tạo 8 khung sản phẩm mẫu */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="product-card">
              {/* Nội dung card sản phẩm sẽ được chi tiết hóa sau */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;