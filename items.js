function has(item){
  for(var i = 0; i < player.items.length; i++){
    if(player.items[i] === item)
      return true;             
  }
  return false;
}

function caseRemote(){
  if(player.location === map.arr[0] && has("has"())){
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
    var code = document.querySelector("#action");
    if (code === 4973){
      alert("yay!");
    }
}

