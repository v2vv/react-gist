import { Octokit } from "@octokit/rest";

const token_git = process.env.TOKEN_GITHUB;
//console.log(token_git);

const octokit = new Octokit({
  auth: token_git,
});

const redata = await octokit.request("GET /gists", {
  headers: { "X-GitHub-Api-Version": "2022-11-28" },
});



async function displayGistData() {
    redata.data.forEach(async (dataq) => {
        Object.keys(dataq.files).forEach(async (file) => {
          console.log(dataq.files[file].filename);
          console.log(dataq.id)
          const response = await octokit.request("GET /gists/{gist_id}", {
            gist_id: dataq.id,
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          });
          console.log(response.data);
        })
      });


  }
displayGistData();
