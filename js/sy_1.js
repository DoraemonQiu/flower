/**
 * Created by Administrator on 2017/11/24.
 */
function aa(a){
    var re=/^\w+@\w+[\.]{1}\w+[\.]?\w+$/;
    if(re.test(a.value)){
        document.getElementById("a").innerHTML="输入邮箱格式正确";
        document.getElementById("a").style.color="blue";

    }
    else{
        document.getElementById("a").innerHTML="输入邮箱格式错误";
        document.getElementById("a").style.color="red";
    }
}
function ab(a){
    var re=/^\w{6,}$/;
    if(re.test(a.value)){
        document.getElementById("b").innerHTML="输入密码格式正确";
        document.getElementById("b").style.color="blue";

    }
    else{
        document.getElementById("b").innerHTML="输入密码格式错误";
        document.getElementById("b").style.color="red";
    }
}
function ac(a){
    alert("sgds");
    var re=/[\u4e00-\u9fa5]/;
    alert("gfdg");
    if(re.test(a.value)){
        document.getElementById("c").innerHTML="输入姓名格式正确";
        document.getElementById("c").style.color="blue";

    }
    else{
        document.getElementById("c").innerHTML="输入姓名格式错误";
        document.getElementById("c").style.color="red";
    }
}
function ad(){
    var re=/^\d{4}$/;
    var r2=/^([0-9]|(1[0,2]))$/;
    var r3=/^([0-9]|([1-2][0-9])|(3[0,1]))$/;
    var a=document.getElementById("ya").value;
    var b=document.getElementById("yd").value;
    var c=document.getElementById("yc").value;
    var s="";
    if(!re.test(a)){
        s=s+"输入的年份错误，格式为2017\n";
    }
    if(!r2.test(b)){
        s=s+"输入的月份错误，格式为11\n";
    }
    if(!r3.test(c)){
        s=s+"输入的日份错误，格式为24\n";
    }
    if(s=="")
    {
    alert("登录成功");}
    else
    {alert(s);}
}
