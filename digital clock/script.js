const time=document.querySelector('.time');
function digitalClock(){
    const free=new Date();
var h=free.getHours();
var m=free.getMinutes();
var s=free.getSeconds();
var txt="AM";
if(h>12){
    h-=12;
    txt="PM";
}else if(h==0){
    h=12;
    txt="AM";
}
h=h<10?'0'+h:h;
m=m<10?'0'+m:m;
s=s<10?'0'+s:s;
time.innerHTML= `${h} : ${m} : ${s}  ${txt}`;
}
digitalClock();
setInterval(digitalClock,1000);