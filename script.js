const computerChoices=['Камък', 'Ножица', 'Хартия']
const computerChoice=document.getElementById('computer')
const playerChoice=document.getElementById('player')
const winnerChek=document.getElementById('winner')


let  computerTurn
let playerTurn
let result=''



function playLogic(playerTurn){
 computerTurn=computerChoices[Math.floor(Math.random()*3)]
  
  
  if(playerTurn===computerTurn){
    result= 'Равенство!'
  }else if(playerTurn==='Камък'){
    result= (computerTurn==='Ножица') ? 'Победа !':'Загуба !'
  }else if(playerTurn==='Ножица'){
    result= (computerTurn==='Хартия')? 'Победа !':'Загуба !'
  }else if(playerTurn==='Хартия'){
    result=( computerTurn==='Камък')? 'Победа !' : 'Загуба !'
  }

  playerChoice.textContent=`Играч: ${playerTurn}`
  computerChoice.textContent=`Компютър: ${computerTurn}`
  winnerChek.textContent=result


}





