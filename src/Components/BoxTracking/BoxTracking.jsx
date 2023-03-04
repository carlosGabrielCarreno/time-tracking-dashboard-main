import "./_boxTracking.scss";
import ellipsis from "../../../images/icon-ellipsis.svg";
import { getImageLogotype } from "../../utils/getImageLogotype";
import { TimeTrackingContext } from "../../Context/TimeTrackingContext";
import { useContext } from "react";
import { getTimeFrames } from "../../utils/getTimeFrames";

export const BoxTracking = ({ nameClass }) => {
  const { dataTimeTracking, time } = useContext(TimeTrackingContext);
  //console.log(dataTimeTracking);
  return (
    <div className={`${nameClass}`}>
      <div className="container-logotype">
        <img src={getImageLogotype(nameClass)} alt="" />
      </div>
      <div className="container-data-state">
        <h3>{`${nameClass}`}</h3>

        <h2>{`${getTimeFrames(nameClass, dataTimeTracking)?.current}`}</h2>

        <img src={ellipsis} alt="icon ellipsis" />
        <p>{`last Week - ${
          getTimeFrames(nameClass, dataTimeTracking)?.previous
        }hrs`}</p>
      </div>
    </div>
  );
};
