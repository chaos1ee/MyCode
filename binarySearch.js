/**
 * @description 使用二分法实现indexOf方法
 * @author maybeeee
 */

Array.prototype.indexOf = Array.prototype.indexOf || function () {
  var left = 0;
  var right = this.length - 1;
  var middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (this[middle] < arguments[0]) {
      left = middle + 1;
    } else if (this[middle] > arguments[0]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1
};