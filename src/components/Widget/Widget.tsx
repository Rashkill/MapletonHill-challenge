import WidgetScreen from "./sub-components/WidgetScreen";
import "./styles/widget.scss";
import { useState } from "react";
import UpArrow from "assets/UpArrow";

const Widget = () => {
  const [powered, setPowered] = useState(false);
  const [hours, setHours] = useState(false);
  const [numbers, setNumbers] = useState(100);

  const handleIncreaseNumber = () => {
    setNumbers((prev) => (powered ? prev + 1 : prev));
  };
  const handleDecreaseNumber = () => {
    setNumbers((prev) => (powered ? prev - 1 : prev));
  };

  return (
    <div className="widget-device-container">
      <div className="device-panel">
        <WidgetScreen numbers={numbers} power={powered} hours={hours} />
        <div className="panel-buttons">
          <div className="buttons-top">
            <div className="button-wrapper">
              <button onClick={handleIncreaseNumber}>
                <UpArrow className="arrow-icon" />
              </button>
              <button onClick={handleDecreaseNumber}>
                <UpArrow className="arrow-icon down" />
              </button>
            </div>
          </div>
          <div className="button-wrapper">
            <button className="power-btn" onClick={() => setPowered(!powered)}>
              <div className={`led light-${powered ? "on" : "off"}`} />
              <p>PWR</p>
            </button>
          </div>
        </div>
      </div>
      <div className="device-panel">
        <div className="panel-measure-toggle">
          <p>min</p>
          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => setHours(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <p>hrs</p>
        </div>
        <div className="panel-timer-slide">
          <div className="range-slider">
            <div className="slider-track" />
            <div className="slider-progress" />
            <input type="range" min="1" max="100" className="slider" />
          </div>
          <div className="slider-bars"></div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
