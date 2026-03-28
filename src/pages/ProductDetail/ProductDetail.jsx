import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
// 1. Import dữ liệu từ file JSON của bạn
import productsData from '../../data/products.json';

const ProductDetail = () => {
    // 2. Lấy ID từ thanh địa chỉ URL (ví dụ: /product/41 thì id = "41")
    const { id } = useParams();

    // 3. Tìm sản phẩm trong bộ 140 máy có ID khớp với ID trên URL
    
    const product = productsData.find(p => p.id === parseInt(id));

    // 4. Nếu không tìm thấy sản phẩm (gõ sai ID trên URL)
    if (!product) {
        return <div className="error-page">Sản phẩm không tồn tại!</div>;
    }

    return (
        <main className="product-detail-container">
            <div className="detail-wrapper">
                {/* Bên trái: Ảnh sản phẩm */}
                <div className="detail-left">
                    <div className="main-image-card">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>

                {/* Bên phải: Thông tin giá và cấu hình */}
                <div className="detail-right">
                    <h1 className="detail-name">{product.name}</h1>
                    
                    <div className="detail-price-box">
                        <span className="detail-curr-price">
                            {product.price.toLocaleString()}đ
                        </span>
                        {product.oldPrice > 0 && (
                            <span className="detail-old-price">
                                {product.oldPrice.toLocaleString()}đ
                            </span>
                        )}
                    </div>

                    <div className="detail-desc">
                        <h3>Mô tả sản phẩm:</h3>
                        <p>{product.description || "Đang cập nhật nội dung cho sản phẩm này..."}</p>
                    </div>

                    <button className="btn-add-to-cart">
                        <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                    </button>

                    {/* 5. Hiển thị thông số kỹ thuật (Specs) động */}
                    <div className="specs-section">
                        <h3>Thông số kỹ thuật:</h3>
                        <table className="specs-table">
                            <tbody>
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <tr key={key}>
                                        <td className="spec-label">{key}</td>
                                        <td className="spec-value">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;