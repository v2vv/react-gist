/* eslint-disable no-unused-vars */

import { Octokit } from "@octokit/rest";
import Gistlists from "./Gistlist";
import React, { forwardRef, useState, useImperativeHandle } from "react";
import Monaco from "./monaco";
import Proptypes from "prop-types";

const token = localStorage.getItem("github_token");
const filenames = {};
// 当前编辑的gist

const octokitInit = (token) => new Octokit({ auth: token });
const gistUpdate = async ({ token, id, dsci, filename, context }) => {
  await octokitInit(token).request("PATCH /gists/{gist_id}", {
    gist_id: id,
    description: dsci,
    files: {
      [filename]: {
        content: context,
      },
    },
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};

const MonacoEdit = forwardRef(function MonacoEdit(
  { onGistTextChange, onGistEditorDidMount },
  ref
) {
  useImperativeHandle(ref, () => ({
    filenameLoad,
    getFileNames() {
      return filenames;
    },
    filenameShow,
    handleMonacoTextChange,
    gistMonacoTextSave,
  }));

  const [currGist, setCurrGist] = useState({
    id: "",
    disc: "",
    filename: "",
    context: "",
  });
  const [monacoCreat, setMonacoCreat] = useState({
    nocontext: true,
    language: "markdown",
    filename: "",
    context: "HELLO",
  });

  async function gistList({ token }) {
    // console.log(token);
    const gg = await octokitInit(token).request("GET /gists");
    return gg;
  }

  async function gistGet({ token, id }) {
    // console.log(token);
    return await octokitInit(token).request("GET /gists/{gist_id}", {
      gist_id: id,
    });
  }

  const redataFunc = async () => {
    return await gistList({ token });
  };

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

  function handleMonacoTextChange(text) {
    onGistTextChange(text);
    setCurrGist({ ...currGist, context: text });
  }

  // 内容输出触发函数
  const handleContextChange = async (id, filename) => {
    const contextTemp = await gistGet({ token, id });
    console.log(contextTemp);
    // console.log(currGist);
    Object.keys(contextTemp.data.files).forEach((filenameTemp) => {
      if (filenameTemp === filename) {
        // setMarked("json");

        setCurrGist({
          ...currGist,
          id: String(id),
          filename: String(filename),
          disc: contextTemp.data.description,
        });
        console.log(currGist);
        // currGist.id = id;
        // currGist.filename = filename;
        // currGist.disc = contextTemp.data.description
        // setCurrGist({...currGist});

        setMonacoCreat({
          nocontext: false,
          language:
            contextTemp.data.files[filenameTemp].language == null
              ? ""
              : contextTemp.data.files[filenameTemp].language.toLowerCase(),
          filename: filenameTemp,
          context: contextTemp.data.files[filenameTemp].content,
        });
      }
    });
  };

  // 显示 gists 文件名
  const filenameShow = () => {
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
    // console.log(temp);
    showFirstGist(filenames);
    return temp;
  };

  function gistMonacoTextSave() {
    // Tr();
    // console.log(curr_context);
    console.log("save");
    // console.log(currGist);
    gistUpdate({
      token,
      id: currGist.id,
      disc: "ffff",
      filename: currGist.filename,
      context: currGist.context,
    });
    console.log(currGist);
  }

  // 显示第一条 gists
  function showFirstGist(filenames) {
    // console.log(Object.keys(filenames)[0]);
    handleContextChange(
      filenames[Object.keys(filenames)[0]].id,
      Object.keys(filenames)[0]
    );
  }

  function handleEditorDidMount() {
    onGistEditorDidMount();
    console.log("didmount ok");
  }

  return (
    <div>
      <Monaco
        nocontext={monacoCreat.nocontext}
        context={monacoCreat.context}
        filename={monacoCreat.filename}
        language={monacoCreat.language}
        onValidate={handleMonacoTextChange}
        onEditorDidMount={handleEditorDidMount}
      ></Monaco>
    </div>
  );
});

MonacoEdit.propTypes = {
  onGistTextChange: Proptypes.func.isRequired,
  onGistEditorDidMount: Proptypes.func.isRequired,
};

export { gistUpdate, MonacoEdit };
