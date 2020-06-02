"use strict";

import { BNFLexer } from "../../index"; ///

import View from "../view";

export default class BNFView extends View {
  Lexer = BNFLexer;

  heading = "BNF lexer example";

  initialContent = `  
  
    ruleName             ::=  [name] ;
  
    regularExpression    ::=  [regularExpression] ;
  
    significantTokenType ::=  [type] ;
  
    terminalSymbol       ::=  [stringLiteral] ;
  
    endOfLine            ::=  "<END_OF_LINE>" ;
  
    epsilon              ::=  "ε" ;
  
    wildcard             ::=  "." ;
    
  `;

  static defaultProperties = {
    className: "bnf"
  };
}
