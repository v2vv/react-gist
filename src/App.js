/* eslint-disable camelcase */
import { Octokit } from "@octokit/rest";
import React, { useEffect, useState } from "react";
import "./style.css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { marked } from "marked";
import InputDialog from "./page";
// import VConsole from "vconsole";
import eruda from "eruda";
import Edit from "./Edit";

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

  // github token
  const token_git = localStorage.getItem("github_token");
  const octokit = new Octokit({ auth: token_git });
  const redataFunc = async () => {
    return await octokit.request("GET /gists");
  };

  // 获取 gists 列表
  const filenameLoad = async () => {
    const redata = await redataFunc();
    console.log(redata);
    return filenameForeach(redata);
  };

  // 遍历 gists 并生成 filename:id key:vaule
  const filenameForeach = (redata) => {
    const filenames = {};
    // eslint-disable-next-line array-callback-return
    redata.data.forEach((dat) => {
      Object.keys(dat.files).forEach((filename) => {
        filenames[filename] = dat.id;
      });
    });
    return filenames;
  };

  // 显示 gists 文件名
  const filenameShow = (filenames) => {
    filenameMessage(filenames);
    // 设置 hightlightjs json
    html3change(fileList(filenames));
  };

  function filenameMessage(filenames) {
    setMarked("json");
    // 将 gists 信息输出到 markdown 格式字符串
    const html1 = marked.parse(
      " # gg \n```json\n" + JSON.stringify(filenames, null, "\n\t") + "\n```"
    );
    // 设置 hightlightjs bash
    const html = html1 + bashShow();
    console.log(html);
    ChangeVaule(html);
  }

  // 显示 bash 代码
  function bashShow() {
    setMarked("bash");
    return marked.parse("\n```bash\n" + sting1 + "\n```");
  }

  // 输入 github token
  const handleOpenDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  // 隐藏 gists Message
  const hande_hiddle_click = () => {
    hande_hiddle(!hidden_json);
  };

  // 配置 Marked hightlightjs
  function setMarked(langName) {
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : langName;
        return hljs.highlight(code, { language }).value;
      },
    });
  }

  const fileList = (names) => {
    return (
      <div className="context">
        <ul>
          {Object.keys(names).map((item) => (
            <li
              key={item}
              onClick={() => {
                handleContextChange(names[item]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // 内容输出触发函数
  const handleContextChange = async (key) => {
    const contextTemp = await octokit.request("GET /gists/{gist_id}", {
      gist_id: key,
    });
    console.log(contextTemp.data);
    Object.keys(contextTemp.data.files).forEach((filenameTemp) => {
      console.log(contextTemp.data.files[filenameTemp].content);
      setMarked("json");
      contex1change(marked.parse(contextTemp.data.files[filenameTemp].content));
    });
  };

  useEffect(() => {
    // 配置 highlight.js  忽略未经转义的html标签
    hljs.configure({ ignoreUnescapedHTML: true });
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll("pre code");
    // 让code进行高亮
    codes.forEach((el) => {
      hljs.highlightElement(el);
    });
  }, []);

  async function handleClick() {
    console.log("kk");
    const filenames = await filenameLoad();
    console.log(filenames);
    filenameShow(filenames);
  }

  return (
    <div>
      <div className="nav">
        <div className="nav_left">
          <button onClick={handleOpenDialog}>Open Dialog</button>
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
        <div
          id="flex_right"
          dangerouslySetInnerHTML={{ __html: context1 }}
        ></div>
      </div>
      <Edit></Edit>
    </div>
  );
}
