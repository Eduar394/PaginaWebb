import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ConfirmAccount from './pages/ConfirmAccount';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { AuthProvider } from './context/AuthContext';
import AdminRoute from './pages/admin/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProductList from './pages/admin/ProductList';
import ProductForm from './pages/admin/ProductForm';

<><Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} /><Route path="/admin/products" element={<AdminRoute><ProductList /></AdminRoute>} /><Route path="/admin/products/create" element={<AdminRoute><ProductForm /></AdminRoute>} /><Route path="/admin/products/edit/:id" element={<AdminRoute><ProductForm /></AdminRoute>} /></>

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm/:token" element={<ConfirmAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
import PayUPayment from './pages/PayUPayment';

<Route path="/pagar/payu" element={<PayUPayment />} />



