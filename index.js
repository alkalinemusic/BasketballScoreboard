let homeCount = 0
let guestCount = 0

let guestScore = document.getElementById("guestScore")
let homeScore = document.getElementById("homeScore")

guestScore.textContent


function addOneHome() {
    homeCount += 1
    homeScore.textContent = homeCount    
}

function addTwoHome() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function addThreeHome() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function addOneGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function addTwoGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function addThreeGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
}