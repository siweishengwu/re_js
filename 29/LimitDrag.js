function LimitDrag(id) {
	Drag.call(this, id); //继承属性
};

for (var i in Drag.prototype) {
	LimitDrag.prototype[i] = Drag.prototype[i];
}
// 重写
LimitDrag.prototype.fnMove = function (ev) {
	var oEvent = ev || event;
	var l = oEvent.clientX - this.disX;
	var t = oEvent.clientY - this.disY;

	if (l < 0) {
		l = 0;
	} else if (l > document.documentElement.clientWidth - this.oDiv.offSetWidth) {
		l = document.documentElement.clientWidth - this.oDiv.offSetWidth;
	}

	if (t < 0) {
		t = 0;
	} else if (t > document.documentElement.clientTop - this.oDiv.offSetTop) {
		t = t > document.documentElement.clientTop - this.oDiv.offSetTop;
	}

	this.oDiv.style.left = l + 'px';
	this.oDiv.style.top = t + 'px';
};
