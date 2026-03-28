import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'; 

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegister = (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            alert("Mật khẩu nhập lại không khớp!");
            return;
        }
        // Giả lập đăng ký thành công
        alert("Đăng ký thành công! Hãy đăng nhập.");
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <Link to="/" className="back-to-home">
                <i className="fa-solid fa-arrow-left"></i> Về trang chủ
            </Link>

            <form className="auth-form" onSubmit={handleRegister}>
                <div className="auth-header">
                    <h1 className="auth-logo">E-Tech</h1>
                    <h2>Tạo tài khoản mới</h2>
                    <p>Cùng trải nghiệm mua sắm công nghệ đỉnh cao</p>
                </div>

                <div className="input-group">
                    <label>Họ và tên</label>
                    <input type="text" placeholder="Nhập tên của bạn..." required />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Ví dụ: customer@gmail.com" required />
                </div>

                <div className="input-group">
                    <label>Mật khẩu</label>
                    <input type="password" placeholder="Tối thiểu 6 ký tự" required />
                </div>

                <div className="input-group">
                    <label>Xác nhận mật khẩu</label>
                    <input type="password" placeholder="Nhập lại mật khẩu" required />
                </div>

                <button type="submit" className="btn-auth">Đăng ký ngay</button>
                
                <p className="auth-switch">
                    Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;