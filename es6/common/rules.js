'use strict';

var Rule = require('./rule');

class Rules {
  constructor(array) {
    this.array = array;
  }
  
  significantTokenFromContent(content, line) {
    var significantToken = null;

    this.array.some(function(rule) {
      significantToken = rule.significantTokenFromContent(content, line);

      if (significantToken !== null) {
        return true;
      } else {
        return false;
      }
    });
    
    return significantToken;
  }

  static fromGrammar(grammar) {
    var array = grammar.map(function(object) {
          var type = Object.keys(object),
              regExp = object[type],
              rule = new Rule(type, regExp);

          return rule;
        }),
        rules = new Rules(array);
    
    return rules;
  }
}

module.exports = Rules;
