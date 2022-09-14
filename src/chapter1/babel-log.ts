import { parse } from 'babylon'
import log from 'babel-log'

const ast = parse('1 + 2 * (3 + 4)')
console.log('Node型')

log(ast)

/**
 * 結果
 * Node "File" (1:0, 1:15)
  comments: Array []
  program: Node "Program" (1:0, 1:15)
    body: Array [
      Node "ExpressionStatement" (1:0, 1:15)
        expression: Node "BinaryExpression" (1:0, 1:15)
          left: Node "NumericLiteral" (1:0, 1:1)
            extra: Object {
              "raw": "1",
              "rawValue": 1,
            }
            value: 1
          operator: "+"
          right: Node "BinaryExpression" (1:4, 1:15)
            left: Node "NumericLiteral" (1:4, 1:5)
              extra: Object {
                "raw": "2",
                "rawValue": 2,
              }
              value: 2
            operator: "*"
            right: Node "BinaryExpression" (1:9, 1:14)
              extra: Object {
                "parenStart": 8,
                "parenthesized": true,
              }
              left: Node "NumericLiteral" (1:9, 1:10)
                extra: Object {
                  "raw": "3",
                  "rawValue": 3,
                }
                value: 3
              operator: "+"
              right: Node "NumericLiteral" (1:13, 1:14)
                extra: Object {
                  "raw": "4",
                  "rawValue": 4,
                }
                value: 4,
    ]
    directives: Array []
    sourceType: "script"
  tokens: Array [
    Token {
      "end": 1,
      "loc": SourceLocation {
        "end": Position {
          "column": 1,
          "line": 1,
        },
        "start": Position {
          "column": 0,
          "line": 1,
        },
      },
      "start": 0,
      "type": TokenType {
        "beforeExpr": false,
        "binop": null,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "num",
        "postfix": false,
        "prefix": false,
        "rightAssociative": false,
        "startsExpr": true,
        "updateContext": null,
      },
      "value": 1,
    },
    Token {
      "end": 3,
      "loc": SourceLocation {
        "end": Position {
          "column": 3,
          "line": 1,
        },
        "start": Position {
          "column": 2,
          "line": 1,
        },
      },
      "start": 2,
      "type": TokenType {
        "beforeExpr": true,
        "binop": 9,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "+/-",
        "postfix": false,
        "prefix": true,
        "rightAssociative": false,
        "startsExpr": true,
        "updateContext": null,
      },
      "value": "+",
    },
    Token {
      "end": 5,
      "loc": SourceLocation {
        "end": Position {
          "column": 5,
          "line": 1,
        },
        "start": Position {
          "column": 4,
          "line": 1,
        },
      },
      "start": 4,
      "type": TokenType {
        "beforeExpr": false,
        "binop": null,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "num",
        "postfix": false,
        "prefix": false,
        "rightAssociative": false,
        "startsExpr": true,
        "updateContext": null,
      },
      "value": 2,
    },
    Token {
      "end": 7,
      "loc": SourceLocation {
        "end": Position {
          "column": 7,
          "line": 1,
        },
        "start": Position {
          "column": 6,
          "line": 1,
        },
      },
      "start": 6,
      "type": BinopTokenType {
        "beforeExpr": true,
        "binop": 10,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "*",
        "postfix": false,
        "prefix": false,
        "rightAssociative": false,
        "startsExpr": false,
        "updateContext": null,
      },
      "value": "*",
    },
    Token {
      "end": 9,
      "loc": SourceLocation {
        "end": Position {
          "column": 9,
          "line": 1,
        },
        "start": Position {
          "column": 8,
          "line": 1,
        },
      },
      "start": 8,
      "type": TokenType {
        "beforeExpr": true,
        "binop": null,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "(",
        "postfix": false,
        "prefix": false,
        "rightAssociative": false,
        "startsExpr": true,
        "updateContext": [Function anonymous],
      },
      "value": undefined,
    },
    Token {
      "end": 10,
      "loc": SourceLocation {
        "end": Position {
          "column": 10,
          "line": 1,
        },
        "start": Position {
          "column": 9,
          "line": 1,
        },
      },
      "start": 9,
      "type": TokenType {
        "beforeExpr": false,
        "binop": null,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "num",
        "postfix": false,
        "prefix": false,
        "rightAssociative": false,
        "startsExpr": true,
        "updateContext": null,
      },
      "value": 3,
    },
    Token {
      "end": 12,
      "loc": SourceLocation {
        "end": Position {
          "column": 12,
          "line": 1,
        },
        "start": Position {
          "column": 11,
          "line": 1,
        },
      },
      "start": 11,
      "type": TokenType {
        "beforeExpr": true,
        "binop": 9,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "+/-",
        "postfix": false,
        "prefix": true,
        "rightAssociative": false,
        "startsExpr": true,
        "updateContext": null,
      },
      "value": "+",
    },
    Token {
      "end": 14,
      "loc": SourceLocation {
        "end": Position {
          "column": 14,
          "line": 1,
        },
        "start": Position {
          "column": 13,
          "line": 1,
        },
      },
      "start": 13,
      "type": TokenType {
        "beforeExpr": false,
        "binop": null,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "num",
        "postfix": false,
        "prefix": false,
        "rightAssociative": false,
        "startsExpr": true,
        "updateContext": null,
      },
      "value": 4,
    },
    Token {
      "end": 15,
      "loc": SourceLocation {
        "end": Position {
          "column": 15,
          "line": 1,
        },
        "start": Position {
          "column": 14,
          "line": 1,
        },
      },
      "start": 14,
      "type": TokenType {
        "beforeExpr": false,
        "binop": null,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": ")",
        "postfix": false,
        "prefix": false,
        "rightAssociative": false,
        "startsExpr": false,
        "updateContext": [Function anonymous],
      },
      "value": undefined,
    },
    Token {
      "end": 15,
      "loc": SourceLocation {
        "end": Position {
          "column": 15,
          "line": 1,
        },
        "start": Position {
          "column": 15,
          "line": 1,
        },
      },
      "start": 15,
      "type": TokenType {
        "beforeExpr": false,
        "binop": null,
        "isAssign": false,
        "isLoop": false,
        "keyword": undefined,
        "label": "eof",
        "postfix": false,
        "prefix": false,
        "rightAssociative": false,
        "startsExpr": false,
        "updateContext": null,
      },
      "value": undefined,
    },
  ]
 */
