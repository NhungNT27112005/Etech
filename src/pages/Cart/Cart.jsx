import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    // Dữ liệu mẫu trong giỏ hàng
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'iPhone 15 Pro Max', price: 29990000, quantity: 1, image: 'https://via.placeholder.com/80' },
        { id: 2, name: 'Tai nghe Sony WH-1000XM5', price: 6500000, quantity: 2, image: 'https://via.placeholder.com/80' }
    ]);

    // Hàm thay đổi số lượng
    const updateQuantity = (id, delta) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    // Hàm xóa sản phẩm
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <main className="cart-container">
            <h1 className="page-title">Giỏ hàng của bạn</h1>
            
            <div className="cart-layout">
                {/* Cột trái: Danh sách sản phẩm */}
                <div className="cart-items-section">
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item-card">
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
                        ))
                    ) : (
                        <div className="empty-cart">
                            <p>Giỏ hàng trống rỗng!</p>
                            <Link to="/">Tiếp tục mua sắm</Link>
                        </div>
                    )}
                </div>

                {/* Cột phải: Thanh toán */}
                <aside className="cart-summary">
                    <div className="summary-card">
                        <h3>Tóm tắt đơn hàng</h3>
                        <div className="summary-row">
                            <span>Tạm tính:</span>
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
                        <button className="btn-checkout">Tiến hành thanh toán</button>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default Cart;