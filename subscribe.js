let event = {
	list: {},
	on(key, fn) {
		if(!this.list[key]) {
			this.list[key] = [];
		}
		this.list[key].push(fn);
	},
	emit() {
		let key = [].shift.call(arguments),
			fns = this.list[key];
		if(!fns || fns.length === 0) {
			return false;
		}
		fns.forEach(fn => {
			fn.apply(this, arguments);
		});
	},
	remove(key, fn) {
		let fns = this.list[key];
		if(!fns) return false;
		if(!fn) {
			fns && (fns.length = 0);
		} else {
			fns.forEach((cb, i) => {
				if(cb === fn) {
					fns.splice(i, 1);
				}
			})
		}
	}
}

function cat() {
    console.log('一起喵喵喵');
}
function dog() {
    console.log('一起旺旺旺');
}

event.on('pet', data => {
    console.log('接收数据');
    console.log(data);
});
event.on('pet', cat);
event.on('pet', dog);
// 取消dog方法的订阅
event.remove('pet', dog);
// 发布
event.emit('pet', ['二哈', '波斯猫']);

// 作者：chenhongdong
// 链接：https://juejin.im/post/5b125ad3e51d450688133f22
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
