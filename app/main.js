let hour = document.querySelector(".circle-hr");
let min = document.querySelector(".circle-min");
let sec = document.querySelector(".circle-sec");
let spn=document.querySelector("span");
setInterval(()=>{
    let dts =new Date();
    let hr =dts.getHours()*30;
    let mn =dts.getMinutes()*6;
    let sc =dts.getSeconds()*6;

    hour.style.transform=`rotateZ(${hr+mn/12}deg)`;
    min.style.transform=`rotateZ(${mn}deg)`;
    sec.style.transform=`rotateZ(${sc}deg)`;

    sc=sc/30 ;
    sc ==0 ? (sc=12):sc;
    for(let i=0; StereoPannerNode.length; i++){
        spn[sc].classList.add("active")

        setTimeout(()=>{
            spn[i++].classList.remove("active")
        },1000);
    }
},1000)