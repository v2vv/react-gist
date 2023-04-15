import React from "react";
import Proptypes from "prop-types";

function Gistlists({ names, handleContextChange }) {
  return (
    <div className="context">
      <ul>
        {Object.keys(names).map((item) => (
          <li
            key={item}
            onClick={() => {
              handleContextChange(names[item].id, item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

Gistlists.propTypes = {
  names: Proptypes.object.isRequired,
  handleContextChange: Proptypes.func.isRequired,
};

export default Gistlists;
