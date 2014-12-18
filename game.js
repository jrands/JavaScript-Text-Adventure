
var scene = document.querySelector('#descrip');
var note = document.querySelector('#items');

var player = {
	items: [],
	location: map.arr[0],
	take: function(item){
	  console.log(this.location.items[0]);
	  var contains = false;
	  for(var i = 0; i < this.location.items.length; i++){
	    if(this.location.items[i] === item){
	      contains = true;
		    this.items.push(item);
		  }
		}
		if(contains === false){
		  alert("You search the room but cannot find such an item.");
		}
	},
	
	drop: function(item){
		var pos = this.items.indexOf(item);
		if (pos >= 0) {
			this.items.splice(pos, 1);
		}
	},
	
	moveto: function(loc){
    var contains = false; var contains2 = false;
    for (var i = 0; i < map.arr.length; i++){
      if (map.arr[i].name === loc){
        if( isConnected(map.arr.indexOf(this.location),i) === true){
          if(loc !== map.arr[5].name){
            contains = true;
            this.location = map.arr[i];
          } //checks if player is trying to move to office
          else if(has("keys") === false){
            alert("This door is locked."); 
            var contains2 = true;
          }
          else{
            this.location = map.arr[5];
            var contains2 = true;
          }
        }
      }
    }
    if( contains === false && contains2 === false){
      alert("You cannot go to this location.");
    }
  },
  
  use: function(item){
    
    switch(item){
      case "remote": caseRemote(); break;
      case "mop": caseMop(); break;
      case "safe": caseSafe(); break;
      default: alert("You don't have that item in your inventory!");
    }
    
    
  },
  
	charCreate: function(){

	  scene.innerHTML = "... \n my name?"
	}
}

// parse and normalize the user input string
function interpret (input) {
  console.log("calling interpret");
  var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
  cmd.action = tokens.shift();
  cmd.target = tokens.join(" ");
  return cmd;
}

// perform the desired player action
function execute (command) {
	console.log("calling execute"); // remove when finished debugging
  player[command.action](command.target);
}

// display any results/changes on the page
function report () {
  displayItems();
  displayLoc(player.location);
  console.log(player.location);
  console.log(player.items);
}

function displayItems (){
  note.innerHTML = "";
  for (var i = 0; i < player.items.length; i++){
    var item = document.createElement("li");
    item.textContent = player.items[i];
    note.appendChild(item);
  }
}

// run one pass of the game loop
function gameStep (input) {
	var cmd = interpret(input); // parse the user input
	var result = execute(cmd); // run the desired command
	report(result); // display the results on the screen
}

var gameStart = function() {
  //charCreate();
  displayLoc(player.location);
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if (event.keyCode === 13) {
			gameStep(this.value);
		}
	});
}

window.onload = gameStart;

