import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../../services/api';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', price: '', stock: '' });

  useEffect(() => {
    if (id) {
      API.get(`/products/${id}`).then(res => setProduct(res.data));
    }
  }, [id]);

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (id) {
      await API.put(`/products/${id}`, product);
    } else {
      await API.post('/products', product);
    }
    navigate('/admin/products');
  };

  return (
    <div>
      <h2>{id ? 'Editar' : 'Crear'} Producto</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} placeholder="Nombre" required />
        <input name="price" value={product.price} onChange={handleChange} type="number" placeholder="Precio" required />
        <input name="stock" value={product.stock} onChange={handleChange} type="number" placeholder="Stock" />
        <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
