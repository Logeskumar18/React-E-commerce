import { FaCarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";

const Features = () => {
  const CardData = [
    { icons: <FaCarAlt />, Heading: "Free Shipping", bgColor: "#e0f7fa" },   // Light cyan
    { icons: <FaCreditCard />, Heading: "Safe Payment", bgColor: "#e8f5e9" }, // Light green
    { icons: <FaShieldAlt />, Heading: "Secure Payment", bgColor: "#fff3e0" }, // Light orange
    { icons: <IoHeadset />, Heading: "Back Guarantee", bgColor: "#fce4ec" },  // Light pink
  ];

  return (
    <div className="container py-5">
      <div className="row text-center">
        {CardData.map((data, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div
              className="card h-100 border-0"
              style={{ backgroundColor: data.bgColor }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div className="mb-3" style={{ fontSize: "2rem", color: "#333" }}>
                  {data.icons}
                </div>
                <h5 className="card-title text-dark">{data.Heading}</h5>
                <p className="card-text text-secondary">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
