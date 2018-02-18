'use strict';

const SignificantTokens = require('./tokens/significant');

class CommonLine {
  constructor(content, rules, configuration, tokens, inComment, replacementTokenMap) {
    this.content = content;
    this.rules = rules;
    this.configuration = configuration;
    this.tokens = tokens;
    this.inComment = inComment;
    this.replacementTokenMap = replacementTokenMap;
  }

  getContent() {
    return this.content;
  }

  getRules() {
    return this.rules;
  }

  getConfiguration() {
    return this.configuration;
  }

  getTokens(withReplacementTokens = false) {
    let tokens = this.tokens;

    if (withReplacementTokens) {
      tokens = tokens.reduce(function(tokens, token, index) {
        const replacementToken = this.replacementTokenMap[index];

        token = replacementToken || token;  ///

        tokens.push(token);

        return tokens;
      }.bind(this), []);
    }

    return tokens;
  }

  isInComment() {
    return this.inComment;
  }

  getReplacementToken(replacementTokenIndex) {
    const replacementToken = this.replacementTokenMap[replacementTokenIndex] || null;

    return replacementToken
  }

  getReplacementTokenIndexes() {
    const replacementTokenIndexes = Object.keys(this.replacementTokenMap);

    return replacementTokenIndexes;
  }

  getFirstTokenIndex(firstToken = null) {
    const withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          firstIndex = 0,
          firstTokenIndex = (firstToken === null) ?
                              firstIndex :
                                tokens.indexOf(firstToken);

    return firstTokenIndex;
  }

  getLastTokenIndex(lastToken = null) {
    const withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          tokensLength = tokens.length,
          lastIndex = tokensLength - 1,
          lastTokenIndex = (lastToken === null) ?
                              lastIndex :
                                tokens.indexOf(lastToken);

    return lastTokenIndex;
  }

  asHTML(filePath, withReplacementTokens) {
    let html;

    const tokens = this.getTokens(withReplacementTokens);

    html = tokens.reduce(function(html, token) {
      const tokenHTML = token.asHTML(filePath);

      html += tokenHTML;

      return html;
    }, '');
    
    html += '\n'; ///
    
    return html;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  replaceToken(replacedToken, replacementToken) {
    const withReplacementTokens = false,
          tokens = this.getTokens(withReplacementTokens),
          replacedTokenIndex = tokens.indexOf(replacedToken),
          replacementTokenIndex = replacedTokenIndex;  ///

    this.replacementTokenMap[replacementTokenIndex] = replacementToken;
  }

  spliceToken(oldToken, newToken, newReplacementToken) {
    const oldTokenIndex = this.tokens.indexOf(oldToken),
          oldReplacementTokenIndex = oldTokenIndex, ///
          start = oldTokenIndex,  ///
          deleteCount = 1;  ///

    this.tokens.splice(start, deleteCount, newToken);

    delete this.replacementTokenMap[oldReplacementTokenIndex];
    
    if (newReplacementToken) {
      const newReplacementTokenIndex = oldTokenIndex; ///

      this.replacementTokenMap[newReplacementTokenIndex] = newReplacementToken;
    }
  }

  removeReplacementTokens(firstToken, lastToken) {
    const replacementTokenIndexes = this.getReplacementTokenIndexes(),
          firstTokenIndex = this.getFirstTokenIndex(firstToken),
          lastTokenIndex = this.getLastTokenIndex(lastToken);

    replacementTokenIndexes.forEach(function(replacementTokenIndex) {
      if ((replacementTokenIndex >= firstTokenIndex) && (replacementTokenIndex <= lastTokenIndex)) {
        delete this.replacementTokenMap[replacementTokenIndex];
      }
    }.bind(this));
  }

  initialise(CommentTokens, RegularExpressionTokens, StringLiteralTokens, WhitespaceTokens) {
    const line = this,  ///
          tokensOrContents = [this.content],
          inComment = CommentTokens.pass(tokensOrContents, line, this.configuration);

    RegularExpressionTokens.pass(tokensOrContents, line);

    StringLiteralTokens.pass(tokensOrContents, line);

    WhitespaceTokens.pass(tokensOrContents, line);

    const tokens = SignificantTokens.pass(tokensOrContents, line, this.rules);

    this.tokens = tokens;

    this.inComment = inComment;
  }

  static fromContentRulesAndConfiguration(Line, content, rules, configuration) {
    const tokens = undefined, ///
          inComment = undefined, //
          replacementTokenMap = {},
          line = new Line(content, rules, configuration, tokens, inComment, replacementTokenMap);

    return line;
  }
}

module.exports = CommonLine;
