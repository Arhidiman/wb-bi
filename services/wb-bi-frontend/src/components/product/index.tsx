import React from 'react';
import type { ProductResponse } from './types';

interface ProductProps {
  product: ProductResponse;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const { name, brand, colors, sizes } = product;

  // Берём цену из первого размера (если есть)
  const price = sizes[0]?.price?.basic;

  return (
    <div
      style={{
        border: '1px solid #ddd',
        margin: '8px 0',
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}
    >
      <h3>{name}</h3>
      <p>
        <strong>Бренд:</strong> {brand}
      </p>
      <p>
        <strong>Цена:</strong> ₽{price !== undefined ? price : 'Не указана'}
      </p>
      <p>
        <strong>Цвета:</strong>{' '}
        {colors.length > 0 ? colors.map((color) => color.name).join(', ') : 'Нет информации'}
      </p>
    </div>
  );
}