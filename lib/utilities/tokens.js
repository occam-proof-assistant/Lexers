'use strict';

function significantTokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []),
      significantTokens = tokens.reduce(function (significantTokens, token) {
    var tokenSignificantToken = token.isSignificantToken();

    if (tokenSignificantToken) {
      var significantToken = token; ///

      significantTokens.push(significantToken);
    }

    return significantTokens;
  }, []);

  return significantTokens;
}

module.exports = {
  significantTokensFromLines: significantTokensFromLines
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvdG9rZW5zLmpzIl0sIm5hbWVzIjpbInNpZ25pZmljYW50VG9rZW5zRnJvbUxpbmVzIiwibGluZXMiLCJ0b2tlbnMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCIsInNpZ25pZmljYW50VG9rZW5zIiwidG9rZW4iLCJ0b2tlblNpZ25pZmljYW50VG9rZW4iLCJpc1NpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFNBQVNBLDBCQUFULENBQW9DQyxLQUFwQyxFQUEyQztBQUN6QyxNQUFNQyxTQUFTRCxNQUFNRSxNQUFOLENBQWEsVUFBU0QsTUFBVCxFQUFpQkUsSUFBakIsRUFBdUI7QUFDM0MsUUFBTUMsYUFBYUQsS0FBS0UsU0FBTCxFQUFuQjs7QUFFQUosYUFBU0EsT0FBT0ssTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsV0FBT0gsTUFBUDtBQUNDLEdBTk0sRUFNSixFQU5JLENBQWY7QUFBQSxNQU9RTSxvQkFBb0JOLE9BQU9DLE1BQVAsQ0FBYyxVQUFTSyxpQkFBVCxFQUE0QkMsS0FBNUIsRUFBbUM7QUFDbkUsUUFBTUMsd0JBQXdCRCxNQUFNRSxrQkFBTixFQUE5Qjs7QUFFQSxRQUFJRCxxQkFBSixFQUEyQjtBQUN6QixVQUFNRSxtQkFBbUJILEtBQXpCLENBRHlCLENBQ087O0FBRWhDRCx3QkFBa0JLLElBQWxCLENBQXVCRCxnQkFBdkI7QUFDRDs7QUFFRCxXQUFPSixpQkFBUDtBQUNELEdBVm1CLEVBVWpCLEVBVmlCLENBUDVCOztBQW1CQSxTQUFPQSxpQkFBUDtBQUNEOztBQUVETSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZmLDhCQUE0QkE7QUFEYixDQUFqQiIsImZpbGUiOiJ0b2tlbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgICAgICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcblxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG5cbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlbnMsIHRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlblNpZ25pZmljYW50VG9rZW4gPSB0b2tlbi5pc1NpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuU2lnbmlmaWNhbnRUb2tlbikge1xuICAgICAgICAgICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xuXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zLnB1c2goc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzaWduaWZpY2FudFRva2VucztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2lnbmlmaWNhbnRUb2tlbnNGcm9tTGluZXM6IHNpZ25pZmljYW50VG9rZW5zRnJvbUxpbmVzXG59O1xuIl19