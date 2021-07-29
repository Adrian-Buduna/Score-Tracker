//definde existing elements
const content = document.getElementById('containerId') ;
const addPlayer = document.getElementById('btn addId') ;
const inputText = document.getElementById('inpId') ;
const restartBtn = document.getElementById('btnRstartId') ;
const startBtn = document.getElementById('roundBtn') ;
const stopBtn = document.getElementById('stopRoundBtn') ;
//
let clicks = 0 ;
let Players = document.getElementById('playersId');
Players.textContent = 0 ;
let players = Number(Players.textContent) ;
// define variabel for storing clicks that add players
const displayPlayer = function(playerName){
  // stored variabels
  let points = 0 ;
  let rounds = 0 ;
  Players.textContent = clicks + 1
  // create main box
  let div = document.createElement('div') ;
  div.id = `.div--box` ;
  div.className = 'player-box' ;
  content.appendChild(div) ; 
  // create box elements
  let ul = document.createElement('ul') ;
  let li = document.createElement('li') ;
  let del =  document.createElement('button') ;
  let btn = document.createElement('button') ;
  let score =  document.createElement('p') ;
  let player = document.createElement('h1') ;
  let round = document.createElement('p') ;
  let inp = document.createElement('input') ;
  let br = document.createElement('br') ;
  //UL ELEMENT
  div.appendChild(ul) ;
  ul.id = `.ul--${clicks}` ;
  ul.className = 'ul-class' ;
  //LIST ELEMENT
  ul.appendChild(li) ;
  li.id = `.li--${clicks}` ;
  li.className = 'player-box' ;
  //PLAYER NAME ELEMENT
  li.appendChild(player) ;
  player.id = `.player--${clicks}` ;
  player.className = 'player-box' ;
  player.textContent = playerName ;
  //ADD POINTS BUTTON
  li.appendChild(btn) ;
  btn.id = `.btn--${clicks}` ;
  btn.className = 'hidden' ;
  btn.textContent = 'Add Points' ;
  btn.name ='add' ;
  let btnHidden = document.getElementById(`.btn--${clicks}`) ;
  //POINTS INPUT
  li.appendChild(inp) ;
  inp.id = `.inp--${clicks}` ;
  inp.className = `hidden` ;
  inp.placeholder = 'good job!' ;
  inp.type = 'number' ;
  let inpHidden = document.getElementById(`.inp--${clicks}`) ;
  // DELETE BUTTON
  li.appendChild(del) ;
  del.id = `.del--${clicks}` ;
  del.className = 'del-class' ;
  del.textContent = 'Delete Player' ;
  // BR
  li.appendChild(br) ;
  //SCORE
  li.appendChild(score) ;
  score.id = `.score--${clicks}` ;
  score.className = 'p-class';
  score.textContent = `Score: ${points}` ;
  //ROUND
  li.appendChild(round) ;
  round.id = `.round--${clicks}` ;
  round.className = 'p-class' ;
  round.textContent = `Round: ${rounds}` ;
  // delete specific player handler
  let deletePlayer = document.getElementById(`.del--${clicks}`) ;
  const deletePlayers = function(){
    div.removeChild(ul) ;
    Players.textContent = Number(Players.textContent) - 1 ;
    clicks -= 1 ;
  }
  deletePlayer.addEventListener('click', deletePlayers) ;
  //delet al players handler
  restartBtn.addEventListener('click', function(){
    content.removeChild(div) ;
    Players.textContent = Number(Players.textContent) * 0 ;
    clicks = 0 ;
  })// -- key version
  document.addEventListener('keydown', function (e) {
    if(e.key === "Escape"){ 
      content.removeChild(div) ;
      Players.textContent = Number(Players.textContent) * 0 ;
      clicks = 0 ;
    } ;
  }) ; 
  //add player score handler 
  const inputScore = document.getElementById(`.inp--${clicks}`) ;
  const addScore = document.getElementById(`.btn--${clicks}`) ;
  const addScorPlayerScore = function(){
      points +=  Number(inputScore.value) ;
      score.textContent = `Score: ${points}` ;
  };
    addScore.addEventListener('click', function(){
      addScorPlayerScore() ;
      inputScore.value = '' ;
    }) ;
    // Show btn, input and add round
    const passRound = function(){
    // --  hide btn and input and start game
    btnHidden.classList.remove(`hidden`) ;
    btnHidden.classList.add(`btn-class`) ;
     //   -- remove and add class for input 
    inpHidden.classList.remove(`hidden`) ;
    inpHidden.classList.add(`.inp-class`) ;
     // -- add player round for each score added
     rounds++ ;
     round.textContent = `Round: ${rounds}` ;
      // -- remove and add class for start round btn
     startBtn.classList.remove('btn-round');
     startBtn.classList.add(`hidden`);
     // -- remove and add class for stop round btn
     stopBtn.classList.remove(`hidden`);
     stopBtn.classList.add('btn-round');
      }
      // dont show btn and input 
      startBtn.addEventListener('click', function(){
        passRound()
      })
      // hide btn and input and start game
      const otherRound = function(){
        btnHidden.classList.remove(`btn-class`) ;
        btnHidden.classList.add(`hidden`) ;
         //  -- remove and add class for input 
        inpHidden.classList.remove(`.inp-class`) ;
        inpHidden.classList.add(`hidden`) ;
         // -- remove and add class for start round btn
         startBtn.classList.remove(`hidden`);
         startBtn.classList.add('btn-round');
         // -- remove and add class for stop round btn
         stopBtn.classList.remove('btn-round');
         stopBtn.classList.add(`hidden`);
          } 
          stopBtn.addEventListener('click', function(){
            otherRound() ;
      })
}
    // add player handler
    addPlayer.addEventListener('click', function(){
        displayPlayer(inputText.value) ;
        clicks ++ ;
        inputText.value = '' ;
    })// -- key version
    document.addEventListener('keydown', function (e) {
        if(e.key === "Enter"){ 
          displayPlayer(inputText.value) ;
          clicks ++ ;
          inputText.value = '' ;
        }
    }) ;