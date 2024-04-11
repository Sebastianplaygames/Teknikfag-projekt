let player,player2, floor, test;
let playerimg;
function preload(){
  baggrund = new Sprite(0,30)
   baggrund.collider = 'none';
  baggrund.img = 'funny.png'
  baggrund.diameter = 10
  baggrund.scale = 0.25
  
  //(48,30)
  
  player = new Sprite(20, 20,32, 32)
  player.spriteSheet = 'questKid.png';
  player.debug = (0,0,30,10);
player.diameter = 32
  player.anis.offset.x = 2;
  player.anis.frameDelay = 8;
  	player.addAnis({
		run: { row: 0, frames: 8 },
		idleup: { row: 2, frames: 6 },
		wup: { row: 4, frames: 8,},
		down: { row: 5, frames: 6 },
		stand: { row: 3 }
	});
  	player.changeAni('stand');
  
//  player.setCollider("rectangle",0,0,40,50);
  
}

function setup() {
 
	new Canvas(600, 340);
  	allSprites.pixelPerfect = true;
	
  

  
	
	floor = new Sprite(250, 200, 500, 40, 'static');
    test = new Sprite(100, 100, 50,50, 'static');
     player.removeColliders();
   	 player.addCollider (0,2,24);
}

function draw() {
 	player.debug = mouse.pressing();
	clear();

    camera.x = player.x;
	camera.y = player.y;
camera.zoom = 2;
  player.rotationLock = true;
 // player.setCollider ("circle",0,0,40,50);
  
 
  
  
   
  if (kb.pressing('left')){
    player.vel.x = -2;
    player.changeAni('run') 
	player.mirror.x = true;
}
else if (kb.pressing('right')) {player.vel.x = 2;
 player.changeAni('run') 
 player.mirror.x = false;
}
  else player.vel.x = 0;
    if (kb.pressing('up')){ player.vel.y = -2;
  player.changeAni('wup')  
}
else if (kb.pressing('down')) {player.vel.y = 2;
 player.changeAni('run') 
}
  else player.vel.y = 0;
  
  if (player.vel.y == 0 && player.vel.x == 0){
    player.changeAni('stand')  
  }
  
}

function eksempel(){
  rect(20,20,20, 'static')
  background(testimg);
 // baggrund.image = testimg;
}
