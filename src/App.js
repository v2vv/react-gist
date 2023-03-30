import { Octokit } from "@octokit/rest";
import React, { useEffect, useState } from "react";
import "./style.css";
import hljs from "highlight.js";
import "highlight.js/styles/obsidian.css";
import { marked } from "marked";

const token_git = process.env.TOKEN_GITHUB;
const sting1 = `
echo hello
`;

export default function App() {
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

  async function handleClick() {
    console.log("kk");
    const octokit = new Octokit({
      auth: token_git,
    });

    const redata = await octokit.request("GET /gists");

    console.log(redata);
    const filenames = [];
    redata.data.forEach((dat) => {
      const files = dat.files;
      Object.keys(files).forEach((filename) => {
        filenames.push(filename);
      });
    });

    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "json";
        return hljs.highlight(code, { language }).value;
      },
    });

    const html1 = marked.parse(
      " # gg \n```json\n" + JSON.stringify(filenames, null, "\n\t") + "\n```"
    );

    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "bash";
        return hljs.highlight(code, { language }).value;
      },
    });

    const html2 = marked.parse("\n```bash\n" + sting1 + "\n```");

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
      <h1>Hello StackBlitz! </h1>
      <button onClick={handleClick}>You pressed me times</button>
      <p>Start editing to see some magic happen :)</p>
      <div dangerouslySetInnerHTML={{ __html: vaule }}></div>
    </div>
  );
}
