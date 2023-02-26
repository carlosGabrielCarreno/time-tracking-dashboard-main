import "./_boxTracking.scss";

export const BoxTracking = ({ nameClass }) => {
  return (
    <div className={`${nameClass}`}>
      <div className="container-data-state"></div>
    </div>
  );
};
