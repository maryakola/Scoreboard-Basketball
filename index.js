let homescoreEl = document.getElementById("home-score")
let homeCount = 0

let guestscoreEl = document.getElementById("guest-score")
let guestCount = 0

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestcoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")


let resetButton = document.getElementById("reset-home-score")
    console.log(resetButton)


function homeAddPoint(){
        homeCount += 1
        homescoreEl.innerText = homeCount
        console.log(homeCount)
    }
function homeAdd2Points(){
    homeCount += 2
    homescoreEl.innerText = homeCount
    console.log(homeCount)
}

function homeAdd3Points(){
    homeCount += 3
    homescoreEl.innerText = homeCount
    console.log(homeCount)
}



function guestAddPoint(){
    guestCount += 1
    guestscoreEl.innerText = guestCount
    console.log(guestCount)

}

function guestAdd2Points(){
    guestCount += 2
    guestscoreEl.innerText = guestCount
    console.log(guestCount)

}

function guestAdd3Points(){
    guestCount += 3
    guestscoreEl.innerText = guestCount
    console.log(guestCount)

}

function reset(){
    homescoreEl.textContent = 0
    guestscoreEl.textContent = 0
    
    
}

