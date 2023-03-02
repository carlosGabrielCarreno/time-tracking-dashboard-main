import "./_userTracking.scss";
import avatar from "../../../images/image-jeremy.png";
import { useContext } from "react";
import { TimeTrackingContext } from "../../Context/TimeTrackingContext";

export const UserTracking = () => {
  const { setTime, dataTimeTracking, btnActive, setBtnActive } =
    useContext(TimeTrackingContext);
  const handleSetToDaily = () => {
    setTime("daily");
    setBtnActive({
      ...btnActive,
      daily: true,
      weekly: false,
      monthly: false,
    });
  };
  const handleSetToWeekly = () => {
    setTime("weekly");
    setBtnActive({
      ...btnActive,
      daily: false,
      weekly: true,
      monthly: false,
    });
  };
  const handleSetToMonthly = () => {
    setTime("monthly");
    setBtnActive({
      ...btnActive,
      daily: false,
      weekly: false,
      monthly: true,
    });
  };
  console.log(dataTimeTracking, "time state");
  return (
    <main className="container-main">
      <div className="container-data-user">
        <img className="image-profile" src={avatar} alt="image profile" />
        <div className="container-name">
          <p>Report for</p>
          <h3>Jeremy Robson</h3>
        </div>
      </div>
      <div className="container-states">
        <button
          onClick={handleSetToDaily}
          className={`btn-state ${btnActive.daily ? "active" : ""}`}
        >
          Daily
        </button>
        <button
          onClick={handleSetToWeekly}
          className={`btn-state ${btnActive.weekly ? "active" : ""}`}
        >
          Weekly
        </button>
        <button
          onClick={handleSetToMonthly}
          className={`btn-state ${btnActive.monthly ? "active" : ""}`}
        >
          Monthly
        </button>
      </div>
    </main>
  );
};
