import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    // Khởi tạo state cho thông tin người dùng
    const [userInfo, setUserInfo] = useState({
        fullName: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        phone: '0901234567',
        address: 'Số 1, Đường ABC, TP. HCM'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <main className="profile-container">
            <div className="profile-card">
                <h2 className="card-title">Hồ Sơ Của Tôi</h2>
                <hr className="title-line" />
                
                <div className="profile-content">
                    {/* Phần Form bên trái */}
                    <form className="profile-form">
                        <div className="form-group">
                            <label>Họ và tên</label>
                            <input 
                                type="text" 
                                name="fullName"
                                value={userInfo.fullName} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={userInfo.email} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input 
                                type="text" 
                                name="phone"
                                value={userInfo.phone} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <input 
                                type="text" 
                                name="address"
                                value={userInfo.address} 
                                onChange={handleChange}
                            />
                        </div>
                    </form>

                    {/* Phần Avatar bên phải */}
                    <div className="profile-avatar">
                        <i className="fa-solid fa-circle-user"></i>
                    </div>
                </div>

                {/* Các nút hành động */}
                <div className="profile-actions">
                    <button className="btn-save">Lưu thay đổi</button>
                    <button className="btn-logout">Đăng xuất</button>
                </div>
            </div>
        </main>
    );
};

export default Profile;