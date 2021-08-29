function preload(){
    
}
 

function setup(){
canvas=createCanvas(900,900)
canvas.center();
video=createCapture(VIDEO);
video.hide();
}


function draw(){
image(video,300,300,300,300)

fill(0,255,255)
stroke(255,0,0)
circle(850,50,80)

fill(0,255,255)
stroke(255,0,0)
circle(50,50,80)

fill(0,255,255)
stroke(255,0,0)
circle(850,850,80)


fill(0,255,255)
stroke(255,0,0)
circle(50,850,80)


}