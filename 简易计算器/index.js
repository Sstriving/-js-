/**
 * Created by 81964 on 2017/3/2.
 */
 window.onload =function(){
     if(!document.getElementsByClassName("btn")) return false;
     if(!document.getElementsByClassName("show")) return false;
     if(!document.getElementsByClassName("fun_keys")) return false;
     var btn = document.getElementsByClassName("btn");
     var fun_keys = document.getElementsByClassName("fun_keys");
     var show =document.getElementsByClassName("show")[0];
     var num = [];
     fun_keys[0].onclick =function(){
         show.value = "";
         num = [];
     };
     fun_keys[1].onclick =function(){
         show.value =show.value.substr(0,show.value.length-1);
     };
     for(var i =0;i<btn.length;i++) {
        btn[i].onclick = function () {
            if((this.value =="."||this.value=="0")&&show.value==""){
                show.value ="0.";
            }
            else{
                if (!isNaN(this.value) || this.value == ".") {
                    show.value += this.value;
                }
                else {
                    if (this.value != "=") {
                        num[num.length] = show.value;
                        num[num.length] = this.value;
                        show.value = "";
                    }
                    else {
                        num[num.length] = show.value;
                        show.value = eval(num.join(""));
                        num = [];
                    }
                }
            }
        }
     }
};