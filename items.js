function has(item){
  for(var i = 0; i < player.items.length; i++){
    if(player.items[i] === item)
      return true;             
  }
  return false;
}

function caseRemote(){
  if(player.location === map.arr[0] && has("remote")){
    map.arr[0].description = "The TV turns on and displays the numbers 4 9 7 3. You face the hallway and the door to the bathroom leads behind you.";
  }
}

function caseMop(){
  if(player.location === map.arr[3]){
    if(has("mop") === true ){
      map.arr[3].description = "The end of your mop pierced through the zombie's skull, but broke in half in the process. Looking around the room, you spot some bandages and a set of keys.";
      player.drop("mop");
    }
  }
  else
    alert("You can't use that now!");
}

function caseSafe(){
    map.arr[5].description = "You must enter the passcode for the safe for it to open.";
    if(safeCanOpen === true){
      player.items.push("revolver");
      map.arr[5].description = "Located inside the safe are old photos and a revolver. The gun could come in handy.";
    }
}

function caseRevolver(){
  if(player.location === map.arr[6] && has("revolver")){
    map.arr[6].description = "You fire a round of well placed bullets into the zombie's skulls. All the furniture in the lobby is overturned. On a high up shelf you see a crowbar. The two glass doors in the front lead out to the parking lot while the door behind you leads back into the hallway.";
  }
}

function caseCrowbar(){
  if (player.location === map.arr[7] && has("crowbar")){
    map.arr[7].description = "You pry open the trunk to find a pair of jumper cables!";
    player.items.push("jumper cables");
  }
}

function caseCables(){
  if (player.location === map.arr[7] && has("jumper cables")){
    map.arr[7].description = "You connect the cables to terminal and then to ground. After a few tries at the ignition again, the car finally starts. You can breathe a sigh of relief, you've escaped the dead for now!";
  }
}

function caseBucket(){
  if (player.location === map.arr[6] && has("bucket")){
    alert("You place the bucket on the floor in front of the shelf.");
    canReachCrowbar = true;
    player.drop("bucket");
  }

}
