const st=document.querySelector('.stbtn');
const stp=document.querySelector('.stpbtn');
const rst=document.querySelector('.rstbtn');
let hour=min=sec=ms=0,startTimer;
st.addEventListener('click',()=>{
    st.classList.add('start-active');
    stp.classList.remove('stop-active');
    startTimer=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hour++;
            min=0;
        }
       
        updateDis();
    },10);
});
stp.addEventListener('click',()=>{
    st.classList.remove('start-active');
    stp.classList.add('stop-active');
    clearInterval(startTimer);
});
rst.addEventListener('click',()=>{
    st.classList.remove('start-active');
    stp.classList.remove('stop-active');
    hour=min=sec=ms=0;
    updateDis();
});
function updateDis(){
  let  phour=hour<10?'0'+hour:hour;
  let  pmin=min<10?'0'+min:min;
  let  psec=sec<10?'0'+sec:sec;
  let  pms=ms<10?'0'+ms:ms;

    document.querySelector('.hour').innerText=phour;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;
 
}