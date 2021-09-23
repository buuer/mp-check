import fs from 'fs-extra'
import path from 'path'
import glob from 'glob'

export const collectFiles = (
  filePath: string,
  ext: '.js' | '.wmxl' | '.wss'
) => {
  return new Promise<string[]>((resolve) => {
    if (!fs.existsSync(filePath)) return resolve([])
    const stat = fs.statSync(filePath)

    if (stat.isFile() && path.extname(filePath) === ext) {
      return resolve([filePath])
    } else if (stat.isDirectory()) {
      glob(
        `${filePath}/**/*${ext}`,
        {
          nodir: true,
          ignore: ['**/node_modules/**/*'],
        },
        (err, res) => resolve(err ? [] : res)
      )
    }
  })
}

export const readContent = (filePath: string): Promise<string> => {
  return fs.promises.readFile(filePath).then((ctx) => ctx.toString())
}
