'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var Example = require('../example'),
    BasicLexer = require('../basic/lexer');

var terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector);

var terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+';

var lexer = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPattern; ///

      terminalSymbolsRegExpPatternTextArea.setValue(terminalSymbolsRegExpPatternTextAreaValue);

      terminalSymbolsRegExpPatternTextArea.onChange(function () {
        update();
      });

      Example.contentTextAreaOnChange(function (contextTextAreaValue) {
        update();
      });

      update();
    }
  }]);

  return BasicExample;
}();

module.exports = BasicExample;

function update() {
  updateLexer();

  if (lexer !== null) {
    Example.updateTokens(lexer);
  } else {
    Example.clearTokens();
  }
}

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [{ terminalSymbol: terminalSymbolsRegExp }];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextArea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextArea.addClass('error');

    lexer = null;
  }
}

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  } catch (error) {
    valid = false;
  }

  return valid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJUZXh0QXJlYSIsIkV4YW1wbGUiLCJCYXNpY0xleGVyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwibGV4ZXIiLCJCYXNpY0V4YW1wbGUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJ1cGRhdGUiLCJjb250ZW50VGV4dEFyZWFPbkNoYW5nZSIsImNvbnRleHRUZXh0QXJlYVZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVwZGF0ZUxleGVyIiwidXBkYXRlVG9rZW5zIiwiY2xlYXJUb2tlbnMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSIsImdldFZhbHVlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsImdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInJlZ0V4cFBhdHRlcm4iLCJ2YWxpZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0Qjs7QUFHQSxJQUFJQyxVQUFVRixRQUFRLFlBQVIsQ0FBZDtBQUFBLElBQ0lHLGFBQWFILFFBQVEsZ0JBQVIsQ0FEakI7O0FBR0EsSUFBSUksK0NBQStDLHVDQUFuRDtBQUFBLElBQ0lDLHVDQUF1QyxJQUFJSixRQUFKLENBQWFHLDRDQUFiLENBRDNDOztBQUdBLElBQUlFLDZEQUFKOztBQUVBLElBQUlDLFFBQVEsSUFBWjs7SUFFTUMsWTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLDRDQUE0Q0gsNEJBQWhELENBRFcsQ0FDbUU7O0FBRTlFRCwyQ0FBcUNLLFFBQXJDLENBQThDRCx5Q0FBOUM7O0FBRUFKLDJDQUFxQ00sUUFBckMsQ0FBOEMsWUFBVztBQUN2REM7QUFDRCxPQUZEOztBQUlBVixjQUFRVyx1QkFBUixDQUFnQyxVQUFTQyxvQkFBVCxFQUErQjtBQUM3REY7QUFDRCxPQUZEOztBQUlBQTtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQlIsWUFBakI7O0FBRUEsU0FBU0ksTUFBVCxHQUFrQjtBQUNoQks7O0FBRUEsTUFBSVYsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCTCxZQUFRZ0IsWUFBUixDQUFxQlgsS0FBckI7QUFDRCxHQUZELE1BRU87QUFDTEwsWUFBUWlCLFdBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNGLFdBQVQsR0FBdUI7QUFDckIsTUFBSUcseUNBQXlDZixxQ0FBcUNnQixRQUFyQyxFQUE3QztBQUFBLE1BQ0lmLCtCQUErQmMsc0NBRG5DO0FBQUEsTUFDNEU7QUFDeEVFLHdDQUFzQ0MscUJBQXFCakIsNEJBQXJCLENBRjFDOztBQUlBLE1BQUlnQixtQ0FBSixFQUF5QztBQUN2QyxRQUFJRSx3QkFBd0IsSUFBSUMsTUFBSixDQUFXbkIsNEJBQVgsQ0FBNUI7QUFBQSxRQUNJb0IsVUFBVSxDQUNSLEVBQUVDLGdCQUFpQkgscUJBQW5CLEVBRFEsQ0FEZDs7QUFLQWpCLFlBQVFKLFdBQVd5QixXQUFYLENBQXVCRixPQUF2QixDQUFSOztBQUVBckIseUNBQXFDd0IsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVRELE1BU087QUFDTHhCLHlDQUFxQ3lCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBdkIsWUFBUSxJQUFSO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTZ0Isb0JBQVQsQ0FBOEJRLGFBQTlCLEVBQTZDO0FBQzNDLE1BQUlDLFFBQVEsSUFBWjs7QUFFQSxNQUFJO0FBQ0YsUUFBSVAsTUFBSixDQUFXTSxhQUFYO0FBQ0QsR0FGRCxDQUdBLE9BQU9FLEtBQVAsRUFBYztBQUNaRCxZQUFRLEtBQVI7QUFDRDs7QUFFRCxTQUFPQSxLQUFQO0FBQ0QiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYTtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgQmFzaWNMZXhlciA9IHJlcXVpcmUoJy4uL2Jhc2ljL2xleGVyJyk7XG5cbnZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSN0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuJyxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IpO1xuXG52YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgO1xuXG52YXIgbGV4ZXIgPSBudWxsO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47IC8vL1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLnNldFZhbHVlKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWFPbkNoYW5nZShmdW5jdGlvbihjb250ZXh0VGV4dEFyZWFWYWx1ZSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVMZXhlcigpO1xuXG4gIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgIEV4YW1wbGUudXBkYXRlVG9rZW5zKGxleGVyKTtcbiAgfSBlbHNlIHtcbiAgICBFeGFtcGxlLmNsZWFyVG9rZW5zKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGV4ZXIoKSB7XG4gIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlLCAgLy8vXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCA9IHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pO1xuXG4gIGlmICh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCkge1xuICAgIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgPSBuZXcgUmVnRXhwKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pLFxuICAgICAgICBncmFtbWFyID0gW1xuICAgICAgICAgIHsgdGVybWluYWxTeW1ib2wgOiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgfVxuICAgICAgICBdO1xuXG4gICAgbGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIGxleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdFeHBQYXR0ZXJuSXNWYWxpZChyZWdFeHBQYXR0ZXJuKSB7XG4gIHZhciB2YWxpZCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBuZXcgUmVnRXhwKHJlZ0V4cFBhdHRlcm4pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXX0=