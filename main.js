difference=0;
RightWrist=0;
LeftWrist=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas =createCanvas(550, 550);
    canvas.position(560 ,150);

    posenet = ml5.poseNet(video, Loaded);
    posenet.on('pose',gotposes);
    
}

function Loaded(){
    console.log('PoseNet Is Initialized');
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    LeftWrist = results[0].pose.leftWrist.x;
    RightWrist = results[0].pose.rightWrist.x;
    difference = floor(LeftWrist - RightWrist);
}
}

function draw(){
    background("#969A97");
    textSize(difference);
    fill("#FFE787");
    text('Saanchi', 50 ,400);
}