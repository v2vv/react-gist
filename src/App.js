import React, { useState, useEffect } from 'react';
import './style.css';
import { Octokit } from '@octokit/rest';
import { marked } from 'marked';

export default function App() {
  useEffect(() => {

  });

  const [vaule, ChangeVaule] = useState("jj");

  function handleClick() {

    console.log('kk');
    const octokit = new Octokit({
      auth: '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',
    });

    const filenames = [];

    octokit.gists.list().then(({ data }) => {
      // console.log(data);a
      data.forEach((dat) => {
        const files = dat.files
        Object.keys(files).forEach((filename) => {
          filenames.push(filename);
        })

      })
      const html = marked.parse(JSON.stringify(filenames, null, "\r\n"));
      ChangeVaule(html);
    });
  }

  return (
    <div>
      <h1>Hello StackBlitz! </h1>
      <button onClick={handleClick}>
        You pressed me times
      </button>
      <p>Start editing to see some magic happen :)</p>
      <div dangerouslySetInnerHTML={{ __html: vaule }} />
    </div>

  );
}
