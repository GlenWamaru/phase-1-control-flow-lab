function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2500) {
    return "No can do.";
  } else if (distance > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}


function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else if(city != "NYC") {
    return "No go.";
  }

}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
