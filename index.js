let defaultHome = 00
let defaultAway = 00

let homeDisplay = document.getElementById("homeScore")
let awayDisplay = document.getElementById("awayScore")
let homeButtons = document.querySelectorAll("#homeButtonArea .scoreBtn")
let awayButtons = document.querySelectorAll("#awayButtonArea .scoreBtn")
let newGameBtn = document.getElementById("newGame")


function checkClass() {
    if (defaultHome > defaultAway){
        homeDisplay.classList.add("winning")
        awayDisplay.classList.remove("winning")
    } else if (defaultHome == defaultAway) {
        awayDisplay.classList.remove("winning")
        homeDisplay.classList.remove("winning")
    } else {
        homeDisplay.classList.remove("winning")
        awayDisplay.classList.add("winning")
    }
}



homeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
       const buttonValue = event.target.value;
      defaultHome += Number(event.target.value)
      homeDisplay.textContent = defaultHome
      checkClass()
      
    });
  })
  
  awayButtons.forEach(button => {
    button.addEventListener('click', (event) => {
       const buttonValue = event.target.value;
      defaultAway += Number(event.target.value)
      awayDisplay.textContent = defaultAway
      checkClass()
    });
  })
  
  function resetGame() {
    defaultHome = 00
    defaultAway = 00
    homeDisplay.textContent=00
    awayDisplay.textContent=00
    checkClass()
  }
  
  
  
  newGameBtn.addEventListener("click", resetGame )
  
  
  
  
  


