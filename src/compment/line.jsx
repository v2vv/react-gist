import React from "react";
import Proptypes from "prop-types";

function Line({ text }) {
  const linet = text.split("\n");
  console.log(linet);
  return (
    <div className="line">
      {linet.map((oneline, key) => {
        return (
          <div key={key} suppressContentEditableWarning contentEditable>
            <span>{oneline}</span>
          </div>
        );
      })}
    </div>
  );
}

Line.propTypes = {
  text: Proptypes.string.isRequired,
};

export default Line;
