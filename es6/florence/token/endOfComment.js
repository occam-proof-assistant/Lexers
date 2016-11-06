'use strict';

var CommentToken = require('../../common/token/comment');

class EndOfCommentToken extends CommentToken {
  clone() { return super.clone(EndOfCommentToken); }

  static position(content) {
    var position = content.search(/\*\//);

    return position;
  }

  static fromContent(content, line) {
    var endOfCommentToken = null,
        matches = content.match(/^\*\//);

    if (matches) {
      var firstMatch = first(matches);

      content = firstMatch; ///

      endOfCommentToken = new EndOfCommentToken(content, line);
    }

    return endOfCommentToken;
  }
}

module.exports = EndOfCommentToken;

function first(array) { return array[0]; }
