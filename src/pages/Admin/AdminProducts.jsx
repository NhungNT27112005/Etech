import React, { useState } from 'react';
import productsData from '../../data/products.json';
import './Admin.css';

const AdminProducts = () => {
    const [products, setProducts] = useState(productsData);
    const [showModal, setShowModal] = useState(false);
    
    // State để phân biệt đang Sửa hay Thêm
    const [isEditMode, setIsEditMode] = useState(false);
    
    // State chứa dữ liệu của sản phẩm đang thao tác trong Modal
    const [currentProduct, setCurrentProduct] = useState({
        name: '',
        category: 'dien-thoai',
        price: '',
        image: '',
        description: ''
    });

    // 1. Mở Modal để THÊM MỚI
    const handleAddClick = () => {
        setIsEditMode(false);
        setCurrentProduct({ name: '', category: 'dien-thoai', price: '', image: '', description: '' });
        setShowModal(true);
    };

    // 2. Mở Modal để CHỈNH SỬA (Đổ dữ liệu cũ vào)
    const handleEditClick = (product) => {
        setIsEditMode(true);
        setCurrentProduct(product); // Lấy toàn bộ thông tin sản phẩm này đưa vào Form
        setShowModal(true);
    };

    // 3. Xử lý khi nhấn nút LƯU (Cả Thêm và Sửa)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isEditMode) {
            // Logic Cập nhật sản phẩm cũ
            const updatedList = products.map(p => 
                p.id === currentProduct.id ? { ...currentProduct, price: parseInt(currentProduct.price) } : p
            );
            setProducts(updatedList);
            alert("Đã cập nhật sản phẩm thành công!");
        } else {
            // Logic Thêm sản phẩm mới
            const newEntry = { ...currentProduct, id: Date.now(), price: parseInt(currentProduct.price), specs: {} };
            setProducts([newEntry, ...products]);
            alert("Đã thêm sản phẩm mới!");
        }
        
        setShowModal(false);
    };

    // 4. Xóa sản phẩm
    const handleDelete = (id) => {
        if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className="admin-card">
            <div className="admin-card-header">
                <h2>Quản lý sản phẩm ({products.length})</h2>
                <button className="btn-add" onClick={handleAddClick}>+ Thêm sản phẩm</button>
            </div>

            <table className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Danh mục</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td>#{p.id}</td>
                            <td><img src={p.image} alt="" className="admin-product-img" /></td>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.price?.toLocaleString()}đ</td>
                            <td>
                                {/* Nút Chỉnh sửa */}
                                <button className="btn-edit" onClick={() => handleEditClick(p)}>
                                    <i className="fa-solid fa-pen"></i>
                                </button>
                                <button className="btn-delete" onClick={() => handleDelete(p.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* --- MODAL (Trang nhỏ hiện lên ở trên) --- */}
            {showModal && (
                <div className="admin-modal-overlay">
                    <div className="admin-modal">
                        <div className="modal-header">
                            <h3>{isEditMode ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}</h3>
                            <button className="close-x" onClick={() => setShowModal(false)}>&times;</button>
                        </div>
                        
                        <form className="admin-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input 
                                    type="text" 
                                    value={currentProduct.name}
                                    onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label>Danh mục</label>
                                <select 
                                    value={currentProduct.category}
                                    onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value})}
                                >
                                    <option value="dien-thoai">Điện thoại</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="tai-nghe">Tai nghe</option>
                                    <option value="the-nho">Thẻ nhớ</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Giá tiền</label>
                                <input 
                                    type="number" 
                                    value={currentProduct.price}
                                    onChange={(e) => setCurrentProduct({...currentProduct, price: e.target.value})}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label>URL Hình ảnh</label>
                                <input 
                                    type="text" 
                                    value={currentProduct.image}
                                    onChange={(e) => setCurrentProduct({...currentProduct, image: e.target.value})}
                                    required 
                                />
                            </div>

                            <div className="modal-actions">
                                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Hủy</button>
                                <button type="submit" className="btn-save">
                                    {isEditMode ? "Cập nhật" : "Thêm sản phẩm"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;