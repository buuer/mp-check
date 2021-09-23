import { collectFiles, readContent } from './file'
import { traverseJsContent } from './traverse'
import { unSupport } from './config/finClip'
import { reduceArr } from './utils'

const unSupportMap = reduceArr(unSupport, true)

export const checkApi = async (filePath: string) => {
  const files = await collectFiles(filePath, '.js')

  const promArr = files.map(async (file) => {
    const ctx = await readContent(file)
    traverseJsContent(ctx, (node) => {
      if (unSupportMap[node.name]) {
        const { start } = node.loc || {}
        console.log(`wx.${node.name} 暂不支持`)
        if (start) {
          console.log(`${file}:${start.line}:${start.column}`)
        }
      }
    })
  })

  return Promise.all(promArr)
}
