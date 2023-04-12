import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import Proptypes from "prop-types";

function Monaco({ content }) {
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={content}
        onMount={handleEditorDidMount}
      />
    </>
  );
}

Monaco.propTypes = {
  content: Proptypes.string.isRequired,
};

export default Monaco;
