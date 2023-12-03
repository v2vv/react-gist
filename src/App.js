/* eslint-disable camelcase */
import { gistGet, gistList } from "./compment/gists";
import React, { useEffect, useState } from "react";
import "./style.css";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
// import { marked } from "marked";
import { markedConvert, hljsEffect } from "./compment/marked";
import InputDialog from "./compment/InputDialog";
// import VConsole from "vconsole";
import eruda from "eruda";
import Monaco from "./compment/monaco";
import Gistlists from "./compment/Gistlist";
// import Tr from "./test";
// import files from "./files";
// eslint-disable-next-line no-new
// new VConsole();

eruda.init();

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
  const [html3, html3change] = useState("qqq");
  const [context1, contex1change] = useState("eee");
  const [hidden_json, hande_hiddle] = useState(false);
  const [nocontext, setnoContext] = useState(true);
  const [language, setlanguage] = useState("markdown");
  const [filenameMonaco, setfileNamemonavo] = useState("welcome");

  const [textMd, textChange] = useState("hello");

  // github token
  const token = localStorage.getItem("github_token");
  const redataFunc = async () => {
    return await gistList({ token });
  };

  let filenames = {};

  // 获取 gists 列表
  const filenameLoad = async () => {
    const redata = await redataFunc();
    console.log(redata);
    return filenameForeach(redata);
  };

  // 遍历 gists 并生成 filename:id key:vaule
  const filenameForeach = (redata) => {
    // eslint-disable-next-line array-callback-return
    redata.data.forEach((dat) => {
      Object.keys(dat.files).forEach((filename) => {
        filenames[filename] = {};
        filenames[filename].id = dat.id;
      });
    });
    return filenames;
  };

  // 显示 gists 文件名
  const filenameShow = (filenames) => {
    filenameMessage(filenames);
    // 设置 hightlightjs json
    const temp = (
      <>
        <Gistlists
          names={filenames}
          handleContextChange={handleContextChange}
        />
      </>
    );
    // html3change(fileList(filenames));
    console.log(temp);
    html3change(temp);

    showFirstGist(filenames);
  };

  // 显示第一条 gists
  function showFirstGist(filenames) {
    // console.log(Object.keys(filenames)[0]);
    handleContextChange(
      filenames[Object.keys(filenames)[0]].id,
      Object.keys(filenames)[0]
    );
  }

  function filenameMessage(filenames) {
    // 将 gists 信息输出到 markdown 格式字符串
    const html1 = markedConvert(
      " # gg \n```json\n" + JSON.stringify(filenames, null, "\n\t") + "\n```",
      "json"
    );
    // 设置 hightlightjs bash
    const html = html1 + bashShow();
    console.log(html);
    ChangeVaule(html);
  }

  // 显示 bash 代码
  function bashShow() {
    return markedConvert("\n```bash\n" + sting1 + "\n```", "json");
  }

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

  // 内容输出触发函数
  const handleContextChange = async (id, filename) => {
    const contextTemp = await gistGet({ token, id });
    console.log(contextTemp.data);
    Object.keys(contextTemp.data.files).forEach((filenameTemp) => {
      console.log(contextTemp.data.files[filenameTemp].content);
      if (filenameTemp === filename) {
        // setMarked("json");

        contex1change(
          markedConvert(contextTemp.data.files[filenameTemp].content, "json")
        );
        setnoContext(false);
        setlanguage("markdown");
        setfileNamemonavo(filenameTemp);
        textChange(contextTemp.data.files[filenameTemp].content);
      }
    });
  };

  useEffect(() => {
    hljsEffect();
  }, []);

  async function handleClick() {
    // Tr();
    console.log("kk");
    filenames = await filenameLoad();
    console.log(filenames);
    filenameShow(filenames);
  }

  function monacoTextChange(text) {
    contex1change(markedConvert(text, "json"));
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
      <button onClick={handleClick}>You pressed me times</button>
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
          <Monaco
            nocontext={nocontext}
            context={textMd}
            filename={filenameMonaco}
            language={language}
            onValidate={monacoTextChange}
          ></Monaco>
        </div>
        <div
          id="flex_right"
          dangerouslySetInnerHTML={{ __html: context1 }}
        ></div>
      </div>
    </div>
  );
}
