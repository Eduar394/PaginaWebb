import React, { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map(p => (
          <li key={p._id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}
