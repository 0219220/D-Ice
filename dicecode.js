var diceArray= new Array();

diceArray[0]=new Image();
diceArray[0].src='images/dice6.png';

diceArray[1]=new Image();
diceArray[1].src='images/dice5.png';

diceArray[2]=new Image();
diceArray[2].src='images/dice4.png';

diceArray[3]=new Image();
diceArray[3].src='images/dice3.png';

diceArray[4]=new Image();
diceArray[4].src='images/dice2.png';

diceArray[5]=new Image();
diceArray[5].src='images/dice1.png';
  winner();

  randomNumber1=0;
  randomNumber2=0;

    
    function winner(){
    let h1= document.getElementsByTagName('h1')[0];

    var randomNumber1=Math.floor(Math.random()* diceArray.length);
    document.getElementById("dicer").src= diceArray[randomNumber1].src;

    var randomNumber2=Math.floor(Math.random()* diceArray.length);
     document.getElementById("dicer2").src= diceArray[randomNumber2].src;
    
    
        if(randomNumber1<randomNumber2){
    h1.innerHTML= "Player 1 wins";}
        else if(randomNumber1>randomNumber2){ 
        h1.innerHTML="Player 2 wins";}
        else{
            h1.innerHTML="Tie";}
        }
    
        
        
        
    