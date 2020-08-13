import React from "react";

function FamousSaying({ saying, by }) {
  return (
    <h2>
      "{saying}" - By {by}
    </h2>
  );
}

const famousSayingArr = [
  {
    saying: "Yee",
    by: "Tio",
  },
  {
    saying: "Early bird catches the fly",
    by: "Unknown",
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {famousSayingArr.map((e, i) => (
        <FamousSaying key={i} saying={e.saying} by={e.by} />
      ))}
    </div>
  );
}

export default App;
