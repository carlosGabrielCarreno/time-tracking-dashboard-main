import "./_boxTracking.scss";
import ellipsis from "../../../images/icon-ellipsis.svg";
import { getImageLogotype } from "../../utils/getImageLogotype";

export const BoxTracking = ({ nameClass }) => {
  return (
    <div className={`${nameClass}`}>
      <div className="container-logotype">
        <img src={getImageLogotype(nameClass)} alt="" />
      </div>
      <div className="container-data-state">
        <h3>{`${nameClass}`}</h3>
        <h2>32hrs</h2>
        <img src={ellipsis} alt="icon ellipsis" />
        <p>last Week - 36hrs</p>
      </div>
    </div>
  );
};
