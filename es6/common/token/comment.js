'use strict';

var Token = require('../../common/token');

class CommentToken extends Token {
  clone(Class) {
    var content = this.getContent(),
        line = this.getLine(),
        commentToken = new Class(content, line);

    return commentToken;
  }
  
  merge(commentToken) {
    var content = this.getContent(),
        commentTokenContent = commentToken.getContent();

    content += commentTokenContent;
    
    this.setContent(content);

    return this;
  }

  getHTML() {
    var content = this.getContent(),
        innerHTML = content, ///
        html = `<span class="comment">${innerHTML}</span>`;

    return html;
  }
}

module.exports = CommentToken;
