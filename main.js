function setup(){
    video= createCapture(VIDEO);
    video.size(550,550);

    canvas= createCanvas(550,550);
    canvas.position(550,150);
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PosNet is Initialised!");
}
function draw(){
  background("white");
}
function gotPoses(results){
    if(results.length>0){
console.log(results);
    }
}