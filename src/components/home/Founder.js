import React from "react";
import './Home.css';
import { IoIosStar } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

const Founder = () => {
  const cardsData = [
    { name: "John Doe", rating: 5, description: "John is a founder who loves building tech solutions.", image: "image1.jpg" },
    { name: "Jane Smith", rating: 4, description: "Jane has been instrumental in the growth of her startup.", image: "image2.jpg" },
    { name: "Alice Johnson", rating: 5, description: "Alice is passionate about creating sustainable businesses.", image: "image3.jpg" },
    { name: "Bob Brown", rating: 3, description: "Bob focuses on fintech innovations.", image: "image4.jpg" },
    { name: "Charlie Wilson", rating: 4, description: "Charlie has a keen interest in AI and machine learning.", image: "image5.jpg" },
    { name: "Emily Davis", rating: 5, description: "Emily is known for her leadership in e-commerce.", image: "image6.jpg" },
    { name: "Frank Miller", rating: 4, description: "Frank has a deep understanding of blockchain technology.", image: "image7.jpg" },
    { name: "Grace Lee", rating: 5, description: "Grace is a tech entrepreneur with a focus on mobile apps.", image: "image8.jpg" },
    { name: "Henry Martin", rating: 3, description: "Henry works in the field of renewable energy.", image: "image9.jpg" }
  ];

  return (
    <div className="founder">
      <div className="founder-header">
        <h3>Loved by founders all over the world</h3>
        <small>We’ve helped thousands of people realize their US business dreams.</small>
      </div>
      <div className="founder-cards">
        {cardsData.map((card, index) => (
          <div className="founder-card" key={index}>
            <div className="card-header">
              <FaRegUser className="user-icon" />
              <div className="card-info">
                <h4>{card.name}</h4>
                <IoIosStar className="star-icon" />
              </div>
            </div>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founder;
