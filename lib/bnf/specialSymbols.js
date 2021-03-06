"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.questionMark = exports.openBracket = exports.END_OF_LINE = exports.wildcard = exports.default = exports.plus = exports.separator = exports.epsilon = exports.exclamationMark = exports.closeBracket = exports.asterisk = exports.verticalBar = exports.terminator = exports.NO_WHITESPACE = void 0;
var plus = "+";
exports.plus = plus;
var epsilon = "\u{3b5}";
exports.epsilon = epsilon;
var wildcard = ".";
exports.wildcard = wildcard;
var asterisk = "*";
exports.asterisk = asterisk;
var separator = "::=";
exports.separator = separator;
var terminator = ";";
exports.terminator = terminator;
var verticalBar = "|";
exports.verticalBar = verticalBar;
var openBracket = "(";
exports.openBracket = openBracket;
var closeBracket = ")";
exports.closeBracket = closeBracket;
var questionMark = "?";
exports.questionMark = questionMark;
var exclamationMark = "!";
exports.exclamationMark = exclamationMark;
var NO_WHITESPACE = "<NO_WHITESPACE>";
exports.NO_WHITESPACE = NO_WHITESPACE;
var END_OF_LINE = "<END_OF_LINE>";
exports.END_OF_LINE = END_OF_LINE;
var _default = {
    plus: plus,
    epsilon: epsilon,
    wildcard: wildcard,
    asterisk: asterisk,
    separator: separator,
    terminator: terminator,
    verticalBar: verticalBar,
    openBracket: openBracket,
    closeBracket: closeBracket,
    questionMark: questionMark,
    exclamationMark: exclamationMark,
    NO_WHITESPACE: NO_WHITESPACE,
    END_OF_LINE: END_OF_LINE
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvc3BlY2lhbFN5bWJvbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGx1cyA9IFwiK1wiO1xyXG5leHBvcnQgY29uc3QgZXBzaWxvbiA9IFwizrVcIjtcclxuZXhwb3J0IGNvbnN0IHdpbGRjYXJkID0gXCIuXCI7XHJcbmV4cG9ydCBjb25zdCBhc3RlcmlzayA9IFwiKlwiO1xyXG5leHBvcnQgY29uc3Qgc2VwYXJhdG9yID0gXCI6Oj1cIjtcclxuZXhwb3J0IGNvbnN0IHRlcm1pbmF0b3IgPSBcIjtcIjtcclxuZXhwb3J0IGNvbnN0IHZlcnRpY2FsQmFyID0gXCJ8XCI7XHJcbmV4cG9ydCBjb25zdCBvcGVuQnJhY2tldCA9IFwiKFwiO1xyXG5leHBvcnQgY29uc3QgY2xvc2VCcmFja2V0ID0gXCIpXCI7XHJcbmV4cG9ydCBjb25zdCBxdWVzdGlvbk1hcmsgPSBcIj9cIjtcclxuZXhwb3J0IGNvbnN0IGV4Y2xhbWF0aW9uTWFyayA9IFwiIVwiO1xyXG5leHBvcnQgY29uc3QgTk9fV0hJVEVTUEFDRSA9IFwiPE5PX1dISVRFU1BBQ0U+XCI7XHJcbmV4cG9ydCBjb25zdCBFTkRfT0ZfTElORSA9IFwiPEVORF9PRl9MSU5FPlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHBsdXMsXHJcbiAgZXBzaWxvbixcclxuICB3aWxkY2FyZCxcclxuICBhc3RlcmlzayxcclxuICBzZXBhcmF0b3IsXHJcbiAgdGVybWluYXRvcixcclxuICB2ZXJ0aWNhbEJhcixcclxuICBvcGVuQnJhY2tldCxcclxuICBjbG9zZUJyYWNrZXQsXHJcbiAgcXVlc3Rpb25NYXJrLFxyXG4gIGV4Y2xhbWF0aW9uTWFyayxcclxuICBOT19XSElURVNQQUNFLFxyXG4gIEVORF9PRl9MSU5FXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVDLElBQUksSUFBRyxDQUFHO1FBQVYsSUFBSSxHQUFKLElBQUk7SUFDSixPQUFPLElBQUcsT0FBRztRQUFiLE9BQU8sR0FBUCxPQUFPO0lBQ1AsUUFBUSxJQUFHLENBQUc7UUFBZCxRQUFRLEdBQVIsUUFBUTtJQUNSLFFBQVEsSUFBRyxDQUFHO1FBQWQsUUFBUSxHQUFSLFFBQVE7SUFDUixTQUFTLElBQUcsR0FBSztRQUFqQixTQUFTLEdBQVQsU0FBUztJQUNULFVBQVUsSUFBRyxDQUFHO1FBQWhCLFVBQVUsR0FBVixVQUFVO0lBQ1YsV0FBVyxJQUFHLENBQUc7UUFBakIsV0FBVyxHQUFYLFdBQVc7SUFDWCxXQUFXLElBQUcsQ0FBRztRQUFqQixXQUFXLEdBQVgsV0FBVztJQUNYLFlBQVksSUFBRyxDQUFHO1FBQWxCLFlBQVksR0FBWixZQUFZO0lBQ1osWUFBWSxJQUFHLENBQUc7UUFBbEIsWUFBWSxHQUFaLFlBQVk7SUFDWixlQUFlLElBQUcsQ0FBRztRQUFyQixlQUFlLEdBQWYsZUFBZTtJQUNmLGFBQWEsSUFBRyxlQUFpQjtRQUFqQyxhQUFhLEdBQWIsYUFBYTtJQUNiLFdBQVcsSUFBRyxhQUFlO1FBQTdCLFdBQVcsR0FBWCxXQUFXOztJQUd0QixJQUFJLEVBQUosSUFBSTtJQUNKLE9BQU8sRUFBUCxPQUFPO0lBQ1AsUUFBUSxFQUFSLFFBQVE7SUFDUixRQUFRLEVBQVIsUUFBUTtJQUNSLFNBQVMsRUFBVCxTQUFTO0lBQ1QsVUFBVSxFQUFWLFVBQVU7SUFDVixXQUFXLEVBQVgsV0FBVztJQUNYLFdBQVcsRUFBWCxXQUFXO0lBQ1gsWUFBWSxFQUFaLFlBQVk7SUFDWixZQUFZLEVBQVosWUFBWTtJQUNaLGVBQWUsRUFBZixlQUFlO0lBQ2YsYUFBYSxFQUFiLGFBQWE7SUFDYixXQUFXLEVBQVgsV0FBVyJ9