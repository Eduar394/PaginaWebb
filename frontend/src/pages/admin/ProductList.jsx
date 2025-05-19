import { useEffect, useState } from 'react';
import API from '../../services/api';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products').then(res => setProducts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/products/${id}`);
    setProducts(products.filter(p => p._id !== id));
  };

  return (
    <div>
      <h3>Productos</h3>
      <ul>
        {products.map(prod => (
          <li key={prod._id}>
            {prod.name} - {prod.price}
            <Link to={`/admin/products/edit/${prod._id}`}>✏️</Link>
            <button onClick={() => handleDelete(prod._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
