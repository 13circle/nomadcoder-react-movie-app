import React from "react";

function FamousSaying(props) {
  return (
    <h1>
      "{props.saying}" - By {props.by}
    </h1>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <FamousSaying saying="Yee" by="Tio" />
    </div>
  );
}

export default App;
