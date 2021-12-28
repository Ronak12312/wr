x=0;
y=0;
dc="";
dr="";
function setup(){
    canvas=createCanvas(900,600);
}
var s=window.webkitSpeechRecognition;
var r=new s();
function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    r.start();
}
r.onresult=function(event){
    console.log(event);
    d=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="speech has been recognised as"+d;
    if(d=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing circle";
        dc="set";
    }
    if(d=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing rectangle";
        dr="set";
    }
}
function draw(){
    if(dc=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        dc="";
    }
    if(dr=="set"){
        width=Math.floor(Math.random()*100);
        height=Math.floor(Math.random()*100);
        rect(x,y,width,height);
        document.getElementById("status").innerHTML="rectangle is drawn";
        dr="";
    }
}