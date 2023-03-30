import { Octokit } from "@octokit/rest";
import { promises as fsPromises } from "fs";

const tokenGit = process.env.TOKEN_GITHUB;

const octokit = new Octokit({
  auth: tokenGit,
});

async function displayGistData() {
  const { data } = await octokit.request("GET /gists", {
    headers: { "X-GitHub-Api-Version": "2022-11-28" },
  });

  const responses = await Promise.all(
    data.map((dataq) =>
      octokit.request("GET /gists/{gist_id}", {
        gist_id: dataq.id,
        headers: { "X-GitHub-Api-Version": "2022-11-28" },
      })
    )
  );

  for (const response of responses) {
    const files = response.data.files;
    for (const filename in files) {
      if (Object.hasOwnProperty.call(files, filename)) {
        const dir = "./gists";
        const content = files[filename].content;
        const path = `${dir}/${filename}`;
        await fsPromises.mkdir(dir, { recursive: true });
        await fsPromises.writeFile(path, content);
        console.log(`${path} written to file`);
      }
    }
  }
}

displayGistData();
