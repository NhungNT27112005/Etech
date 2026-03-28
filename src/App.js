import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Import Components
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Pages
import Home from './pages/Home/Home';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Profile from './pages/Profile/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Trang Admin 
import AdminLayout from './pages/Admin/AdminLayout';
import AdminProducts from './pages/Admin/AdminProducts';
import Dashboard from './pages/Admin/Dashboard';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminUsers from './pages/Admin/AdminUsers';

const AppContent = () => {
  const location = useLocation();
  
  // Kiểm tra: Nếu đường dẫn bắt đầu bằng "/admin" thì là trang quản trị
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {/* CHỈ hiện Header khách nếu KHÔNG phải trang Admin */}
      {!isAdminPage && <Header />}

      <Routes>
        {/* --- ROUTES KHÁCH HÀNG --- */}
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* --- ROUTES ADMIN (Giao diện riêng hoàn toàn) --- */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> 
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} /> 
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>

      {/* CHỈ hiện Footer khách nếu KHÔNG phải trang Admin */}
      {!isAdminPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;