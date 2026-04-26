import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userId = localStorage.getItem('userId') || 1; 

      try {
        const response = await axios.get(`http://localhost:3000/profile/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Lỗi lấy profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <div className="loading">Đang tải thông tin cá nhân...</div>;
  if (!user) return <div className="error">Vui lòng đăng nhập để xem thông tin!</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img 
            src={user.avatar_url || '/default-avatar.png'} 
            alt="Avatar" 
            className="profile-avatar" 
          />
          <h2>{user.full_name}</h2>
          <p className="user-role">Khách hàng thành viên</p>
        </div>

        <div className="profile-body">
          <div className="info-group">
            <label><i className="fa-solid fa-envelope"></i> Email:</label>
            <span>{user.email}</span>
          </div>
          <div className="info-group">
            <label><i className="fa-solid fa-phone"></i> Số điện thoại:</label>
            <span>{user.phone || 'Chưa cập nhật'}</span>
          </div>
          <div className="info-group">
            <label><i className="fa-solid fa-location-dot"></i> Địa chỉ:</label>
            <span>{user.address || 'Chưa cập nhật'}</span>
          </div>
          <div className="info-group">
            <label><i className="fa-solid fa-calendar-days"></i> Ngày tham gia:</label>
            <span>{new Date(user.created_at).toLocaleDateString('vi-VN')}</span>
          </div>
        </div>

        <div className="profile-footer">
          <button className="btn-edit-profile">Chỉnh sửa thông tin</button>
          <button className="btn-logout" onClick={() => {
            localStorage.clear();
            window.location.href = '/login';
          }}>Đăng xuất</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;