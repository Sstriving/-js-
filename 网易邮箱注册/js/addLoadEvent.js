/**
 * Created by 81964 on 2017/3/8.
 */

/*加载多个函数的一个通用函数*/

function addLoadEvent(func){
    var oldonload =window.onload;
    //如果没用绑定的函数则照样绑定
    if(typeof window.onload!= "function"){
        window.onload =func;
    }
    //如果已经有函数绑定，则将新函数追加到现有指令的末尾
    else{
        window.onload =function(){
            oldonload();
            func();
        }
    }
}