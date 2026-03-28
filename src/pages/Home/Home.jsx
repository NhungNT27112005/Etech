import React from 'react';
import './Home.css';

const Home = () => {
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
          {/* Chúng ta tạo 8 khung sản phẩm mẫu */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="product-card">
              {/* Nội dung card sản phẩm sẽ được chi tiết hóa sau */}
            </div>
          ))}
        </div>
        
        <div className="suggestion-section">
          <button className="view-more-btn">
            Xem thêm <i className="fa-solid fa-chevron-down"></i>
          </button>
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
        
        <div className="suggestion-section">
          <button className="view-more-btn">
            Xem thêm <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;