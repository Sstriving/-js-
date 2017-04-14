/**
 * Created by 81964 on 2017/3/16.
 */

var in_title = document.getElementsByClassName("in_title")[0];
var province = document.getElementById("province");
var city = document.getElementById("city");
var region = document.getElementById("region");

function verify(){
    var center_3_input = document.getElementsByClassName("center_3_input");
    center_3_input[0].onclick = function(){
        alert("请选择具体地址！");
    };
    in_title.onfocus = function(){
        in_title.value = "";
    };
}

function  dataAssociation(){
    var province_s =["安徽省","北京市","重庆市","福建省","甘肃省","陕西省"];
    var city_c = [
        ["安庆市","亳州市","池州市","合肥市","黄山市"],
        ["北京市"],
        ["重庆市"],
        ["福州市","龙岩市","南平市","宁德市","泉州市","厦门市"],
        ["酒泉市","兰州市","张掖市"],
        ["西安市","咸阳市","汉中市","榆林市"]
    ];
    var region_c = [
        [
            ["安庆市1","安庆市2","安庆市3","安庆市4"],
            ["亳州市1","亳州市2","亳州市3","亳州市4"],
            ["池州市1","池州市2","池州市3"],
            ["合肥市1","合肥市2"],
            ["黄山市1","黄山市2","黄山市3"]
        ],
        [
            ["北京市"]
        ],
        [
            ["重庆市"]
        ],
        [
            ["福州市1","福州市2"],
            ["龙岩市1","龙岩市2"],
            ["南平市1","南平市2"],
            ["宁德市1","宁德市2","宁德市3"],
            ["泉州市1","泉州市2","泉州市3"],
            ["厦门市1","厦门市2"]
        ],
        [
            ["酒泉市"],
            ["兰州市"],
            ["张掖市"]
        ],
        [
            ["西安市"],
            ["咸阳市"],
            ["汉中市"],
            ["榆林市"]
        ]
    ];

    //添加省
    for(var i = 0;i<province_s.length;i++){
        var option = new Option(province_s[i], i);
        province.appendChild(option);
    }
    //关联市
    var qu;
    province.onchange = function(){
        //每次改变省份时，让市的选项清空
        city.options.length = 1;
        var index = province.value;
        var shi =city_c[index];
        //选择省的时候先取一次区的地址
        qu = region_c[index];
        for(var i = 0;i<shi.length;i++){
            var option = new Option(shi[i],i);
            city.appendChild(option);
        }
    };
    //关联区
    city.onchange = function(){
        region.options.length = 1;
        var j = city.value;
        var shiqu = qu[j];
        for(var i = 0;i<shiqu.length;i++){
            var option = new Option(shiqu[i],i);
            region.appendChild(option);
        }
    }
}
//函数加载
addLoadEvent(dataAssociation());
addLoadEvent(verify());