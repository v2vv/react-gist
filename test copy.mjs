import { Octokit } from "@octokit/rest";

const token_git = process.env.TOKEN_GITHUB;
//console.log(token_git);

const octokit = new Octokit({
  auth: token_git,
});

const redata = await octokit.request('GET /gists', { headers: { 'X-GitHub-Api-Version': '2022-11-28' } });

redata.data.forEach((data)=>{
Object.keys(data.files).forEach((file)=>{console.log(data.files[file].filename)})
})