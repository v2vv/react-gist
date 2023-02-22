import React, { useState, useEffect } from 'react';
import './style.css';
import { Octokit } from '@octokit/rest';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function App() {
  useEffect(() => {

  });

  const [vaule, ChangeVaule] = useState("<p>jj</p");

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
      // const html = marked.parse());
      ChangeVaule("```json\n"+JSON.stringify(filenames, null, "\n")+"\n```");
    });
  }

  return (
    <div>
      <h1>Hello StackBlitz! </h1>
      <button onClick={handleClick}>
        You pressed me times
      </button>
      <p>Start editing to see some magic happen :)</p>
      <ReactMarkdown
        children={vaule}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>

  );
}
