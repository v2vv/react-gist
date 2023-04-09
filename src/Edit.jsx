import React, { useState } from "react";
import MdEditor from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import PropTypes from "prop-types";

const Edit = React.memo(({ text2 }) => {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState("hello");
  return <MdEditor modelValue={text2} onChange={setText} />;
});

Edit.propTypes = {
  text2: PropTypes.string.isRequired,
};

Edit.displayName = "Edit";

export default Edit;
