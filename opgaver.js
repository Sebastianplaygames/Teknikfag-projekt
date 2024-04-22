class Opgaver{

 
  
  let buttonchecker;
constructor(){
    let button = createButton('click me');
    button.position(150, 350);
    
    button.mousePressed(opgrader);
    
    
    buttonmaker = false;
    
    bladre = 0;
    
    opgavebestemmer = 1;
    
    buttonchecker = true;
    
    forklare = false;
    
}



function matopger(){

if(opgavebestemmer == 1){
    
    
   
    
    
    
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
    if(actualstuff == 37){
    
    rect(300,300,100,100)
    
    }
    

    
    //anden del slut
    
  }
  

  
  
  if(opgavebestemmer == 2){
    
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
   
   actualstuff = 0;
   buttonmaker = false;
  buttonchecker = true;
         bladre = 0;
   forklare = false;
 
  
   opgavebestemmer = opgavebestemmer + 1;
    }
  
 
   }
    
    
    
    
  }
    
    
    
  
  if(opgavebestemmer == 3){
    
    
    

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
       if(actualstuff == 3){
    
    rect(300,300,100,100)
    
    }
    
    }

  }
  
  console.log(bladre)
  console.log(buttonchecker)
  console.log(opgavebestemmer)
  
  if(opgavebestemmer == 4){
 
  if(bladre == 0){
    opgavebestemmer = opgavebestemmer - 1;
    
    }
    

  
   if(opgavebestemmer == 4){
 if(buttonchecker == false){
    
  myButton.remove();
  myInput.remove();
  klikvidere.remove();
  forklaring.remove(); 
   
   actualstuff = 0;
   buttonmaker = false;
  buttonchecker = true;
         bladre = 0;
   forklare = false;
 
  
   opgavebestemmer = opgavebestemmer + 1;
    }
  
   
    
   }
   
    
   }
  

  
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
    
    actualstuff = stuff;
}

function typing() {
    stuff = this.value();
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
