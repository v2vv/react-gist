/* eslint-disable camelcase */
import { MonacoEdit } from "./compment/gists";
import React, { useEffect, useState, useRef } from "react";
import "./style.css";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
// import { marked } from "marked";
import { markedConvert, hljsEffect } from "./compment/marked";
import InputDialog from "./compment/InputDialog";
// import VConsole from "vconsole";
// import eruda from "eruda";

// import Tr from "./test";
// import files from "./files";
// eslint-disable-next-line no-new
// new VConsole();

// eruda.init();

if (!localStorage.getItem("github_token")) {
  localStorage.setItem("github_token", "vaule");
}

const sting1 = `
echo hello
`;

export default function App() {
  // refrash state
  const [dialogVisible, setDialogVisible] = useState(false);
  const [vaule, ChangeVaule] = useState("<p>jj</p");
  const [context1, contex1change] = useState("eee");
  const [hidden_json, hande_hiddle] = useState(false);
  const [html3, html3change] = useState("qqq");
  const Gistref = useRef();
  // 输入 github token
  const handleOpenDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  // 隐藏 gists Message
  const hande_hiddle_click = () => {
    hande_hiddle(!hidden_json);
  };

  // function handleMdView(event) {
  //   textChange(event.target.value);
  //  contex1change(marked.parse(event.target.value));
  // }

  function handleGistContexchange(content) {
    // console.log(content);
    contex1change(markedConvert(content, "json"));
  }

  function filenameMessage(filenames) {
    // 将 gists 信息输出到 markdown 格式字符串
    const html1 = markedConvert(
      " # gg \n```json\n" + JSON.stringify(filenames, null, "\n\t") + "\n```",
      "json"
    );
    // 设置 hightlightjs bash
    const html = html1 + bashShow();
    console.log(html1);
    ChangeVaule(html);
  }

  // 显示 bash 代码
  function bashShow() {
    return markedConvert("\n```bash\n" + sting1 + "\n```", "json");
  }

  useEffect(() => {
    hljsEffect();
  }, []);

  async function handleShowGistnameClick() {
    const child = Gistref.current;
    console.log(child);
    const filenames = await child.filenameLoad();
    console.log(filenames);
    filenameMessage(filenames);
    html3change(child.filenameShow());
  }

  function monacoTextSave() {
    const child = Gistref.current;
    if (child) {
      child.gistMonacoTextSave();
    } else {
      console.error("MonacoEdit component is not available yet.");
      // 可以考虑提示用户或进行其他处理
    }
  }

  function handleGistEditorDidMount() {
    console.log("gist did mount ok");
  }

  return (
    <div>
      <div className="nav">
        <div className="nav_right">
          <button onClick={handleOpenDialog}>github token</button>
          {dialogVisible && <InputDialog />}
        </div>
        <div className="nav_center">
          <h1>Github gist</h1>
        </div>
      </div>
      <button onClick={handleShowGistnameClick}>Show GitHub gist list</button>
      <button onClick={monacoTextSave}>SAVE</button>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={hande_hiddle_click}>hide json</button>
      <div className="context_flex">
        {hidden_json && (
          <div
            id="flex_left"
            dangerouslySetInnerHTML={{
              __html: vaule,
            }}
          ></div>
        )}
        <div id="flex_middle">{html3}</div>
        <div id="flex_edit">
          <MonacoEdit
            onGistAppMonacoTextChange={handleGistContexchange}
            onGistEditorDidMount={handleGistEditorDidMount}
            ref={Gistref}
          />
        </div>
        <div
          id="flex_right"
          dangerouslySetInnerHTML={{ __html: context1 }}
        ></div>
      </div>
    </div>
  );
}
