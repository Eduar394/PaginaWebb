import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Panel de Administración</h2>
      <ul>
        <li><Link to="/admin/products">Gestionar Productos</Link></li>
        <li><Link to="/admin/products/create">Crear Producto</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
