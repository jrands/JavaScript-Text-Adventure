
var note = document.querySelector('#inventory > ul');

var player = {
	items: [],
	location: map.arr[0],
	pickup: function(item){
		this.items.push(item);
	},
	drop: function(item){
		var pos = this.items.indexOf(item);
		if (pos >= 0) {
			this.items.splice(pos, 1);
		}
	},
	moveto: function(loc){
	  for (var i = 0; i < map.arr.length; i++){
	    if (map.arr[i].name === loc){
	      this.location = map.arr[i];
	    }
	  }
	},
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
  for (var i = 0; i < player.items.length; i++){
    note.innerHTML = player.items[i];
  }
  console.log(player.location);
  console.log(player.items);
}

// run one pass of the game loop
function gameStep (input) {
	var cmd = interpret(input); // parse the user input
	var result = execute(cmd); // run the desired command
	displayLoc(player.location);
	report(result); // display the results on the screen
}

var gameStart = function() {
  displayLoc(map.arr[0]);
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if (event.keyCode === 13) {
			gameStep(this.value);
		}
	});
}

window.onload = gameStart;

