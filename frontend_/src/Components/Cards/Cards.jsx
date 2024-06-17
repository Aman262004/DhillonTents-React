import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const cards = [
  {
    title: 'Tent Rental',
    description: 'Whether you’re planning a formal wedding or a more casual event, we have the tent for you!',
    link: '/booknow', // Update link to the "Book Now" page
  },
  {
    title: 'Chair Rental',
    description: 'We offer a wide variety of chairs for all types of events, from elegant weddings to casual parties.',
    link: '/booknow', // Update link to the "Book Now" page
  },
  {
    title: 'Table Rental',
    description: 'Choose from round, rectangular, and cocktail tables in various sizes to fit your event’s needs.',
    link: '/booknow', // Update link to the "Book Now" page
  },
];

const Card = ({ title, description, link }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={link} className="card-link">View More</Link>
  </div>
);

const CardGrid = () => (
  <div className="card-grid">
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default CardGrid;