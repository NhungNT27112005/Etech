import React from 'react';
import './NotificationDropdown.css'; 

const NotificationDropdown = () => {
  const notifications = [
    { id: 1, text: "Giảm 20% cho Tai nghe Sony", type: "gift" }
  ];

  return (
    <div className="notification-dropdown">
      <h3 className="notif-title">Thông báo mới nhận</h3>
      <div className="notif-list">
        {notifications.map((n) => (
          <div key={n.id} className="notif-item">
            <div className="notif-banner">
              <i className="fa-solid fa-gift gift-icon"></i>
              <span>{n.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;