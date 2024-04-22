let player,farmer,doggo,baggrund, floor, bcollider;
let playerimg;
//
let matopgintro1, matopgintro2, matopg1, matopg2, forklaring1, forklaring2, opgavebestemmer;
let bladre, forklare;
let forklaring;
let klikvidere;
let myButton;
let myInput;
let myText;
let svar;
let bgColor;
let indtastedesvar;
let buttonmaker;
let indeiopgave;
let buttonchecker;
let altimappet = 1000;
function preload(){
  img = loadImage('doggo2.png');

  matopgintro1 = loadImage('matopgintro1.webp'); 
  matopgintro2 = loadImage('matopgintro2.webp');  
  
  matopg1 = loadImage('matopg1.webp');

  matopg2 = loadImage('matopg2.webp');
  
  forklaring1 = loadImage('forklaring1.webp');
  
  forklaring2 = loadImage('forklaring2.webp');

  //background colliders
  bcollider = new Sprite() ;
  bcollider.x = 260;
  bcollider.y = 0;
  bcollider.d = 0.001;
  bcollider.removeColliders();
  bcollider.rotationLock = true;
  bcollider.collider = "static"
  //house
  bcollider.addCollider(0.518,-13,105,148)
  bcollider.addCollider(25.518,-10,61,190)
  bcollider.addCollider(-60.518,-12,20,100)
  bcollider.addCollider(-82.518,-12,24,65)

  bcollider.addCollider(-7,-181,70) // patio
  bcollider.addCollider(-133,-133,20) //well

  bcollider.addCollider(-507,35,30) //tree
  bcollider.addCollider(-375,90,55) //big tree
  bcollider.addCollider(-387,233,30) // lower tree
//lake
  bcollider.addCollider(-390,-180,40)
  bcollider.addCollider(-390,-220,30) 
  bcollider.addCollider(-420,-180,40) 
  bcollider.addCollider(-470,-150,60) 
  bcollider.addCollider(-470,-120,40) 
  bcollider.addCollider(-510,-200,100) 

//background setup
  baggrund = new Sprite(0,30)
  baggrund.collider = 'none';
  baggrund.img = 'skolewood.webp'


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

  dogOwner = new Sprite(-276, 214,48, 25)
  dogOwner.spriteSheet = 'dogowner.png'; 
  dogOwner.collider = "none"
  dogOwner.anis.frameDelay = 10;
  
  dogOwner.addAnis({
		stand: { row: 0, frames:6 }
	  });
  dogOwner.changeAni('stand');


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
  player.anis.offset.x = 2;
  player.anis.frameDelay = 5;
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
  
  indeiopgave = false
  
  
  buttonmaker = false;
  
  bladre = 0;
  
  opgavebestemmer = 0;
  
  buttonchecker = true;
  
  forklare = false;
  
  allSprites.pixelPerfect = true;
	
// player collider
  player.removeColliders();
  player.addCollider (0,4,20);

}

