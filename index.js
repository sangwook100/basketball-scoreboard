let homepoint = 0;
let guestpoint = 0;
let homeScore = document.querySelector("#home-points");
let guestScore = document.querySelector("#guest-points");

function addPlusOneToHome() {
  homepoint += 1;
  homeScore.innerText = homepoint;
  whoIsWinning();
}

function addPlusTwoToHome() {
  homepoint += 2;
  homeScore.innerText = homepoint;
  whoIsWinning();
}

function addPlusThreeToHome() {
  homepoint += 3;
  homeScore.innerText = homepoint;
  whoIsWinning();
}

function addPlusOneToGuest() {
  guestpoint += 1;
  guestScore.innerText = guestpoint;
  whoIsWinning();
}

function addPlusTwoToGuest() {
  guestpoint += 2;
  guestScore.innerText = guestpoint;
  whoIsWinning();
}

function addPlusThreeToGuest() {
  guestpoint += 3;
  guestScore.innerText = guestpoint;
  whoIsWinning();
}

function whoIsWinning() {
  if (homepoint > guestpoint) {
    homeScore.style.backgroundColor = "#60b347";
    guestScore.style.backgroundColor = "#000";
  } else if (guestpoint > homepoint) {
    homeScore.style.backgroundColor = "#000";
    guestScore.style.backgroundColor = "#60b347";
  } else {
    homeScore.style.backgroundColor = "#ffd43b";
    guestScore.style.backgroundColor = "#ffd43b";
  }
}

let homefoul = document.getElementById("home-team-foul");
let guestfoul = document.getElementById("guest-team-foul");
let homeTeamFoul = 0;
let guestTeamFoul = 0;
function addPlusOneHomeFoul() {
  homeTeamFoul += 1;
  homefoul.innerText = homeTeamFoul;
  homeTeamFreeThrow();
}

function addPlusOneGuestFoul() {
  guestTeamFoul += 1;
  guestfoul.innerText = guestTeamFoul;
  guestTeamFreeThrow();
}

function homeTeamFreeThrow() {
  if (homeTeamFoul > 4) {
    homefoul.style.backgroundColor = "#ffa94d";
  }
}

function guestTeamFreeThrow() {
  if (guestTeamFoul > 4) {
    guestfoul.style.backgroundColor = "#ffa94d";
  }
}

function resetFouls() {
  homeTeamFoul = 0;
  guestTeamFoul = 0;
  homefoul.innerText = 0;
  guestfoul.innerText = 0;
  homefoul.style.backgroundColor = "#000";
  guestfoul.style.backgroundColor = "#000";
}
