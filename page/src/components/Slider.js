import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

export default function Slider({ imageSrc, title, subtitle, flipped }) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Travel" className="slider_image" />
          <div className="slider_content">
            <h1 className="slider_title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider_content">
            <h1 className="slider_title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="Travel" className="slider_image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider_zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
}