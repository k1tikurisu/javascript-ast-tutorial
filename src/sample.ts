import { transform, types as t } from '@babel/core'
import type { NodePath } from '@babel/core'

const src = '1 + 2'

const plugin = () => ({
  visitor: {
    BinaryExpression: (nodePath: NodePath<t.BinaryExpression>) => {
      if (nodePath.node.operator !== '*') {
        const newAst = t.binaryExpression(
          '*',
          nodePath.node.left,
          nodePath.node.right
        )
        nodePath.replaceWith(newAst)
      }
    }
  }
})

const result = transform(src, { plugins: [plugin] })
console.log(result?.code) // --> 1 * 2;
