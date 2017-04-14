/**
 * Created by 81964 on 2017/3/16.
 */
addLoadEvent(shufflingFigure());//加载函数
addLoadEvent(showImgage());
function showImgage() {
    var li_picture = document.getElementsByClassName("li_picture");
    var img_dis = document.getElementsByClassName("img_dis");
    for (var i = 0; i < li_picture.length; i++) {
        li_picture[i].index = i;
        li_picture[i].onmouseover = function () {
            img_dis[this.index].style.display = "block";
        };
        li_picture[i].onmouseout = function () {
            img_dis[this.index].style.display = "none";
        }
    }
}
/*图片轮播函数*/
function shufflingFigure() {
    var num = 0;
    var flag = false;
    var timer;
    var ul_picture = document.getElementById("ul_picture");
    var div_span = document.getElementsByClassName("div_span");
    var div_circle = document.getElementsByClassName("div_circle");
    showPicture();
    //自动轮播函数
    function showPicture() {
        timer = setInterval(function () {
            if (flag == false) {
                num++;
                if (num > 3) {
                    num = 3;
                    flag = true;
                }
            }
            if (flag == true) {
                num--;
                if (num < 0) {
                    num = 0;
                    flag = false;
                }
            }
            for (var i = 0; i < div_circle.length; i++) {
                div_circle[i].style.backgroundColor = "silver"
            }
            div_circle[num].style.backgroundColor = "#be0000";
            ul_picture.style.transform = "translate(" + -1365 * num + "px)";

        }, 2000)
    }
    //点击向左向右时的情况
    for (var i = 0; i < div_span.length; i++) {
        div_span[i].onmouseover = function () {
            clearInterval(timer);
        };
        div_span[i].onmouseout = function () {
            showPicture();
        }
        //保存索引值
        div_span[i].index = i;
        div_span[i].onclick = function () {
            if (this.index == 0) {
                num--;
                ul_picture.style.transition = 1 + "s";
                if (num < 0) {
                    num = 3;
                    ul_picture.style.transition = 0.2 + "s";
                }
            }
            if (this.index == 1) {
                num++;
                ul_picture.style.transition = 1 + "s";
                if (num > 3) {
                    num = 0;
                    ul_picture.style.transition = 0.2 + "s";
                }
            }
            for (var i = 0; i < div_circle.length; i++) {
                div_circle[i].style.backgroundColor = "silver"
            }
            div_circle[num].style.backgroundColor = "#be0000";
            ul_picture.style.transform = "translate(" + -1365 * num + "px)";
        }
    }
    //点击标识的情况
    for (var i = 0; i < div_circle.length; i++) {
        div_circle[i].onmouseover = function () {
            clearInterval(timer);
        };
        div_circle[i].onmouseout = function () {
            showPicture();
        };
        div_circle[i].index = i;
        div_circle[i].onclick = function () {
            for (var j = 0; j < div_circle.length; j++) {
                div_circle[j].style.backgroundColor = "silver"
            }
            div_circle[this.index].style.backgroundColor = "#be0000";
            ul_picture.style.transform = "translate(" + -1365 * (this.index) + "px)";
        }

    }

}