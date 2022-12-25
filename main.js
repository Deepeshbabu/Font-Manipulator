nx = 0 ;
ny = 0 ;
lw = 0 ;
rw = 0 ;
d = 0 ;

function setup() 
{
    video = createCapture(VIDEO) ;
    video.size(550, 550);
    video.position(100,100);

    canvas = createCanvas(550,550) ;
    canvas.position(800,110) ;

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function draw() 
{
    background('aliceblue') ;
    fill("black") ;
    textSize(d) ;
    text("H.Deepesh Babu",floor(nx), floor(ny)) ;
    document.getElementById("result").innerHTML = "Font Size Of The Text Will Be : " + d + " px" ;
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        nx = results[0].pose.nose.x ;
        ny = results[0].pose.nose.y ;
        console.log("Nose X = " + nx + "Nose Y = " + ny);

        lw = results[0].pose.leftWrist.x ;
        rw = results[0].pose.rightWrist.x ;
        d = floor(lw) - floor(rw) ;
        console.log("d = " + d + "lw = " + lw + "rw = " + rw);
    }
}