function draw() {
 	bcollider.debug = mouse.pressing();
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

console.log(player.x,player.y)
//}

//function matopgaver(){

  if (mouse.x >= 145 && mouse.x <= 160 && mouse.y >= -25 && mouse.y <= 0 && indeiopgave == false){
   indeiopgave = true;  
   baggrund.x = baggrund.x+altimappet
   bcollider.x = bcollider.x+altimappet
   farmer.x = farmer.x+altimappet
   opgavebestemmer = 1
  }
if(opgavebestemmer == 1 && indeiopgave == true){
  //første del hvor introduktioenen er.
  
  if(bladre == 0){
  
image(matopgintro1,0,0);
    
    //buttonmaker når den er false laver knappen til at gå til næste trin
    if(buttonmaker == false){
    
    klikvidere = createButton('next');
    
    klikvidere.position(180 , 200);
    
    klikvidere.mousePressed(bladrer);
    
    buttonmaker = true;
    }
    

    
  }
    //anden del hvor selve opgaven er.
  if(bladre == 1){
    
    
    image(matopg1,0,0);
    
  //buttonmaker når den er rigtig laver knapperne til selve opgaven
  if(buttonmaker){
   
  myButton = createButton('godkend');
  
  myInput = createInput('svar');
  
  myInput.position(20, 250);
  
  myButton.position(25 + myInput.width, 250);
    
    myButton.mousePressed(gemværdi);
    
    myInput.input(typing);
    
    
     forklaring = createButton('forklar');
    
    forklaring.position(250 , 20);
    
    forklaring.mousePressed(forklar);
    

    buttonmaker = false;
    
  }
    
    
    
    //buttonchecker fjerner skip knappen for introen
              if(buttonchecker == true){
  
klikvidere.remove();

buttonchecker = false;

  }
    
    //hvis forklar knappen trykkes kommer forklaringen frem
     if(forklare){
    
    image(forklaring1,300,0);
    
    }
  
    
    
    
    
    
}
  

  
    //resultatet
  if(indtastedesvar == 37){
    baggrund.x = baggrund.x-altimappet
    bcollider.x = bcollider.x-altimappet
    farmer.x = farmer.x-altimappet
    indeiopgave = false
 opgavebestemmer = 2

    //hvis introduktionen ikke er skippet så kommer man tilbage på opgaven
  
    if(bladre == 0){
      opgavebestemmer = opgavebestemmer - 1;
      
      }
      
    
    //her fjernes knapperne fra den forrige opg
     if(opgavebestemmer == 2){
    if(buttonchecker == false){
      
    myButton.remove();
    myInput.remove();
    
    forklaring.remove(); 
     
    indtastedesvar = 0;
     buttonmaker = false;
    buttonchecker = true;
           bladre = 0;
     forklare = false;
    
    
     opgavebestemmer = 0;
      }
    
     
      
     }
 
  
      
  }
  
  
  
  
  
  //anden del slut
  
}

if (mouse.x >= -280 && mouse.x <= -269 && mouse.y >= 198 && mouse.y <= 215 && indeiopgave == false){
    indeiopgave = true;  
    baggrund.x = baggrund.x+altimappet
    bcollider.x = bcollider.x+altimappet
    dogOwner.x = dogOwner.x+altimappet
      doggo.x = doggo.x+altimappet
    opgavebestemmer = 3
    
}
if(opgavebestemmer == 3 && indeiopgave == true){
  
  
  

//første del
  if(bladre == 0){
  
image(matopgintro2,0,-60);
    
    
    if(buttonmaker == false){
    
    klikvidere = createButton('next');
    
    klikvidere.position(180 , 200);
    
    klikvidere.mousePressed(bladrer);
    
    buttonmaker = true;
    }
    
  }
  
  //anden del
  
  if(bladre == 1){
  
    image(matopg2,0,0);
    
      if(buttonmaker){
   
  myButton = createButton('godkend'); 
  
  myInput = createInput('svar');
  
  myInput.position(20, 250);
  
  myButton.position(25 + myInput.width, 250);
    
    myButton.mousePressed(gemværdi);
    
    myInput.input(typing);
    
    
     forklaring = createButton('forklar');
    
    forklaring.position(250 , 20);
    
    forklaring.mousePressed(forklar);
    

    buttonmaker = false;
    
  }
  
  if(buttonchecker == true){
  
klikvidere.remove();

buttonchecker = false;

  }
    
    if(forklare){
    
    image(forklaring2,300,0);
    
    }
     if(indtastedesvar == 3){
      baggrund.x = baggrund.x-altimappet
      bcollider.x = bcollider.x-altimappet
      dogOwner.x = dogOwner.x-altimappet
      doggo.x = doggo.x-altimappet
 opgavebestemmer = 0
 indeiopgave = false
      myButton.remove();
      myInput.remove();
      klikvidere.remove();
      forklaring.remove(); 
       
      indtastedesvar = 0;
       buttonmaker = false;
      buttonchecker = true;
             bladre = 0;
       forklare = false;
      
    
         
          
         }
  
  }
  
  }



console.log(bladre)
console.log(buttonchecker)
console.log(opgavebestemmer)





//console.log(forklare)
//console.log(opgavebestemmer)
//console.log(stuff)
 
}
  
  
  




function opgrader(){

opgavebestemmer = opgavebestemmer + 1;


if(opgavebestemmer >= 5){
opgavebestemmer = 1;

}

}


function gemværdi() {
  
  indtastedesvar = svar;
}

function typing() {
  svar = this.value();
}

function bladrer(){

bladre = bladre + 1;

if(bladre == 2){
  bladre = 0
}

}


function forklar(){



forklare = !forklare;

  



}