'use strict';

const CommonLine = require('../common/line'),
      CommentTokens = require('./tokens/comment'),
      StringTokens = require('../common/tokens/string'),
      WhitespaceTokens = require('../common/tokens/whitespace');

class Line extends CommonLine {
  static fromContent(content, context, rules) { 
    const line = super.fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);

    return line;
  }
}

module.exports = Line;