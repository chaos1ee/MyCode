<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ball</title>
    <style>
      html,
      body {
        padding: 0;
        margin: 0;
      }

      .container {
        position: relative;
        width: 420px;
        height: 420px;
        border-radius: 210px;
        margin: 200px auto;
        background: grey;
      }

      .panel {
        position: absolute;
        bottom: -200px;
        left: 0;
        right: 0;
        text-align: center;
      }

      .ball {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: red;
      }

    </style>
  </head>

  <body>
    <div class="container">
      <div class="panel">
        <p>
          <button class="run">启动</button>
          <button class="stop">暂停</button>
        </p>

        <p>
          <button class="add">添加</button>
          <button class="del">删除</button>
        </p>
      </div>
    </div>

    <script>
      window.onload = function () {

        var uid = 0;
        
        // 小球类
        var Ball = function () {
          uid++;

          // 生成小球
          this.el = document.createElement('div');
          this.el.classList.add('ball');
          this.el.style.top = 30 - 40 * uid + 'px';
          this.el.style.left = '200px';
          document.querySelector('.container').appendChild(this.el);

          this.r = 170 + 40 * uid;
          this.x = 200;
          this.y = 200;
          this.n = 0;
        }

        Ball.prototype.run = function () {
          if (this.running) return;
          this.running = true;

          var _this = this;

          function _run() {
            _this.n = ++_this.n % 360;
            var a = Math.cos(_this.n * Math.PI / 180) * _this.r;
            var b = Math.sin(_this.n * Math.PI / 180) * _this.r;

            _this.el.style.left = _this.x + a + 'px';
            _this.el.style.top = _this.y + b + 'px';

            _this.timerId = requestAnimationFrame(_run);
          }
          requestAnimationFrame(_run);
        }

        Ball.prototype.stop = function () {
          this.running = false;
          window.cancelAnimationFrame(this.timerId);
        }
        
        // 小球组类
        function BallGroup() {
          this.group = [];
        }

        BallGroup.prototype.add = function () {
          var ball = new Ball();
          this.group.push(ball);
        }

        BallGroup.prototype.remove = function () {
          this.group.pop();
        }

        BallGroup.prototype.update = function () {

        }

        var ball1 = new Ball();
        var ball2 = new Ball();

        var runBtn = document.querySelector('.run');
        var stopBtn = document.querySelector('.stop');
        var addBtn = document.querySelector('.add');
        var delBtn = document.querySelector('.del');


        var dep = new Dep();

        runBtn.addEventListener('click', function () {
          ball1.run();
          ball2.run();
        });

        stopBtn.addEventListener('click', function () {
          ball1.stop();
          ball2.stop();
        });

        addBtn.addEventListener('click', function () {
          var ball = new Ball();
          dep.append(ball);
        });

        delBtn.addEventListener('click', function () {

        });

        // 观察者模式
        var Dep = function () {
          this.list = [];
        }

        Dep.prototype.append = function (dep) {
          this.list.push(dep);
        }

        Dep.prototype.remove = function () {
          this.list.pop();
        }

        Dep.prototype.notify = function () {
          this.list.forEach(function (item) {
            item.update();
          });
        }

      }

    </script>

  </body>

</html>
