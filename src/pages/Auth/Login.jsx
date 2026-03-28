import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Logic giả lập: Admin nếu là email admin, còn lại là khách
        let userRole = 'customer';
        if (email === 'admin@etech.com') {
            userRole = 'admin';
        }

        const userData = { email, role: userRole };
        localStorage.setItem('user', JSON.stringify(userData));

        // Thông báo đăng nhập thành công (tùy chọn)
        alert(`Đăng nhập thành công với quyền ${userRole.toUpperCase()}!`);

        if (userRole === 'admin') {
            navigate('/admin');
        } else {
            navigate('/');
        }
        window.location.reload(); 
    };

    return (
        <div className="auth-container">
            {/* Nút quay về trang chủ nhanh */}
            <Link to="/" className="back-to-home">
                <i className="fa-solid fa-arrow-left"></i> Về trang chủ
            </Link>

            <form className="auth-form" onSubmit={handleLogin}>
                <div className="auth-header">
                    <h1 className="auth-logo">E-Tech</h1>
                    <h2>Thế giới điện tử thông minh</h2>
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="Nhập email của bạn..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>

                <div className="input-group">
                    <label>Mật khẩu</label>
                    <input 
                        type="password" 
                        placeholder="Nhập mật khẩu..." 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>

                <div className="auth-options">
                    <label><input type="checkbox" /> Ghi nhớ tôi</label>
                        <>  </>
                   
                </div>

                <button type="submit" className="btn-auth">Đăng nhập</button>
                 <Link to="/forgot-password">Quên mật khẩu?</Link>
                <p className="auth-switch">
                    Bạn mới biết đến E-Tech? <Link to="/register">Đăng ký ngay</Link>
                </p>
                
                
            </form>
        </div>
    );
};

export default Login;