import React from "react";
import Editor from "@monaco-editor/react";

function Monaco() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}

export default Monaco;
