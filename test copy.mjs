import { Octokit } from '@octokit/rest'
import { promises as fsPromises } from 'fs'

const tokenGit = process.env.TOKEN_GITHUB

const octokit = new Octokit({
  auth: tokenGit
})

async function displayGistData () {
  // 有 gist 数据 获取所
  const { data } = await octokit.request('GET /gists', {
    headers: { 'X-GitHub-Api-Version': '2022-11-28' }
  })
  console.log(data)
  // 并发请求每个 gist 的完整数据
  const responses = await Promise.all(
    data.map((dataq) =>
      octokit.request('GET /gists/{gist_id}', {
        gist_id: dataq.id,
        headers: { 'X-GitHub-Api-Version': '2022-11-28' }
      })
    )
  )

  // 遍历每个 gist 的文件，并写入到磁盘中
  for (const response of responses) {
    const files = response.data.files
    for (const filename in files) {
      if (Object.hasOwnProperty.call(files, filename)) {
        const dir = './gists'
        const content = files[filename].content
        const path = `${dir}/${filename}`
        // 确保目录存在，如果不存在则创建它
        await fsPromises.mkdir(dir, { recursive: true })
        // 将文件内容写入指定路径
        await fsPromises.writeFile(path, content)
        console.log(`${path} 写入完成`)
      }
    }
  }
}

displayGistData()
