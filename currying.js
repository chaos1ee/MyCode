function currying(fn) {
  var slice = Array.prototype.slice,
  args = slice.call(arguments, 1);
  return function() {
    var innerArgs = slice.call(arguments);
    return fn.apply(null, args.concat(innerArgs));
  }
}
