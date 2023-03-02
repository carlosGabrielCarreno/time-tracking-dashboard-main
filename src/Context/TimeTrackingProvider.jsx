import { useEffect, useState } from "react";
import { getTimerData } from "../utils/getTimerData";
import { TimeTrackingContext } from "./TimeTrackingContext";

const TimeTrackingProvider = ({ children }) => {
  const [time, setTime] = useState("daily");
  const [dataTimeTracking, setDataTimeTracking] = useState({});
  const [btnActive, setBtnActive] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });

  useEffect(() => {
    setDataTimeTracking(getTimerData(time));
    //console.log(dataTimeTracking);
  }, [time]);

  return (
    <TimeTrackingContext.Provider
      value={{ setTime, dataTimeTracking, btnActive, setBtnActive }}
    >
      {children}
    </TimeTrackingContext.Provider>
  );
};

export { TimeTrackingContext, TimeTrackingProvider };
