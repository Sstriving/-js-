/**
 * Created by 81964 on 2017/3/14.
 */
var text_num = "";
var res = [];
addLoadEvent(showNumber());
addLoadEvent(verification());
    /*随机数字*/
function showNumber(){
    var number = document.getElementsByClassName("div_1")[0];
    var span_text = document.getElementsByClassName("span_text")[0];
    text_num= "";
    number.innerHTML = "";
    var div_color ="";
    for(var i = 0;i<4;i++){
        var div_element = document.createElement("div");
        div_element.className ="div_random";
        var color_num = "";
        for(var j = 0;j<6;j++){
            color_num+=Math.floor(Math.random()*10);
        }
        div_color = "#"+color_num;
        div_element.style.color = div_color;
        var text = Math.floor(Math.random()*10);
        text_num+=text;
        div_element.innerHTML = text;
        number.appendChild(div_element);
    }
}
/*点击看不清*/
span_text.onclick = function(){
    showNumber();
};
      /*信息验证函数*/
function verification(){
    /*手机号*/
    var phone_number = document.getElementById("phone_number");
    /*验证码*/
    var ver_code = document.getElementById("ver_code");
    /*提示信息*/
    var reminder = document.getElementsByClassName("reminder");
   /* 获取短信验证码*/
    var note = document.getElementById("note");
    /*获取密码*/
    var cipher = document.getElementById("cipher");
    var cipher_next = document.getElementById("cipher_next");
  /*  获取同意框*/
    var check = document.getElementById("check");
    var btn = document.getElementById("btn");

    /*手机号码验证*/
    phone_number.onfocus = function(){
        reminder[0].style.color = "black";
        reminder[0].innerHTML = "请填写手机号";
    };
    phone_number.onblur = function(){
        if(isNaN(this.value)||this.value.length!=11){
            reminder[0].innerHTML = "！请填写有效的11位手机号码";
            reminder[0].style.color = "red";
            res[0] = false;
        }
        else{
            reminder[0].innerHTML = "√该号码可注册";
            reminder[0].style.color = "green";
            res[0] = true;
        }
    };
    /*验证码验证*/
    ver_code.onfocus = function(){
        reminder[1].style.color = "black";
        reminder[1].innerHTML = "请填写图片中的字符，不区分大小写";
    };
    ver_code.onblur = function(){
        if(text_num!=ver_code.value){
            reminder[1].innerHTML = "！请填写正确的验证码";
            reminder[1].style.color = "red";
            res[1] = false;
        }
        else{
            reminder[1].innerHTML = "√验证码正确";
            reminder[1].style.color = "green";
            res[1] = true;
        }
    };
    note.onfocus = function(){
        reminder[2].style.color = "black";
        reminder[2].innerHTML = "请查收手机短信，并填写短信中6位的验证码";
    };
    note.onblur = function(){
        if(isNaN(this.value)||this.value.length!=6){
            reminder[2].innerHTML = "！短信验证码不正确";
            reminder[2].style.color = "red";
            res[2] = false;
        }
        else{
            reminder[2].innerHTML = "√正确";
            reminder[2].style.color = "green";
            res[2] = true;
        }
    };
    cipher.onfocus = function(){
        reminder[3].style.color = "black";
        reminder[3].innerHTML = "6~16个字符，区分大小写";
    };
    cipher.onblur = function(){
        if(this.value.length<6||this.value.length>16){
            reminder[3].style.color = "red";
            reminder[3].innerHTML = "!密码长度应为6~16个字符";
            res[3] = false;
        }
        else{
            if(this.value.length>=6&&this.value.length<9){
                reminder[3].style.color = "green";
                reminder[3].innerHTML = "√密码强度：弱";

            }
            else if(this.value.length>9&&this.value.length<12){
                reminder[3].style.color = "green";
                reminder[3].innerHTML = "√密码强度：中";

            }
            else{
                reminder[3].style.color = "green";
                reminder[3].innerHTML = "√密码强度：强";

            }
            res[3] = true;
        }
    };
    cipher_next.onfocus = function(){
        reminder[4].style.color = "black";
        reminder[4].innerHTML = "请再次填写密码";
    };
    cipher_next.onblur = function(){
        if(this.value!=cipher.value){
            reminder[4].style.color = "red";
            reminder[4].innerHTML = "! 两次填写的密码不一致";
            res[4] = false;
        }
        else{
            reminder[4].style.color = "green";
            reminder[4].innerHTML = "√密码正确";
            res[4] = true;
        }
    };
    /*是否同意条款*/
    check.onclick = function(){
        if(check.checked ==true){
            res[5] = true;
        }
        else{
            res[5] = false;
        }
    };
    btn.onclick = function(){
        var result = res[0]&&res[1]&&res[2]&&res[3]&&res[4]&&res[5];
        if(result==true){
            return true;
        }
        else{
            return false;
        }
    }

}



