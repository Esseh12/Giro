import iphoneImg from "../../assets/images/iphone.png";

const carouselData = [
  {
    id: 1,
    img: { iphoneImg },
    name: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
  },
  {
    id: 2,
    img: { iphoneImg },
    name: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
  },
  {
    id: 3,
    img: { iphoneImg },
    name: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
  },
];

export default carouselData;

import React, { useState } from 'react';

const carouselData = [
  { id: 1, img: 'image1_url', title: 'iPhone 14 Series', offer: 'Up to 10% off Voucher' },
  { id: 2, img: 'image2_url', title: 'PlayStation 5', offer: 'Up to 15% off Voucher' },
  { id: 3, img: 'image3_url', title: 'Amazon Speaker', offer: 'Up to 20% off Voucher' },
  // Add more carousel items here...
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active item

  const handleClick = (index) => {
    setActiveIndex(index); // Set the clicked item as active
  };

  return (
    <div className="carousel-container">
      {carouselData.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <img src={item.img} alt={item.title} />
          <div className="carousel-info">
            <h3>{item.title}</h3>
            <p>{item.offer}</p>
          </div>
        </div>
      ))}
      <div className="carousel-indicators">
        {carouselData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

