// src/pages/dashboard/index.tsx

import React, { useState, useEffect } from 'react';
import { getAllProducts } from './api';
import type { ProductResponse } from '../../components/product/types';
import { Product } from '../../components/product';

export const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const renderProducts = () => {
    if (loading) return <p>Загрузка товаров...</p>;
    if (error) return <p style={{ color: 'red' }}>Ошибка: {error}</p>;
    if (products.length === 0) return <p>Товары не найдены.</p>;

    return products.map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Некорректные данные');
        }
      } catch (err) {
        console.error('Ошибка при загрузке товаров:', err);
        setError('Не удалось загрузить товары');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Список товаров</h2>
      {renderProducts()}
    </div>
  );
};

export default Dashboard;