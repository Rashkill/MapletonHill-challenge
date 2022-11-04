import ClockSVG from "assets/ClockSVG";

type WidgetScreenProps = {
  numbers?: number;
  power?: boolean;
  hours?: boolean;
};

const WidgetScreen: React.FC<WidgetScreenProps> = ({
  numbers = 0,
  power,
  hours,
}) => {
  return (
    <div className="panel-screen">
      <ClockSVG className={`digits light-${power ? "on" : "off"} clock-icon`} />
      <div className="screen-numbers">
        <div className="digits back">
          <p>8888</p>
        </div>
        <div className={`digits light-${power ? "on" : "off"} front`}>
          <p>{String(numbers).slice(-8, 4)}</p>
        </div>
      </div>
      <div
        className={`digits light-${power ? "on" : "off"} screen-measure ${
          hours ? "hours" : "minutes"
        }`}
      >
        <p>{hours ? "hrs" : "min"}</p>
      </div>
    </div>
  );
};

export default WidgetScreen;