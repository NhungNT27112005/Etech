import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CategoryPage.css';
import productsData from '../../data/products.json';

const CategoryPage = () => {
    const { slug } = useParams();
    
    // Lọc sản phẩm theo danh mục (dien-thoai, laptop...)
    const currentProducts = productsData.filter(p => p.category === slug);

    const filterConfigs = {
        'dien-thoai': [
            { title: 'Hãng sản xuất', options: ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo', 'Realme', 'HONOR'] },
            { title: 'Mức giá', options: ['Giá thấp-cao', 'Giá cao-thấp'] },
            { title: 'RAM', options: ['4GB', '6GB', '64GB', '8GB', '12GB', '16GB', '32GB'] },
            { title: 'Bộ nhớ trong', options: ['64GB', '32GB', '256GB', '128GB', '512GB', '1TB'] }
        ],
        'laptop': [
            { title: 'Hãng sản xuất', options: ['Acer', 'HP', 'MSI', 'Apple', 'Asus', 'Samsung', 'Dell'] },
            { title: 'Mức giá', options: ['Giá thấp-cao', 'Giá cao-thấp'] },
            { title: 'RAM', options: ['4GB', '6GB', '8GB', '12GB', '16GB', '32GB'] }
        ],
        'tai-nghe': [
            { title: 'Hãng sản xuất', options: ['Apple', 'Samsung', 'OPPO', 'Xiaomi', 'Soundcore', 'Ugreen', 'Soundpeats'] },
            { title: 'Mức giá', options: ['Giá thấp-cao', 'Giá cao-thấp'] },
            { title: 'Kiểu kết nối', options: ['Bluetooth', 'Có dây'] },
            { title: 'Kiểu tai nghe', options: ['In-ear', 'On-ear', 'Over-ear'] },
            { title: 'Tính năng', options: ['Chống ồn', 'Chống nước'] }
        ],
        'the-nho': [
            { title: 'Hãng sản xuất', options: ['Sandisk', 'KIOXIA'] },
            { title: 'Mức giá', options: ['Giá thấp-cao', 'Giá cao-thấp'] },
            { title: 'RAM', options: ['4GB', '6GB', '64GB', '8GB', '12GB', '16GB', '32GB'] },
            { title: 'Bộ nhớ trong', options: ['64GB', '32GB', '256GB', '128GB'] }
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
                <aside className="sidebar">
                    <div className="filter-card">
                        <h3 className="filter-main-title">
                            <i className="fa-solid fa-filter"></i> Bộ lọc
                        </h3>
                        {currentFilters.map((group, idx) => (
                            <div key={idx} className="filter-group">
                                <button className="filter-header">
                                    {group.title} <i className="fa-solid fa-chevron-down"></i>
                                </button>
                                <div className={`options ${group.title === 'RAM' || group.title === 'Bộ nhớ trong' ? 'grid-3' : 'grid-2'}`}>
                                    {group.options.map(opt => (
                                        <label key={opt}>
                                            <input type="checkbox" /> {opt}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button className="btn-apply">Áp dụng bộ lọc</button>
                    </div>
                </aside>

                <section className="product-area">
                    <div className="product-grid">
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product) => (
                                <Link to={`/product/${product.id}`} key={product.id} className="product-item-link">
                                    <div className="product-card">
                                        <div className="product-image">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">{product.name}</h3>
                                            <p className="product-price">
                                                {product.price.toLocaleString()}đ
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