var checkbox = false;
/*
var videoHalfWay=0;
var formatedHalfWay=0;




$(document).ready(function(){
    $.featherLight.default.afterClose=playPauseVideo;

    video1=$('$mainVideo')
    $('.box1').on('click',function(){
        playPauseVideo('.pregunta1');
    });
    $('.box2').on('click',function(){
        playPauseVideo('');
    });
});
*/
function playPauseVideo(popup){
    if(mainVideo[0].paused){
        mainVideo[0].play();
    }else{
        mainVideo[0].pause();
    }
}

function iniciar() {
    bucle=setInterval(preguntaUno, 1);
    
}
function preguntaUno(){
    if(mainVideo.currentTime<59)
        document.getElementById('box1').style.display = 'none';
        document.getElementById('box2').style.display = 'none';
        document.getElementById('box3').style.display = 'none';

    if(mainVideo.currentTime>59 &&  mainVideo.currentTime<68){ 
        mainVideo.pause();
        document.getElementById('box1').style.display = 'block';
        document.getElementById('box2').style.display = 'block';
        document.getElementById('box3').style.display = 'block';
        
        
    }
    if (mainVideo.currentTime>69){
        mainVideo.play();
        document.getElementById('box1').style.display = 'none';
        document.getElementById('box2').style.display = 'none';
        document.getElementById('box3').style.display = 'none';
    }
}

function ornitorrinco(){

    box3.addEventListener("click", mainVideo.currentTime=70);
}

function perryElOrnitorrinco(){
    box2.addEventListener("click", mainVideo.currentTime=74);
}

window.addEventListener('load', iniciar, false);
