import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryPage.css';

const CategoryPage = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const catMapping = {
        'laptop': 1,
        'dien-thoai': 2,
        'tai-nghe': 3,
        'the-nho': 4
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true); 
            try {
                const catId = catMapping[slug] || 1;
                const response = await axios.get(`http://localhost:3000/category/${catId}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchProducts();
    }, [slug]);

    const filterConfigs = {
        'dien-thoai': [
            { title: 'Hãng sản xuất', options: ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo', 'Realme', 'HONOR'] },
            { title: 'Mức giá', options: ['Dưới 5 triệu', '5 - 10 triệu', 'Trên 10 triệu'] },
            { title: 'RAM', options: ['4GB', '6GB', '8GB', '12GB'] },
            { title: 'Bộ nhớ trong', options: ['64GB', '128GB', '256GB', '512GB'] }
        ],
        'laptop': [
            { title: 'Hãng sản xuất', options: ['Acer', 'HP', 'MSI', 'Apple', 'Asus', 'Dell'] },
            { title: 'Mức giá', options: ['Dưới 15 triệu', '15 - 25 triệu', 'Trên 25 triệu'] },
            { title: 'CPU', options: ['Intel Core i5', 'Intel Core i7', 'Ryzen 5', 'Ryzen 7', 'Apple M1/M2'] },
            { title: 'RAM', options: ['8GB', '16GB', '32GB'] }
        ],
        'tai-nghe': [
            { title: 'Hãng sản xuất', options: ['Apple', 'Samsung', 'Sony', 'JBL'] },
            { title: 'Kiểu kết nối', options: ['Bluetooth', 'Có dây'] },
            { title: 'Tính năng', options: ['Chống ồn', 'Chống nước'] }
        ],
        'the-nho': [
            { title: 'Hãng sản xuất', options: ['Samsung', 'SanDisk', 'Kingston'] },
            { title: 'Dung lượng', options: ['32GB', '64GB', '128GB', '256GB'] },
            { title: 'Loại thẻ', options: ['microSD', 'SD'] }
        ]
    };

    const categoryTitles = {
        'dien-thoai': 'Điện thoại',
        'laptop': 'Laptop',
        'tai-nghe': 'Tai nghe',
        'the-nho': 'Thẻ nhớ'
    };

    const currentFilters = filterConfigs[slug] || [];

    return (
        <main className="page-container">
            <h1 className="page-title">{categoryTitles[slug] || 'Sản phẩm'}</h1>
            <div className="content-layout">
                
                {/* --- SIDEBAR BỘ LỌC --- */}
                <aside className="sidebar">
                    <div className="filter-card">
                        <h3 className="filter-main-title">
                            <i className="fa-solid fa-filter"></i> Bộ lọc
                        </h3>
                        
                        {currentFilters.map((group, idx) => (
                            <div key={idx} className="filter-group">
                                <h4 className="filter-header">
                                    {group.title}
                                </h4>
                                <div className={`options ${group.title === 'RAM' || group.title === 'Bộ nhớ trong' ? 'grid-3' : 'grid-2'}`}>
                                    {group.options.map(opt => (
                                        <label key={opt} className="filter-option">
                                            <input type="checkbox" name={group.title} value={opt} /> 
                                            <span>{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        
                        <button className="btn-apply">Áp dụng bộ lọc</button>
                    </div>
                </aside>

                {/* --- KHU VỰC HIỂN THỊ SẢN PHẨM --- */}
                <section className="product-area">
                    <div className="product-grid">
                        {loading ? (
                            <div className="loading-box">Đang tải sản phẩm...</div>
                        ) : products.length > 0 ? (
                            products.map((product) => (
                                <Link to={`/products/${product.product_id}`} key={product.product_id} className="product-item-link">
                                    <div className="product-card">
                                        <div className="product-image">
                                            <img src={product.image_url} alt={product.product_name} />
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">{product.product_name}</h3>
                                            <p className="product-price">
                                                {product.unit_price?.toLocaleString()}đ
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="no-products">Không có sản phẩm nào trong danh mục này.</div>
                        )}
                    </div>
                    
                </section>
            </div>
        </main>
    );
};

export default CategoryPage;