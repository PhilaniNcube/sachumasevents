import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Slider.module.css';
import images from './images';

const Slider = () => {
  const [width, setWidth] = useState(0);

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const screenWidth = carousel.offsetWidth;
    const scrollWidth = carousel.scrollWidth;

    setWidth(scrollWidth - screenWidth);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-12 lg:px-0">
      <motion.div ref={carouselRef} className={styles.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >
          {images.map((image, i) => {
            return (
              <motion.div key={i} className={styles.item}>
                <img src={image.src} alt="carousel image" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
