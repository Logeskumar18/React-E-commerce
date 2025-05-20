import { useEffect, useState } from 'react';
import img1 from '../assets/sofaset.png';
import img2 from '../assets/Phone.png';
import img3 from '../assets/wireless-01.png';
import img4 from '../assets/watch-07.png';

const Carousel = () => {
  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setAnimate(true);

    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); 

    setTimeout(() => {
      setAnimate(false);
    }, 2000); 
  }, 5000); 

  return () => clearInterval(interval);
}, []);



  return (
    <div className="container-fluid py-5 bg-light overflow-hidden">
      
      <div className={`row align-items-center animated-wrapper ${animate ? 'slide-in' : ''}`}>
        
        <div className="col-md-6 text-center text-md-start px-4">
          <h2 className="mb-3">50% Off For Your First Shopping</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe deleniti dolore soluta totam, rerum voluptatibus magni impedit.
          </p>
          <h6 className="btn btn-outline-dark">Visit Collections</h6>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={images[index]}
            alt="Product"
            className="img-fluid"
            style={{ maxHeight: '400px' }}
          />
        </div>

      </div>
    </div>
  );
};

export default Carousel;
