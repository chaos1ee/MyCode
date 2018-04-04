/**
 *
 * 在模块中的使用方式
 *
 * var validator = new Validator();
 *
 * validator.add(val1, [
 *  {
 *    strategy: 'isNotEmpty',
 *    errorMsg: 'XXXXX'
 *  },
 *  {
 *    strategy: 'minLength:10', // 需要传入
 *    errorMsg: 'XXXXX'
 *  }
 * ]);
 *
 * validator.add(val2, [
 *  {
 *    strategy: 'isNotEmpty',
 *    errorMsg: 'XXXXX'
 *  },
 *  {
 *    strategy: 'minLength:10', // 设定规则参数
 *    errorMsg: 'XXXXX'
 *  }
 * ]);
 *
 * ... 一次可以添加多个校验规则与多个字段的校验
 *
 * var msg = validator.start(); // 出错时返回对应的errorMsg
 *
 */

myApp.factory('Validator', [
  function() {
    // 表单校验规则（可以在其中添加规则）
    var strategies = {
      isNotEmpty: function(value, errorMsg) {
        if (typeof value === 'undefined' || value === '') {
          return errorMsg;
        }
      },
      minLength: function(value, length, errorMsg) {
        if (value.length < length) {
          return errorMsg;
        }
      },
      maxLength: function(value, length, errorMsg) {
        if (value.length > length) {
          return errorMsg;
        }
      },
      isNumber: function(value, errorMsg) {
        if (!/^\d+$/.test(value)) {
          return errorMsg;
        }
      },
      isPassWord: function(value, errorMsg) {
        if (!/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/.test(value)) {
          return errorMsg;
        }
      },
      isWordAndNumber: function(value, errorMsg) {
        if (!/^[a-zA-Z]+[0-9a-zA-Z]+$/.test(value)) {
          return errorMsg;
        }
      },
      isDate: function(value, errorMsg) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return errorMsg;
        }
      },
      isChart: function(value, errorMsg) {
        if (!/^[a-zA-Z0-9`~!@#$%^&*()_+-={}|\[\]\\\:\"\;\'\?\,\.\u4e00-\u9fa5]*$/.test(value)) {
          return errorMsg;
        }
      },
      isPhone: function(value, errorMsg) {},
      isEmail: function(value, errorMsg) {
        if (!/^(\w)+@(\w)+(\.\w+)+$/.test(value)) {
          return errorMsg;
        }
      }
    };

    var Validator = function() {
      this.cache = [];
    };

    Validator.prototype.add = function(value, rules) {
      var self = this;
      for (var i = 0, rule; (rule = rules[i++]); ) {
        (function(rule) {
          var strategyArr = rule.strategy.split(':');
          var errorMsg = rule.errorMsg;
          self.cache.push(function() {
            var strategy = strategyArr.shift();
            strategyArr.unshift(value);
            strategyArr.push(errorMsg);
            return strategies[strategy].apply(strategies, strategyArr);
          });
        })(rule);
      }
    };

    Validator.prototype.start = function() {
      for (var i = 0, validateFunc; (validateFunc = this.cache[i++]); ) {
        var errorMsg = validateFunc();
        if (errorMsg) return errorMsg;
      }
    };

    return Validator;
  }
]);
