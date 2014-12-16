function has(item){
  for(var i = 0; i < player.items.length; i++){
    if(player.items[i] === item)
      return true;
  }
  return false;
}

function caseRemote(){
  if(player.location === map.arr[0]){
    map.arr[0].description = "The TV turns on and displays the numbers 4 9 7 3. You face the hallway and the door to the bathroom leads behind you.";
  }
}

function caseMop(){
  if(player.location === map.arr[3]){
    if(has("mop") === true ){
      map.arr[3].description = "The end of your mop pierced through the zombie's skull, but broke in half in the process. Looking around the room, you spot some bandages and keys.";
    }
  }
  else
    alert("There's no use for that now.");
}

