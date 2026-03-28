
import React from 'react';

const AdminUsers = () => {
    const users = [
        { id: 1, name: 'Admin E-Tech', email: 'admin@etech.com', role: 'Admin' },
        { id: 2, name: 'Khách hàng 01', email: 'customer1@gmail.com', role: 'User' },
    ];

    return (
        <div className="admin-card">
            <h2>Danh sách người dùng</h2>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Vai trò</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td><strong>{u.role}</strong></td>
                            <td>
                                <button className="btn-edit-user">Sửa</button>
                                <button className="btn-delete-user">Khóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUsers;