## 整理一些自己平时写的小demo

##### 格式化数字

```javascript
function format(num) {
  var arr = (num + '').split('').reverse();
  var i = 0;

  while (arr.length - i > 3) {
    i += 3;
    arr.splice(i++, 0, ',');
  }

  return arr.reverse().join('');
}

console.log(format(123)); // 123
console.log(format(1234567890)); // 1,234,567,890
```

##### 扩展console.log

扩展console.log，使输出满足如下形式。

```javascript
console.log = (function() {
  var n = 1;
  var _log = console.log;
  return function() {
    var arg = Array.prototype.slice.call(arguments);
    arg.unshift(n++ + ':');
    _log.apply(null, arg);
  }
})();

console.log('who'); // 1: who
console.log('are'); // 2: are
console.log('you'); // 3: you
```

##### [navigator.html](./navigator.html)
导航条动画

![ball.html](image/navigator.gif)

##### [ball.html](./ball.html)
面向对象与JS动画

![ball.html](image/Animation.gif)

##### [scale.html](./scale.html)
CSS动画

![scale.html](image/scale.gif)

##### [vueRenderFunction.html](./vueRenderFunction.html)
Vue Render函数

![scale.html](image/render.png)

##### [pseudo.html](./pseudo.html)
CSS伪元素

![scale.html](image/pseudo.png)

##### [validator.js](./validator.js)
Angular1表单校验类，策略模式

##### [currying.js](./currying.js)
函数柯里化

##### [subscribe.js](./subscribe.js)
订阅者模式

##### [sport.js](./sport.js)
运动框架

##### [negativeMargin.html](./negativeMargin.html)
负margin的应用

##### [bind.js](./bind.js)
特性检测、惰性载入

##### [lazyload.html](./lazyload.html)
简单的图片懒加载

##### [binarySearch.js](./binarySearch.js)
二分法查找
