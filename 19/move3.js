window.onload = function() {
    var odiv1 = document.getElementById("div1");
    odiv1.onmouseover = function() {
        startMove(this, "opacity", 100);
    };
    odiv1.onmouseout = function() {
        startMove(this, "opacity", 30);
    };
};

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
};


function startMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true; //假设： 所有的值都已经到了

        for (var attr in json) {

            var cur = 0;

            if (cur != json[attr])
                bStop = false;

            if (attr == "opacity") {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            //有点小问题
            if (attr == "opacity") {
                obj.style.opacity = (cur + speed) / 100;
                // document.getElementById("txt1").value = obj.style.opacity;
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            //加一个断点调试
            // alert("777");
            if (fnEnd)
                fnEnd();
        }
    }, 30);
};