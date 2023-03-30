import { Octokit } from "@octokit/rest";
import React, { useEffect, useState } from "react";
import "./style.css";
import hljs from "highlight.js";
import "highlight.js/styles/obsidian.css";
import { marked } from "marked";
import InputDialog from "./page";
import VConsole from "vconsole";
const vConsole = new VConsole(); // 或者使用配置参数来初始化，详情见文档 const vConsole = new VConsole({ theme: 'dark' }); // 接下来即可照常使用 `console` 等方法 console.log('Hello world');
if (!localStorage.getItem("github_token"))
  localStorage.setItem("github_token", "vaule");
const sting1 = `
echo hello
`;

const request = " ";

export default function App() {
  //github token
  const token_git = localStorage.getItem("github_token");
  var redata = null;
  const octokit = new Octokit({
    auth: token_git,
  });

  const [dialogVisible, setDialogVisible] = useState(false);

  const handleOpenDialog = () => {
    setDialogVisible(true);
  };
const handleContextChange = async (key) => {
  try {
    await Promise.all(
      redata.data.map(async (dataq) => {
        console.log("data");
        if (Object.keys(dataq.files)[0] === key) {
          console.log(dataq.id);
          const contextTemp = await octokit.request("GET /gists/{gist_id}", {
            gist_id: dataq.id,
          });
          console.log(contextTemp.data);
         contex1change(contextTemp.data.git_pull_url);
        }
      })
    );
  } catch (error) {
    console.error(error);
  }
};


      


        
        //contex1change(contextTemp);
      



  useEffect(() => {
    // 配置 highlight.js
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
    });
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll("pre code");
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el);
    });
  }, []);

  const [vaule, ChangeVaule] = useState("<p>jj</p");
  const [html3, html3change] = useState("qqq");
  const [context1, contex1change] = useState("eee");

  async function handleClick() {
    console.log("kk");

    //获取所有gists信息
    redata = await octokit.request("GET /gists");
    console.log(redata);
    //遍历 gists data
    const filenames = [];
    redata.data.forEach((dat) => {
      const files = dat.files;
      Object.keys(files).forEach((filename) => {
        filenames.push(filename);
      });
    });

    //设置 hightlightjs json
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "json";
        return hljs.highlight(code, { language }).value;
      },
    });
    //将 gists 信息输出到 markdown 格式字符串
    const html1 = marked.parse(
      " # gg \n```json\n" + JSON.stringify(filenames, null, "\n\t") + "\n```"
    );

    //设置 hightlightjs bash
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "bash";
        return hljs.highlight(code, { language }).value;
      },
    });

    const html2 = marked.parse("\n```bash\n" + sting1 + "\n```");

    html3change(
      <ul>
        {filenames.map((item) => (
          <li
            key={item}
            onClick={() => {
              handleContextChange(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
    console.log(html3);

    const html = html1 + html2;
    // const html = marked.parse(
    //   " # gg \n```json\n" + JSON.stringify(filenames, null, "\n") + "\n```"
    // );

    // const Hhtml = hljs.highlightAuto(
    //   JSON.stringify(filenames, null, "\n")
    // ).value;
    console.log(html);
    ChangeVaule(html);
  }

  return (
    <div>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      {dialogVisible && <InputDialog />}

      <h1>Hello StackBlitz! </h1>
      <button onClick={handleClick}>You pressed me times</button>
      <p>Start editing to see some magic happen :)</p>
      <div dangerouslySetInnerHTML={{ __html: vaule }}></div>
      <div>{html3}</div>
      <div>
        <p>{context1}</p>
      </div>
    </div>
  );
}
