/**
 * Created by Administrator on 2017/11/24.
 */
function aa(a){
    var re=/^\w+@\w+[\.]{1}\w+[\.]?\w+$/;
    if(re.test(a.value)){
        document.getElementById("a").innerHTML="���������ʽ��ȷ";
        document.getElementById("a").style.color="blue";

    }
    else{
        document.getElementById("a").innerHTML="���������ʽ����";
        document.getElementById("a").style.color="red";
    }
}
function ab(a){
    var re=/^\w{6,}$/;
    if(re.test(a.value)){
        document.getElementById("b").innerHTML="���������ʽ��ȷ";
        document.getElementById("b").style.color="blue";

    }
    else{
        document.getElementById("b").innerHTML="���������ʽ����";
        document.getElementById("b").style.color="red";
    }
}
function ac(a){
    alert("sgds");
    var re=/[\u4e00-\u9fa5]/;
    alert("gfdg");
    if(re.test(a.value)){
        document.getElementById("c").innerHTML="����������ʽ��ȷ";
        document.getElementById("c").style.color="blue";

    }
    else{
        document.getElementById("c").innerHTML="����������ʽ����";
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
        s=s+"�������ݴ��󣬸�ʽΪ2017\n";
    }
    if(!r2.test(b)){
        s=s+"������·ݴ��󣬸�ʽΪ11\n";
    }
    if(!r3.test(c)){
        s=s+"������շݴ��󣬸�ʽΪ24\n";
    }
    if(s=="")
    {
    alert("��¼�ɹ�");}
    else
    {alert(s);}
}
