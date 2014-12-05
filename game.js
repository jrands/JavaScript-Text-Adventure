// Global player object (later this will no longer be global)
var player = {
	items: [],
	location: "",
	pickup: function(item){
		this.items.push(item);
	},
	drop: function(item){
		var pos = this.items.indexOf(item);
		if (pos >= 0) {
			this.items.splice(pos, 1);
		}
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
  var note = document.querySelector('#inventory > ul');
  for (var i = 0; i < player.items.length; i++){
    note.innerHTML = player.items[i];
  }
  console.log(map.locations.area0);
  console.log(player.items);
}

// run one pass of the game loop
function gameStep (input) {
	var cmd = interpret(input); // parse the user input
	var result = execute(cmd); // run the desired command
	report(result); // display the results on the screen
	
}

var gameStart = function() {
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if (event.keyCode === 13) {
			gameStep(this.value);
		}
	});
}

window.onload = gameStart; // game starts only after the page is loaded

