// Code your solution in this file!
function distanceFromHqInBlocks(dblock){
  return Math.abs(dblock - 42);
}

function distanceFromHqInFeet(dblock){
  return Math.abs(dblock - 42) * 264;
}
function distanceTravelledInFeet(sblock, eblock){
  return Math.abs(sblock - eblock) * 264;
}
function calculatesFarePrice(sblock, eblock){
  let distance = Math.abs(sblock - eblock) * 264;
  if (distance <= 400){
    return 'your ride is on the house';
  }
  else if (distance > 400 && distance <= 2000) {
    return 'your fees is '(distance - 400)*0.02;  
  }
  else if (distance > 2000 && distance <= 2500){
    return 'your fees is ' 25;
  }
  else {
    return 'cannot travel that far'
  }
}
