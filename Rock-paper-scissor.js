  const RandomNum = Math.random();

  function ComputerMove(computerMove){



  if(RandomNum > 0 && RandomNum <= 1/3 ){

    computerMove ="Rock";
    
  }
  else if(RandomNum > 1/3 && RandomNum <= 2/3){

     computerMove ="Paper";
     

  }
  else if(RandomNum > 2/3 && RandomNum <= 1){

     computerMove ="Scissors";
     
     
  }


return computerMove;


  }
  

  // User Move

    let rockBtn = document.querySelector('.Rock-btn');
     
    let paperBtn = document.querySelector('Paper-btn');
     
    let scissorsBtn = document.querySelector('.Scissos-btn');

    let result = document.querySelector('.Result').innerHTML;


    function playGame(usermove){

        if(usermove === ComputerMove){

          result.innerHTML = "Tie Game!";

        }



    
    }

    