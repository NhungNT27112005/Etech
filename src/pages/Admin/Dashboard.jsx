import React from 'react';
import productsData from '../../data/products.json';
import './Admin.css';

const Dashboard = () => {
  // Tính toán số lượng thực tế từ dữ liệu
  const totalProducts = productsData.length;
  const categoriesCount = [...new Set(productsData.map(p => p.category))].length;

  // Dữ liệu giả lập cho các mục khác
  const stats = [
    { id: 1, title: 'Tổng sản phẩm', value: totalProducts, icon: 'fa-box', color: '#3498db' },
    { id: 2, title: 'Đơn hàng mới', value: '25', icon: 'fa-cart-shopping', color: '#2ecc71' },
    { id: 3, title: 'Doanh thu tháng', value: '150.5M', icon: 'fa-money-bill-trend-up', color: '#f1c40f' },
    { id: 4, title: 'Khách hàng', value: '1,205', icon: 'fa-users', color: '#e74c3c' },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Tổng quan hệ thống</h2>
      
      {/* 4 Thẻ thống kê nhanh */}
      <div className="stats-grid">
        {stats.map(item => (
          <div key={item.id} className="stat-card" style={{ borderLeft: `5px solid ${item.color}` }}>
            <div className="stat-info">
              <p className="stat-label">{item.title}</p>
              <h3 className="stat-value">{item.value}</h3>
            </div>
            <div className="stat-icon" style={{ color: item.color }}>
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-bottom-grid">
        {/* Bảng hoạt động gần đây */}
        <div className="admin-card recent-activity">
          <h3>Sản phẩm mới cập nhật</h3>
          <ul className="activity-list">
            {productsData.slice(0, 5).map(p => (
              <li key={p.id}>
                <img src={p.image} alt="" />
                <div className="activity-detail">
                  <p className="activity-name">{p.name}</p>
                  <p className="activity-time">{p.category} - {p.price.toLocaleString()}đ</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Biểu đồ giả lập hoặc Phân tích danh mục */}
        <div className="admin-card category-stats">
          <h3>Phân bổ danh mục</h3>
          <div className="category-list">
             <p>Số lượng danh mục: <strong>{categoriesCount}</strong></p>
             <div className="progress-bar-group">
                <p>Điện thoại ({productsData.filter(p => p.category === 'dien-thoai').length})</p>
                <div className="progress-bg"><div className="progress-fill" style={{width: '60%'}}></div></div>
                
                <p>Laptop ({productsData.filter(p => p.category === 'laptop').length})</p>
                <div className="progress-bg"><div className="progress-fill" style={{width: '40%'}}></div></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;