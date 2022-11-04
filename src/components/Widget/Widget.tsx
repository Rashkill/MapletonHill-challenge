import WidgetScreen from "./sub-components/WidgetScreen";
import "./styles/widget.scss";
import { useState } from "react";
import UpArrow from "assets/UpArrow";

const Widget = () => {
  const [powered, setPowered] = useState(false);
  const [numbers, setNumbers] = useState(100);

  const handleIncreaseNumber = () => {
    setNumbers((prev) => (powered ? prev + 1 : prev));
  };
  const handleDecreaseNumber = () => {
    setNumbers((prev) => (powered ? prev - 1 : prev));
  };

  return (
    <div className="widget-device-container">
      <div className="device-panel-top">
        <WidgetScreen numbers={numbers} power={powered} />
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
              <div className={`led light-${powered ? "on" : "off"}`} />{" "}
              <p>PWR</p>
            </button>
          </div>
        </div>
      </div>
      <div className="device-panel-bottom">
        <div className="panel-measure-toggle">
          MIN <div className="toggle"></div> HRS
        </div>
        <div className="panel-timer-slide">
          <div className="slider"></div>
          <div className="slider-bars"></div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
