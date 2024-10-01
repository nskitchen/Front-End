import React, { useState, useEffect } from 'react';
import FlipPage from 'react-flip-page';

const MenuItems = () => {
  const images = [
    'https://ik.imagekit.io/nsk/Menu/A4%20-%201.png?updatedAt=1726340809406',
    'https://ik.imagekit.io/nsk/Menu/A4%20-%202.png?updatedAt=1726340809497',
    'https://ik.imagekit.io/nsk/Menu/A4%20-%203.png?updatedAt=1726340809521',
    'https://ik.imagekit.io/nsk/Menu/A4%20-%204.png?updatedAt=1726340809541',
    'https://ik.imagekit.io/nsk/Menu/A4%20-%205.png?updatedAt=1726340809561',
    'https://ik.imagekit.io/nsk/Menu/A4%20-%206.png?updatedAt=1726340809581',
    'https://ik.imagekit.io/nsk/Menu/A4%20-%207.png?updatedAt=1726340809601',
    'https://ik.imagekit.io/nsk/Menu/A4%20-%208.png?updatedAt=1726340809621',
    // Add all your menu PNG paths
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resizing to adjust the layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  // Set breakpoint for mobile
    };

    window.addEventListener('resize', handleResize);

    // Set initial state
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderPages = () => {
    if (isMobile) {
      // Single-page view for mobile
      return images.map((image, index) => (
        <article key={index} className="w-full h-full flex justify-center">
          <img src={image} alt={`Menu page ${index + 1}`} className="max-w-full h-auto object-contain" />
        </article>
      ));
    } else {
      // Double-page view for desktop
      const pagePairs = [];
      for (let i = 0; i < images.length; i += 2) {
        pagePairs.push(images.slice(i, i + 2));
      }

      return pagePairs.map((pair, index) => (
        <article key={index} className="w-full h-full flex justify-center">
          {pair.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Menu page ${index * 2 + idx + 1}`}
              className="w-1/2 h-auto object-contain"            git push origin main
            />
          ))}
        </article>
      ));
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <FlipPage
        orientation="horizontal"
        responsive={true}
        className="flip-page-container"
        flipOnTouch={true}
      >
        {renderPages()}
      </FlipPage>
    </div>
  );
};

export default MenuItems;
