import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import Proptypes from "prop-types";

function Monaco({
  nocontext,
  context,
  filename,
  language,
  onValidate,
  onEditorDidMount,
}) {
  const editorRef = useRef(null);
  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    onEditorDidMount();
  }

  function handleOnValidate() {
    onValidate(editorRef.current.getValue());
  }

  return (
    <>
      <Editor
        height="90vh"
        language={nocontext ? "no" : language}
        path={nocontext ? "no" : filename}
        value={nocontext ? " " : context}
        onMount={handleEditorDidMount}
        onChange={handleOnValidate}
      />
    </>
  );
}

Monaco.propTypes = {
  nocontext: Proptypes.bool.isRequired,
  context: Proptypes.string.isRequired,
  filename: Proptypes.string.isRequired,
  language: Proptypes.string.isRequired,
  onValidate: Proptypes.func.isRequired,
  onEditorDidMount: Proptypes.func.isRequired,
};

export default Monaco;
