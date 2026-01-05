import  { useState, useEffect, useCallback } from "react";

const Carousel = () => {
  const images = [
    "https://img.lazcdn.com/us/domino/028f5959-fd8d-48a5-a88b-ef48327e2975_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/16b2a75a-f94b-4c98-9f5b-07748721d199_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/ff85a1e2-3941-454d-aa35-329e261b6eb9_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/d8deeff6-5a5a-46cb-9a7b-e4db7cf5df7a_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/09727283-6af5-40c0-bd02-7ca3f6519982_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/63360477-2289-42fa-b0c5-4b9758d54517_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/df9d0e93-cc38-427f-a71f-15b6ec20bd73_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/5e9a813e-887b-414b-9b64-6c5e47acb78f_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/65b2b28e-4d9f-466e-86db-4dc9b263b4ba_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/f55e069e-6c44-49b2-9ff6-e1cd45465c62_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/6d797d8b-7619-4c66-b2ad-0f3f8a5926d1_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
    "https://img.lazcdn.com/us/domino/0046ec06-d120-480b-8b73-e2aaff6ad905_PK-1976-688.jpg_2200x2200q80.jpg_.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden shadow-xl">
    
      <div
        className="relative h-64 md:h-80 lg:h-96 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute top-0 w-full h-full"
            style={{ left: `${index * 100}%` }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full  cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-3 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;