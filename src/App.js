import React from "react";
import PropTypes from "prop-types";

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

FamousSaying.propTypes = {
  saying: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
};

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
