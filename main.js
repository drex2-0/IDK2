function preload() {
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	gameover = loadSound("gameover.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
    video.parent('gameconsole');
	posenet=ml5.poseNet(video,modelloaded);
	posenet.on('pose',gotposes);
}

function modelloaded()
{
	console.log("Model Is Loaded");
}

function gotposes(results)
{
	if(results.length>0)
	{
		console.log(results);
		rightWristx=results[0].pose.rightWrist.x;
		rightWristy=results[0].pose.rightWrist.y;
		nosey=results[0].pose.nose.y;
	}
}

function draw() {
	game();
}






