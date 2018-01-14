'use strict';

const tokenUtilities = require('../../utilities/token');

const { sanitiseContent } = tokenUtilities;

class SignificantToken {
  constructor(content, line, type, innerHTML) {
    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;
  }
  
  isSignificant() {
    const significant = true;
    
    return significant;
  }
  
  getContent() {
    return this.content;
  }
  
  getLine() {
    return this.line;
  }

  getType() {
    return this.type;
  }

  getInnerHTML() {
    return this.innerHTML;
  }

  asHTML(filePath) {
    const className = this.type,  ///
          html = `<span class="${className}">${this.innerHTML}</span>`;

    return html;
  }

  getLength() {
    return this.content.length; ///
  }

  clone(startPosition, endPosition) { return SignificantToken.clone(SignificantToken, this, startPosition, endPosition) }

  static clone(Class = SignificantToken, significantToken, startPosition = 0, endPosition = significantToken.getLength()) {
    let clonedSignificantToken = null;

    if (startPosition !== endPosition) {
      let content = significantToken.getContent();

      const line = significantToken.getLine(),
            type = significantToken.getType();

      content = content.substring(startPosition, endPosition);  ///

      clonedSignificantToken = Class.fromContentLineAndType(content, line, type);
    }

    return clonedSignificantToken;
  }

  static fromContentLineAndType(Class, content, line, type, ...remainingArguments) {
    if (type === undefined) {
      type = line;
      line = content;
      content = Class;
      Class = SignificantToken;
    }

    const sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent, ///
          significantToken = new Class(content, line, type, innerHTML, ...remainingArguments);

    return significantToken;
  }
}

module.exports = SignificantToken;
