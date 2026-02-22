import { useEffect, useRef, useState } from 'react';
import './ImageZoomOut.css';

const ImageZoomOut = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`image-zoom-wrapper ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ImageZoomOut;
