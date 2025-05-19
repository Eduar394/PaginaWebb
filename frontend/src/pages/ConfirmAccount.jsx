import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

const ConfirmAccount = () => {
  const { token } = useParams();

  useEffect(() => {
    const confirm = async () => {
      try {
        await API.get(`/auth/confirm/${token}`);
        alert('Cuenta confirmada');
      } catch {
        alert('Token inválido');
      }
    };
    confirm();
  }, [token]);

  return <p>Confirmando cuenta...</p>;
};

export default ConfirmAccount;
