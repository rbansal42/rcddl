// src/components/EventCard.tsx
import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;