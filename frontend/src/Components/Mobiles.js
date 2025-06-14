import React from 'react';
import './Mobiles.css';

const mobilesList = [
  {
    name: 'Samsung Galaxy S24 Ultra',
    image: 'samult.jpg',
    price: '₹1,29,999',
    desc: '200MP Camera | 12GB RAM | 5000mAh Battery'
  },
  {
    name: 'Apple iPhone 15 Pro Max',
    image: 'iphone15pro.jpg',
    price: '₹1,59,900',
    desc: '48MP Camera | 8GB RAM | 4422mAh Battery'
  },
  {
    name: 'OnePlus 12',
    image: '1p12.jpg',
    price: '₹64,999',
    desc: '50MP Camera | 12GB RAM | 5400mAh Battery'
  },
  {
    name: 'Xiaomi Redmi Note 13 Pro+',
    image: 'red13+.jpg',
    price: '₹31,999',
    desc: '200MP Camera | 8GB RAM | 5000mAh Battery'
  }
];

const Mobiles = () => (
  <div className="mobiles-page">
    <h1>Mobiles</h1>
    <p>Welcome to the Mobiles section! Here you will find the latest smartphones, feature phones, and accessories from top brands at the best prices.</p>
    <div className="mobiles-list">
      {mobilesList.map((mobile, idx) => (
        <div className="mobile-card" key={idx}>
          <img src={mobile.image} alt={mobile.name} />
          <h2>{mobile.name}</h2>
          <p>{mobile.desc}</p>
          <div className="mobile-price">{mobile.price}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Mobiles;
