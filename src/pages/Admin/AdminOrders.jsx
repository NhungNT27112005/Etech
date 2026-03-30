// src/pages/Admin/AdminOrders.jsx
import React from 'react';

const AdminOrders = () => {
    // Dữ liệu giả
    const orders = [
        { id: 'ORD001', customer: 'Nguyễn Văn A', date: '2026-03-25', total: 15500000, status: 'Chờ xử lý' },
        { id: 'ORD002', customer: 'Trần Thị B', date: '2026-03-26', total: 32990000, status: 'Đang giao' },
        { id: 'ORD003', customer: 'Lê Văn C', date: '2026-03-27', total: 750000, status: 'Đã hoàn thành' },
    ];

    return (
        <div className="admin-card">
            <h2>Quản lý đơn hàng</h2>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Mã Đơn</th>
                        <th>Khách hàng</th>
                        <th>Ngày đặt</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.total.toLocaleString()}đ</td>
                            <td>
                                <span className={`status-badge ${order.status === 'Đã hoàn thành' ? 'success' : 'pending'}`}>
                                    {order.status}
                                </span>
                            </td>
                            <td><button className="btn-detail">Xem chi tiết</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrders;