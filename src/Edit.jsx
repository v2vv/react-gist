import React, { useState } from "react";
import MdEditor from "md-editor-rt";
import "md-editor-rt/lib/style.css";

const Edit = React.memo(() => {
  const [text, setText] = useState("hello md-editor-rt！");
  return <MdEditor modelValue={text} onChange={setText} />;
});

Edit.displayName = "MyComponent";

export default Edit;
