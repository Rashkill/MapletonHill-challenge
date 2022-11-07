import { memo, useEffect, useState } from "react";

type WidgetRangeSliderProps = {
  initialValue?: number | string;
  value?: number;
  numberOfLines?: number;
  onChange?: (value: number) => void;
};
const WidgetRangeSlider: React.FC<WidgetRangeSliderProps> = ({
  initialValue,
  value,
  numberOfLines = 12,
  onChange,
}) => {
  const [_value, setValue] = useState(initialValue || 0);

  useEffect(() => {
    if (value) setValue(value);
  }, [value]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value));
    setValue(e.target.value);
  };

  return (
    <div className="panel-timer-slide">
      <div className="range-slider">
        <div className="slider-track">
          <div
            className="slider-progress"
            style={{
              width: `${
                (Number(_value) * 100) / (numberOfLines + 4 * numberOfLines)
              }%`,
            }}
          />
        </div>
        <input
          type="range"
          min="0"
          max={numberOfLines + 4 * numberOfLines}
          className="slider-range"
          value={_value}
          onChange={handleOnChange}
        />
      </div>
      <div className="slider-bars">
        {new Array(numberOfLines).fill({}).map((_, index) => (
          <>
            <div key={index + "slider-bar"} className={`slider-bar`} />
            {index < numberOfLines - 1 &&
              new Array(4)
                .fill({})
                .map((_, index) => (
                  <div
                    key={index + "small slider-bar"}
                    className={`slider-bar small`}
                  />
                ))}
          </>
        ))}
      </div>
    </div>
  );
};
export default WidgetRangeSlider;
