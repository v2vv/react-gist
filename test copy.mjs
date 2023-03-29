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
  for (const dataq of redata.data) {
    const files = Object.keys(dataq.files);
    const responses = await Promise.all(
      files.map((file) =>
        octokit.request("GET /gists/{gist_id}", {
          gist_id: dataq.id,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })
      )
    );
    for (const response of responses) {
      console.log(response.data);
    }
  }
}

displayGistData();
