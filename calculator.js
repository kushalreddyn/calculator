function show(x)
{
    if(x.value===" ")
    {
        document.getElementById("display").innerHTML=" ";
        document.getElementById("equal").innerHTML="0";
    }
    else if(x.value==="a")
    document.getElementById("equal").innerHTML=calculate();
    else if(x.value==="c")
    {
        var y=document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML=y.substring(0,y.length-1);
    }
    else
    document.getElementById("display").innerHTML+=x.value;
}
function calculate()
{
    return eval(document.getElementById("display").innerHTML);
}
function magic()
{
    var a=document.getElementsByClassName("background")[0];
    if(a.style.backgroundColor==="#000000")
    {
    document.getElementsByClassName("background")[0].style.backgroundColor="white";
    document.getElementsByClassName("screen")[0].style.backgroundColor="rgb(227 225 225)";
    document.getElementsByClassName("h")[0].style.backgroundColor="white";
    document.getElementsByClassName("ch")[0].style.color="black";
    document.getElementsByClassName("ch")[0].style.color="black";
    }
  
}