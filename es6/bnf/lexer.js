'use strict';

const entries = require('./entries'),
      CommonLexer = require('../common/lexer'),
      specialSymbols = require('./specialSymbols');

class BNFLexer extends CommonLexer {
  processCommentTokens(tokensOrContents, inComment) { return inComment; }

  postProcessMiddleOfCommentTokens(tokensOrContents) {}

  significantTokensFromBNF(bnf) {
    const content = bnf,  ///
          tokens = super.tokensFromContent(content),
          significantTokens = significantTokensFromTokens(tokens);

    return significantTokens;
  }

  static fromNothing() { return CommonLexer.fromNothing(BNFLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BNFLexer, entries); }
}

Object.assign(BNFLexer, {
  entries,
  specialSymbols
});

module.exports = BNFLexer;

function significantTokensFromTokens(tokens) {
  const significantTokens = tokens.reduce(function(significantTokens, token) {
    const tokenSignificant = token.isSignificant();

    if (tokenSignificant) {
      const significantToken = token; ///

      significantTokens.push(significantToken);
    }

    return significantTokens;
  }, []);

  return significantTokens;
}
