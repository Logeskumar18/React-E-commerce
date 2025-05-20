import sofaset from '../assets/sofaset.png';



const Carousel = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row align-items-center">
        
        <div className="col-md-6 text-center text-md-start px-4">
          <h2 className="mb-3">50% Off For Your First Shopping</h2>
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima saepe deleniti dolore soluta totam, rerum voluptatibus magni impedit.
          </p>
          <h6 className="btn btn-outline-dark">Visit Collections</h6>
        </div>

        
        <div className="col-md-6 text-center">
          <img
            src={sofaset}
            alt="Sofaset"
            className="img-fluid"
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
