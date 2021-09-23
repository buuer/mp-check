import * as parser from '@babel/parser'
import traverse, { NodePath } from '@babel/traverse'
import * as babelTypes from '@babel/types'

type traversePath = NodePath<babelTypes.Node>

const isWechatApi = (
  path: traversePath
): path is NodePath<babelTypes.MemberExpression> => {
  return (
    babelTypes.isMemberExpression(path.node) &&
    babelTypes.isIdentifier((path.node as babelTypes.MemberExpression).object, {
      name: 'wx',
    })
  )
}

export const traverseJsContent = (
  content: string,
  fnCall: (path: babelTypes.Identifier) => void
) => {
  const ast = parser.parse(content, {
    sourceType: 'module',
  })

  traverse(ast, {
    enter(path) {
      if (!isWechatApi(path)) return
      fnCall(path.node.property as babelTypes.Identifier)
    },
  })
}
