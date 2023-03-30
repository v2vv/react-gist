import { Octokit } from "@octokit/rest";
import fs from 'fs'

const token_git = process.env.TOKEN_GITHUB;
fs.writeFile('token',token_git,(err)=>
{
  if(err) throw err;
  console.log('save')
  
});
console.log(token_git);

const octokit = new Octokit({
  auth: token_git,
});

const redata = await octokit.request("GET /gists", {
  headers: { "X-GitHub-Api-Version": "2022-11-28" },
});

console.log(redata.data.forEach)

