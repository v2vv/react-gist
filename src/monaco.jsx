import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import Proptypes from "prop-types";

function Monaco({ files, filename }) {
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
        defaultLanguage={files[filename].language}
        path={filename}
        defaultValue={files[filename].value}
        onMount={handleEditorDidMount}
      />
    </>
  );
}

Monaco.propTypes = {
  files: Proptypes.object.isRequired,
  filename: Proptypes.string.isRequired,
};

export default Monaco;
