import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate(); 

    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'iPhone 15 Pro Max', price: 29990000, quantity: 1, image: 'https://via.placeholder.com/80', selected: true },
        { id: 2, name: 'Tai nghe Sony WH-1000XM5', price: 6500000, quantity: 2, image: 'https://via.placeholder.com/80', selected: false }
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const toggleSelect = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, selected: !item.selected } : item
        ));
    };

    const toggleSelectAll = (e) => {
        const isChecked = e.target.checked;
        setCartItems(cartItems.map(item => ({ ...item, selected: isChecked })));
    };

    const removeItem = (id) => {
        if(window.confirm("Xóa sản phẩm này khỏi giỏ hàng?")) {
            setCartItems(cartItems.filter(item => item.id !== id));
        }
    };

    const selectedCount = cartItems.filter(item => item.selected).length;
    const totalPrice = cartItems
        .filter(item => item.selected)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    // --- HÀM XỬ LÝ THANH TOÁN ---
    const handleCheckout = () => {
        const selectedItems = cartItems.filter(item => item.selected);
        
        // Chuyển sang trang checkout và mang theo dữ liệu tiền + danh sách món hàng
        navigate('/payment', { 
            state: { 
                total: totalPrice, 
                items: selectedItems 
            } 
        });
    };

    return (
        <main className="cart-container">
            <h1 className="page-title">Giỏ hàng của bạn</h1>
            
            <div className="cart-layout">
                <div className="cart-items-section">
                    {cartItems.length > 0 ? (
                        <>
                            <div className="select-all-bar">
                                <input 
                                    type="checkbox" 
                                    id="select-all" 
                                    onChange={toggleSelectAll}
                                    checked={selectedCount === cartItems.length && cartItems.length > 0}
                                />
                                <label htmlFor="select-all">Chọn tất cả ({cartItems.length} sản phẩm)</label>
                            </div>

                            {cartItems.map(item => (
                                <div key={item.id} className={`cart-item-card ${item.selected ? 'selected' : ''}`}>
                                    <div className="checkbox-wrapper">
                                        <input 
                                            type="checkbox" 
                                            checked={item.selected} 
                                            onChange={() => toggleSelect(item.id)}
                                            className="product-checkbox"
                                        />
                                    </div>
                                    <img src={item.image} alt={item.name} className="item-img" />
                                    <div className="item-info">
                                        <h3>{item.name}</h3>
                                        <p className="item-price">{item.price.toLocaleString()}đ</p>
                                    </div>
                                    <div className="item-quantity">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                    <button className="btn-remove" onClick={() => removeItem(item.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="empty-cart">
                            <p>Giỏ hàng trống rỗng!</p>
                            <Link to="/">Tiếp tục mua sắm</Link>
                        </div>
                    )}
                </div>

                <aside className="cart-summary">
                    <div className="summary-card">
                        <h3>Tóm tắt đơn hàng</h3>
                        <div className="summary-row">
                            <span>Tạm tính ({selectedCount} món):</span>
                            <span>{totalPrice.toLocaleString()}đ</span>
                        </div>
                        <div className="summary-row">
                            <span>Phí vận chuyển:</span>
                            <span>Miễn phí</span>
                        </div>
                        <hr />
                        <div className="summary-row total">
                            <span>Tổng cộng:</span>
                            <span className="final-price">{totalPrice.toLocaleString()}đ</span>
                        </div>
                        
                        {/* Nút thanh toán đã được gắn hàm handleCheckout */}
                        <button 
                            className="btn-checkout" 
                            disabled={selectedCount === 0}
                            onClick={handleCheckout}
                        >
                            {selectedCount > 0 ? `Thanh toán (${selectedCount})` : 'Vui lòng chọn sản phẩm'}
                        </button>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default Cart;