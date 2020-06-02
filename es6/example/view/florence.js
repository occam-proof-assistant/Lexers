"use strict";

import { FlorenceLexer } from "../../index";  ///

import View from "../view";

import { lexicalPattern } from "../../florence/defaultCustomGrammar";

export default class FlorenceView extends View {
  Lexer = FlorenceLexer;

  heading = "Florence lexer example";

  initialContent = `
  
Rule (Explosion)
  Conclusion
    A
    
  `;

  getTokens() {
    let entries = this.getEntries();

    const custom = `^(?:${lexicalPattern})`;

    entries = [ { "custom": custom }, ...entries ];

    const content = this.getContent(),
          lexer = this.Lexer.fromEntries(entries),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  static defaultProperties = {
    className: "florence"
  };
}
