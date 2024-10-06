let mode="light";
function f1(){
    if(mode==="light")
    {
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
        document.querySelector("nav").style.backgroundColor="lightblue";
        document.querySelector("p").style.color="lightblue";
    }
    else
    {
        mode="light"
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
        document.querySelector("nav").style.backgroundColor="blue";
        document.querySelector("p").style.color="blue";
    }
    alert("Theme will be changed to "+mode);
}