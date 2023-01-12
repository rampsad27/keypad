let num='';
const prime=document.querySelectorAll(".prime");
 const backspace=document.querySelector(".but");

const sendtext=()=>{
    document.getElementById('text').innerText=num;
}

prime.forEach(iss=>{
    iss.addEventListener("click",()=>{
        if(num.length>=10){
            alert("Max digits reached");
        }else{
            num+=iss.innerText;
            sendtext();
        }
    });
});
backspace.addEventListener("click",()=>{
    num=num.slice(0,num.length-1);
    if(num.length<=0){
        document.getElementById('text').innerText='...';
        setTimeout(()=>{alert("Nothing to erase");},100);
    }
    else{sendtext();}
});