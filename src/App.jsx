import "./app.scss";
import { BoxTracking } from "./Components/BoxTracking/BoxTracking";
import { UserTracking } from "./Components/UserTracking/UserTracking";

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <UserTracking />
        <BoxTracking nameClass={"work"} />
        <BoxTracking nameClass={"play"} />
        <BoxTracking nameClass={"study"} />
        <BoxTracking nameClass={"exercise"} />
        <BoxTracking nameClass={"social"} />
        <BoxTracking nameClass={"self-care"} />
      </div>
    </div>
  );
}

export default App;
