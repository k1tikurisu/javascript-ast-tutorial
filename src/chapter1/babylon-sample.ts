import { parse } from 'babylon'

const ast = parse('1 + 2 * (3 + 4)')
console.log(ast)

/**
 * 結果
 * Node {
  type: 'File',
  start: 0,
  end: 15,
  loc: SourceLocation {
    start: Position { line: 1, column: 0 },
    end: Position { line: 1, column: 15 }
  },
  program: Node {
    type: 'Program',
    start: 0,
    end: 15,
    loc: SourceLocation { start: [Position], end: [Position] },
    sourceType: 'script',
    body: [ [Node] ],
    directives: []
  },
  comments: [],
  tokens: [
    Token {
      type: [TokenType],
      value: 1,
      start: 0,
      end: 1,
      loc: [SourceLocation]
    },
    Token {
      type: [TokenType],
      value: '+',
      start: 2,
      end: 3,
      loc: [SourceLocation]
    },
    Token {
      type: [TokenType],
      value: 2,
      start: 4,
      end: 5,
      loc: [SourceLocation]
    },
    Token {
      type: [BinopTokenType],
      value: '*',
      start: 6,
      end: 7,
      loc: [SourceLocation]
    },
    Token {
      type: [TokenType],
      value: undefined,
      start: 8,
      end: 9,
      loc: [SourceLocation]
    },
    Token {
      type: [TokenType],
      value: 3,
      start: 9,
      end: 10,
      loc: [SourceLocation]
    },
    Token {
      type: [TokenType],
      value: '+',
      start: 11,
      end: 12,
      loc: [SourceLocation]
    },
    Token {
      type: [TokenType],
      value: 4,
      start: 13,
      end: 14,
      loc: [SourceLocation]
    },
    Token {
      type: [TokenType],
      value: undefined,
      start: 14,
      end: 15,
      loc: [SourceLocation]
    },
    Token {
      type: [TokenType],
      value: undefined,
      start: 15,
      end: 15,
      loc: [SourceLocation]
    }
  ]
}
 * 
 */
