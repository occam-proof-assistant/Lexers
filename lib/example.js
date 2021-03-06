"use strict";
require("juxtapose");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _bnf = _interopRequireDefault(require("./example/view/bnf"));
var _basic = _interopRequireDefault(require("./example/view/basic"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var View;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
switch(example){
    case "bnf":
        View = _bnf.default;
        break;
    case "basic":
        View = _basic.default;
        break;
}
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBCTkZWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9ibmZcIjtcbmltcG9ydCBCYXNpY1ZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Jhc2ljXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImJuZlwiOiBWaWV3ID0gQk5GVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJiYXNpY1wiOiBWaWV3ID0gQmFzaWNWaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcgLz5cblxuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOztJQUlVLGNBQWlCO0lBRWxCLEtBQU07SUFFUCxJQUFvQjtJQUNsQixNQUFzQjs7Ozs7O0lBRXBDLFlBQVksR0FQRSxjQUFpQixTQU8vQixZQUFZO0lBRWhCLElBQUk7SUFFRixJQUFJLE9BVFcsS0FBTSxTQVVyQixPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7T0FFakQsT0FBTztVQUNSLEdBQUs7UUFBRSxJQUFJLEdBWEUsSUFBb0I7O1VBWWpDLEtBQU87UUFBRSxJQUFJLEdBWEUsTUFBc0I7OztBQWM1QyxZQUFZO0FBRVosSUFBSSxDQUFDLEtBQUssbUNBRVAsSUFBSSJ9