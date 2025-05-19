import { useState } from 'react';
import API from '../services/api';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      alert('Revisa tu correo para confirmar tu cuenta');
    } catch (err) {
      alert('Error al registrarse');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Nombre" />
      <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
