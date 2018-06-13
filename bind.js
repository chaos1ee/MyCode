// 惰性载入
var bind = (function () {
  if (Function.prototype.bind) {
    return function (fn, context) {
      return fn.bind(context)
    };
  } else {
    return function (fn, context) {
      return function () {
        return fn.apply(context, arguments);
      }
    }
  }
})();