import WidgetScreen from "./sub-components/WidgetScreen";
import "./styles/widget.scss";
import React, { useCallback, useEffect, useRef, useState } from "react";
import UpArrow from "assets/UpArrow";
import WidgetRangeSlider from "./sub-components/WidgetRangeSlider";

const Widget = () => {
  const [powered, setPowered] = useState(false);
  const [hours, setHours] = useState(false);
  const [numbers, setNumbers] = useState(0);

  const minInterval = useRef<NodeJS.Timer | null>(null);
  const hrsInterval = useRef<NodeJS.Timer | null>(null);

  const handleIncreaseNumber = () => {
    setNumbers((prev) => (powered ? prev + 1 : prev));
  };
  const handleDecreaseNumber = useCallback(() => {
    setNumbers((prev) => (powered && prev > 0 ? prev - 1 : prev));
  }, [powered]);

  useEffect(() => {
    if (powered) {
      if (!hours) {
        minInterval.current = setInterval(() => {
          handleDecreaseNumber();
        }, 100);
      }
      if (hours) {
        hrsInterval.current = setInterval(() => {
          handleDecreaseNumber();
        }, 1000);
      }
    }

    return () => {
      if (minInterval.current) clearInterval(minInterval.current);
      if (hrsInterval.current) clearInterval(hrsInterval.current);
    };
  }, [powered, hours, handleDecreaseNumber]);

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
        <WidgetRangeSlider value={numbers} onChange={setNumbers} />
      </div>
    </div>
  );
};

export default Widget;
