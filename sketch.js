let player,player2, floor, test;
let playerimg;

function preload(){
  img = loadImage('doggo2.png');

//background setup
  baggrund = new Sprite(0,30)
  baggrund.collider = 'none';
  baggrund.img = 'skole.webp'


//farmer npc sprite
  farmer = new Sprite(145, -13,68.33, 73.33)
  farmer.spriteSheet = 'farmer1.png'; 
  farmer.collider = "none"
 // farmer.diameter = 32
  farmer.anis.offset.x = 2;
  farmer.anis.frameDelay = 8;
  farmer.scale = 0.6
  	farmer.addAnis({
		stand: { row: 0, frames:4 }
	});
  	farmer.changeAni('stand');

//dog npc sprite
    doggo = new Sprite(-250, 240,109.166, 105)
    doggo.spriteSheet = 'doggo2.png'; 
    doggo.collider = "none"
    doggo.anis.offset.x = 2;
    doggo.anis.frameDelay = 8;
    doggo.scale = 0.4
      doggo.addAnis({
      stand: { row: 0, frames:3 }
    });
      doggo.changeAni('stand');

  //player sprite
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
}

function setup() {
	new Canvas(600, 400);
  allSprites.pixelPerfect = true;
	
// player collider
     player.removeColliders();
   	 player.addCollider (0,4,20);
}

function draw() {
 	player.debug = mouse.pressing();
	clear();

//camera setup
camera.x = player.x;
camera.y = player.y;
camera.zoom = 2;
 
  
  
// player movement + boundries
player.rotationLock = true;
  if (kb.pressing('left')){
    player.vel.x = -2;
    player.changeAni('run') 
	player.mirror.x = true;
}
else if (kb.pressing('right')) {player.vel.x = 1.5;
 player.changeAni('run') 
 player.mirror.x = false;
}
  else player.vel.x = 0;
    if (kb.pressing('up')){ player.vel.y = -1.5;
  player.changeAni('wup')  
}
else if (kb.pressing('down')) {player.vel.y = 1.5;
 player.changeAni('run') 
}
  else player.vel.y = 0;
  
  if (player.vel.y == 0 && player.vel.x == 0){
    player.changeAni('stand')  
  }

  if(player.x >= width/2-2){
    player.vel.x = -3
  } else if(player.x <= -width/2+2) {
    player.vel.x = 3
  } if(player.y >= height/2+70){
    player.vel.y = -3
  } else if(player.y <= -height/2-20) {
    player.vel.y = 3
  }

}