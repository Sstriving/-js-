/**
 * Created by 81964 on 2017/3/8.
 */

/*���ض��������һ��ͨ�ú���*/

function addLoadEvent(func){
    var oldonload =window.onload;
    //���û�ð󶨵ĺ�����������
    if(typeof window.onload!= "function"){
        window.onload =func;
    }
    //����Ѿ��к����󶨣����º���׷�ӵ�����ָ���ĩβ
    else{
        window.onload =function(){
            oldonload();
            func();
        }
    }
}