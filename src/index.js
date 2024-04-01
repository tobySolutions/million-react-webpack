import React from "react";
import ReactDOM from "react-dom";
// import { block } from "million/react";

const App = () => {
  return (
    <div>
      <h1>Hello, Million with Webpack!</h1>
      <OmoOlogo />
      {/* <OmoOlogoBlock /> */}
    </div>
  );
};

// const OmoOlogoBlock = block(() => {
//   return <p style={{ color: "green", fontSize: "30px" }}>OmoOlogo Block</p>;
// });

const OmoOlogo = () => {
  return <p style={{ color: "green", fontSize: "30px" }}>OmoOlogo React Component demo</p>;
};

ReactDOM.render(<App />, document.getElementById("root"));
