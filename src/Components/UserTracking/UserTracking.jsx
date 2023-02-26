import "./_userTracking.scss";
import avatar from "../../../images/image-jeremy.png";

export const UserTracking = () => {
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
        <button className="btn-state">Daily</button>
        <button className="btn-state">Weekly</button>
        <button className="btn-state">Monthly</button>
      </div>
    </main>
  );
};
