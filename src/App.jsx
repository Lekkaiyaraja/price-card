import React from 'react';
import './App.css';
import PriceCard from './PriceCard';

const App = () => {
  const pricingPlans = [
    {
      title: 'Free',
      price: '$0/month',
      features: [
        { text: 'Single User', enabled: true },
        { text: '50GB Storage', enabled: true },
        { text: 'Unlimited Public Projects', enabled: true },
        { text: 'Community Access', enabled: true },
        { text: 'Unlimited Private Projects', enabled: false },
        { text: 'Dedicated Phone Support', enabled: false },
        { text: 'Free Subdomain', enabled: false },
        { text: 'Monthly Status Reports', enabled: false },
      ],
    },
    {
      title: 'Plus',
      price: '$9/month',
      features: [
        { text: '5 Users', enabled: true },
        { text: '50GB Storage', enabled: true },
        { text: 'Unlimited Public Projects', enabled: true },
        { text: 'Community Access', enabled: true },
        { text: 'Unlimited Private Projects', enabled: true },
        { text: 'Dedicated Phone Support', enabled: true },
        { text: 'Free Subdomain', enabled: true },
        { text: 'Monthly Status Reports', enabled: false },
      ],
    },
    {
      title: 'Pro',
      price: '$49/month',
      features: [
        { text: 'Unlimited Users', enabled: true },
        { text: '50GB Storage', enabled: true },
        { text: 'Unlimited Public Projects', enabled: true },
        { text: 'Community Access', enabled: true },
        { text: 'Unlimited Private Projects', enabled: true },
        { text: 'Dedicated Phone Support', enabled: true },
        { text: 'Free Subdomain', enabled: true },
        { text: 'Monthly Status Reports', enabled: true },
      ],
    },
  ];

  return (
    <div className="App">
     
      <div className="price-cards">
        {pricingPlans.map((plan, index) => (
          <PriceCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
