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
  const getHrs = (minutes: number) => {
    const hrs = minutes / 60;
    const roundedHrs = Math.floor(hrs);
    const mins = (hrs - roundedHrs) * 60;
    const roundedMins = Math.round(mins);
    return `${roundedHrs}.${roundedMins}`;
  };
  return (
    <div className="panel-screen">
      <ClockSVG className={`digits light-${power ? "on" : "off"} clock-icon`} />
      <div className="screen-numbers">
        <div className="digits back">
          <p>8888</p>
        </div>
        <div className={`digits light-${power ? "on" : "off"} front`}>
          <p>{String(hours ? getHrs(numbers) : numbers).slice(-8, 4)}</p>
        </div>
      </div>
      <div className="screen-measure">
        <div className="digits back">
          <p>ooo</p>
        </div>
        <div className="digits back">
          <p>xxx</p>
        </div>
        <div className={`digits light-${power ? "on" : "off"}`}>
          <p>{hours ? "hrs" : "min"}</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetScreen;
