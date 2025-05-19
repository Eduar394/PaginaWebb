import { useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post(`/auth/reset-password/${token}`, { password });
      setMessage(res.data.message || 'Contraseña actualizada');
    } catch {
      setMessage('Error al actualizar contraseña');
    }
  };

  return (
    <div>
      <h2>Restablecer contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Actualizar contraseña</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
