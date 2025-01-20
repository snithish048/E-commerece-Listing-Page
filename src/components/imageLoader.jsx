import React, { useState, useEffect, useRef } from "react";

const ImageLoader = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isLoaded ? src : ""}
      alt={alt}
      className={`transition-opacity duration-700 ease-in-out opacity-0 ${
        isLoaded ? "opacity-100" : ""
      } ${className}`}
    />
  );
};

export default ImageLoader;
