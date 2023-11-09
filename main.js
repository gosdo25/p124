function setup(){
    canvas=createCanvas(300,300)
    canvas.position(700,200)

    video=createCapture(VIDEO)
    video.position(200,200)
    video.size(300,300)
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model is loaded")
}
function gotposes(results){
    if(results.length>0){
      console.log(results)  
    }

}
function draw(){
    background("coral");
}

