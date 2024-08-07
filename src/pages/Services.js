import React from 'react';
import '../assets/css/Services.css';

const services = [
  {
    name: 'Wheel Alignment',
    description: 'Ensure your car’s wheels are aligned to improve handling and extend tire life.',
    image: require('../assets/img/wheel-aligniment.jpeg'), // Updated path
  },
  {
    name: 'Wheel Balancing',
    description: 'Proper wheel balancing ensures a smoother ride and better vehicle handling.',
    image: require('../assets/img/wheel-balance.jpg'), // Updated path
  },
  {
    name: 'Car Tire Repair',
    description: 'Quick and reliable repair for any tire issues you may have.',
    image: require('../assets/img/tire-repair.jpg'), // Updated path
  },
  {
    name: 'Engine Repairs',
    description: 'Our skilled technicians fix engines for all car brands with precision.',
    image: require('../assets/img/engine-repair.jpg'), // Updated path
  },
  {
    name: 'Body Repairs',
    description: 'Professional body repair services for all types of cars to restore their look and safety.',
    image: require('../assets/img/body-repair.jpg'), // Updated path
  },
  {
    name: 'Car Electrical Repairs',
    description: 'Expert electrical repairs to solve any issues with your vehicle’s electrical system.',
    image: require('../assets/img/electric-repair.jpg'), // Updated path
  },
];

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
