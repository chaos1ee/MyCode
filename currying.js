function currying(fn) {
  var slice = Array.prototype.slice,
    args = slice.call(arguments, 1);
  return function () {
    var innerArgs = slice.call(arguments);
    return fn.apply(null, args.concat(innerArgs));
  }
}

// demo1

var Ajax = function () {
  this.xhr = new XMLHttpRequest();
}

Ajax.prototype.open = function (type, url, params, callback) {
  this.onload = function () {
    callback(JSON.parse(this.xhr.responseText), this.xhr.status, this.xhr);
  }

  this.xhr.open(type, url, false);
  this.xhr.send(params);
}

['get', 'post', 'update', 'delete'].forEach(function (method) {
  Ajax.prototype[method] = currying(Ajax.prototype.open, method);
});


var xhr = new Ajax();

xhr.get('/music/123', {}, function (res) {
  console.log(res);
});

xhr.post('/music/456', {}, function (res) {
  console.log(res);
});


// demo2 延迟执行

var add = function () {
  var that = this,
    args = arguments;
  return function () {
    if (!aruguments.length) {
      var sum = 0;
      for (var i = 0, c; c = args[i++];) {
        sum += c;
      }
      return sum;
    } else {
      Array.prototype.push.apply(args, arguments);
      return arguments.callee;
    }
  }
}

add(1)(2)(3)(4)();