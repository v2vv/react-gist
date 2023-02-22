import React, { useState, useEffect } from 'react';
import './style.css';
import { Octokit } from '@octokit/rest';

export default function App() {
  useEffect(() => {

  });

  const [ vaule, ChangeVaule]  = useState("jj\r\nhh");

  function handleClick(){
    
    console.log('kk');
    const octokit = new Octokit({
      auth: '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',
    });
    octokit.gists.list().then(({ data }) => {
      // console.log(data);a
      ChangeVaule(JSON.stringify(data,null,"\t"));
    });
  }

  return (
    <div>
      <h1>Hello StackBlitz! </h1>
      <button onClick={handleClick}>
      You pressed me times
    </button>
      <p>Start editing to see some magic happen :)</p>
      <p>{vaule2}</p>
      <p>{vaule}</p>
    </div>
    
  );
}
