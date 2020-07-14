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


//startMove(oDiv,{width:400,height:400})
function startMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        for (var attr in json) {

            var cur = 0;
            if (attr == "opacity") {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (cur == json[attr]) {
                clearInterval(obj.timer);

                if (fnEnd) fnEnd();
            } else {
                if (attr == "opacity") {
                    obj.style.opacity = (cur + speed) / 100;
                    document.getElementById("txt1").value = obj.style.opacity;
                } else {
                    obj.style[attr] = cur + speed + "px";
                }
            }
        }
    }, 30);
};