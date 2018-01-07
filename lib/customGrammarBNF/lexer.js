'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFLexer = require('../bnf/lexer');

var CustomGrammarBNFLexer = function (_BNFLexer) {
  _inherits(CustomGrammarBNFLexer, _BNFLexer);

  function CustomGrammarBNFLexer() {
    _classCallCheck(this, CustomGrammarBNFLexer);

    return _possibleConstructorReturn(this, (CustomGrammarBNFLexer.__proto__ || Object.getPrototypeOf(CustomGrammarBNFLexer)).apply(this, arguments));
  }

  _createClass(CustomGrammarBNFLexer, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var bnfLexer = BNFLexer.fromNothing(),
          rules = bnfLexer.getRules(),
          Line = bnfLexer.getLine(),
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules, Line);

      return customGrammarBNFLexer;
    }
  }]);

  return CustomGrammarBNFLexer;
}(BNFLexer);

module.exports = CustomGrammarBNFLexer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwicmVxdWlyZSIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsImdldFJ1bGVzIiwiTGluZSIsImdldExpbmUiLCJjdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsY0FBUixDQUFqQjs7SUFFTUMscUI7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxXQUFXSCxTQUFTSSxXQUFULEVBQWpCO0FBQUEsVUFDTUMsUUFBUUYsU0FBU0csUUFBVCxFQURkO0FBQUEsVUFFTUMsT0FBT0osU0FBU0ssT0FBVCxFQUZiO0FBQUEsVUFHTUMsd0JBQXdCLElBQUlQLHFCQUFKLENBQTBCRyxLQUExQixFQUFpQ0UsSUFBakMsQ0FIOUI7O0FBS0EsYUFBT0UscUJBQVA7QUFDRDs7OztFQVJpQ1QsUTs7QUFXcENVLE9BQU9DLE9BQVAsR0FBaUJULHFCQUFqQiIsImZpbGUiOiJsZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IEJORkxleGVyID0gcmVxdWlyZSgnLi4vYm5mL2xleGVyJyk7XHJcblxyXG5jbGFzcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgZXh0ZW5kcyBCTkZMZXhlciB7XHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxyXG4gICAgICAgICAgcnVsZXMgPSBibmZMZXhlci5nZXRSdWxlcygpLFxyXG4gICAgICAgICAgTGluZSA9IGJuZkxleGVyLmdldExpbmUoKSxcclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZMZXhlciA9IG5ldyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcclxuIl19