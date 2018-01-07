'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      WhitespaceTokens = require('./tokens/whitespace'),
      StringLiteralTokens = require('./tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression');

class CustomGrammarLexicalPatternLine extends CommonLine {
  static fromContent(content, context, rules) { return super.fromContent(CustomGrammarLexicalPatternLine, content, context, rules, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens); }
}

module.exports = CustomGrammarLexicalPatternLine;