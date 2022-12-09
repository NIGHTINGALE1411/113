
function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,230, 150,220,200)
    fill(255,0,0)
    stroke(250,0,0)
    circle(50,50,80)
    circle(550,50,80)
    circle(50,430,80)
    circle(550,420,80)



fill(0,128,0);
    stroke(0,128,0)
    rect (90,40,420,20)
    rect(90,420,425,20)
    rect(30,80,20,320)
    rect(550,80,20,300)

}
function take_snapshot(){
    save('student_name.png')  
   }