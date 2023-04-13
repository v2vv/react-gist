import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import Proptypes from "prop-types";

function Monaco({ nocontext, context, filename, language }) {
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
        defaultLanguage={nocontext ? "no" : language}
        path={nocontext ? "no" : filename}
        defaultValue={nocontext ? " " : context}
        onMount={handleEditorDidMount}
      />
    </>
  );
}

Monaco.propTypes = {
  nocontext: Proptypes.bool.isRequired,
  context: Proptypes.string.isRequired,
  filename: Proptypes.string.isRequired,
  language: Proptypes.string.isRequired,
};

export default Monaco;
