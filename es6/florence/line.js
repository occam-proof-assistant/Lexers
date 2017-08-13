'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('../common/tokens/comment'),
      WhitespaceTokens = require('../common/tokens/whitespace'),
      StringLiteralTokens = require('../common/tokens/stringLiteral'),
      RegularExpressionTokens = require('./tokens/regularExpression'),
      EndOfLineToken = require('../common/token/significant/endOfLine');

class FlorenceLine extends CommonLine {
  static fromContent(content, rules, configuration) {
    const line = super.fromContent(FlorenceLine, content, rules, configuration, CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens),
          endOfLineToken = EndOfLineToken.fromLine(line);

    line.pushToken(endOfLineToken);

    return line;
  }
}

module.exports = FlorenceLine;
