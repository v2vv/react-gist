import React, { useEffect } from 'react';
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

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
