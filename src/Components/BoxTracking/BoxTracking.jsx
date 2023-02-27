import "./_boxTracking.scss";
import ellipsis from "../../../images/icon-ellipsis.svg";

export const BoxTracking = ({ nameClass }) => {
  return (
    <div className={`${nameClass}`}>
      <div className="container-data-state">
        <h3>{`${nameClass}`}</h3>
        <h2>32hrs</h2>
        <img src={ellipsis} alt="icon ellipsis" />
        <p>last Week - 36hrs</p>
      </div>
    </div>
  );
};
