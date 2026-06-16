# 📱 E-Tech - Hệ Thống Quản Lý Và Bán Thiết Bị Điện Tử Thông Minh

E-Tech là một ứng dụng web thương mại điện tử chuyên biệt theo mô hình **B2C (Business-to-Consumer)**, cho phép người dùng tìm kiếm, xem chi tiết và đặt mua các thiết bị điện tử (điện thoại, laptop, phụ kiện). Hệ thống tích hợp phân hệ **Admin Panel** tinh gọn giúp quản lý sản phẩm, đơn hàng và đồng bộ thông báo thời gian thực.

---

## 🚀 Tính Năng Cốt Lõi

### 👤 Phân Hệ Khách Hàng (Customer Site)
* **Tối ưu hóa Trang chủ:** Mặc định hiển thị 20 sản phẩm đầu tiên kết hợp nút "Xem thêm" (Show More) giúp giảm tải dung lượng DOM và tăng tốc độ load trang.
* **Thông số kỹ thuật động:** Tự động bóc tách và render bảng thông số (RAM, CPU, Pin...) một cách trực quan từ cấu trúc dữ liệu chuỗi `specs_json`.
* **Gợi ý phụ kiện thông minh:** Tự động hiển thị giao diện các sản phẩm phụ kiện tương thích đi kèm ngay tại trang chi tiết (Rule-based Suggestion).
* **Quản lý giỏ hàng:** Thêm sản phẩm vào giỏ hàng cá nhân (Xác thực trạng thái đăng nhập được đồng bộ qua `localStorage`).
* **Trung tâm thông báo cá nhân:** Trang hiển thị lịch sử thông báo (Xác nhận đơn hàng, hàng mới về, lịch bảo trì hệ thống).

### 👑 Phân Hệ Quản Trị (Admin Site)
* **Xác thực và Phân quyền:** Hệ thống đăng nhập riêng biệt cho Admin, kiểm tra nghiêm ngặt quyền truy cập ở mức Frontend (`role: "admin"`) để bảo mật URL.
* **Dashboard Tổng quan:** Hiển thị các số liệu thống kê cơ bản của hệ thống.
* **Quản lý sản phẩm:** Bộ công cụ CRUD (Thêm, Sửa, Xóa) sản phẩm, hỗ trợ cấu trúc dữ liệu thuộc tính linh hoạt.
* **Quản lý đơn hàng:** Tiếp nhận, cập nhật luồng trạng thái đơn hàng và tự động đồng bộ sang trang thông báo của người dùng.

---

## 🛠 Công Nghệ Sử Dụng

* **Frontend:** ReactJS, React Router DOM, Axios, Custom CSS (Tông màu chủ đạo Hồng Cam `#ff7675`).
* **Backend:** Node.js, Express Framework (Cấu hình chạy chế độ ES Modules hiện đại `"type": "module"`).
* **Database:**SQL server.
