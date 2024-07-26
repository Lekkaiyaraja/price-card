import React from 'react';
import './PriceCard.css';

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2 className="price-card-title">{title}</h2>
      <h3 className="price-card-price">{price}</h3>
      <ul className="price-card-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className={feature.enabled ? 'icon enabled' : 'icon disabled'}>
              {feature.enabled ? '✓' : '✗'}
            </span>
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="price-card-button">Button</button>
    </div>
  );
};

export default PriceCard;
