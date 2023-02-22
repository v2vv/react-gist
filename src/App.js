import React, { useState, useEffect } from 'react';
import './style.css';
import { Octokit } from '@octokit/rest';

export default function App() {
  useEffect(() => {
    console.log('kk');
    const octokit = new Octokit({
      auth: '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',
    });
    octokit.gists.list().then(({ data }) => {
      console.log(data);
    });
  });
  const { vaule, ChangeVaule } = useState();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
