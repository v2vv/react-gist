/* eslint-disable no-unused-vars */

import { Octokit } from "@octokit/rest";

const octokitInit = (token) => new Octokit({ auth: token });
const gistUpdate = async ({ token, id, dsci, filename, context }) => {
  await octokitInit(token).request("PATCH /gists/{gist_id}", {
    gist_id: id,
    description: dsci,
    files: {
      [filename]: {
        content: context,
      },
    },
  });
};

async function gistList({ token }) {
  // console.log(token);
  const gg = await octokitInit(token).request("GET /gists");
  return gg;
}

async function gistGet({ token, id }) {
  // console.log(token);
  return await octokitInit(token).request("GET /gists/{gist_id}", {
    gist_id: id,
  });
}

export { gistUpdate, gistList, gistGet };
