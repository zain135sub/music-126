music_1="music.mp3"
music_2="music2.mp3"
function preload(){
    music_1=loadSound("music.mp3")
    music_2=loadSound("music2.mp3")
}
function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,480,380)
}