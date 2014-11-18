// Global player object (later this will no longer be global)
var player = {
	items: [],
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
  var i1 = input.trim().toLowerCase();
  var i2 = i1.split(" ");
  var result = [];
  result.push(i2.shift());
  result.push(i2.join(" "));
  return result;
}

// perform the desired player action
function execute (command) {
	var action = command.shift();
  var object = command.shift();
  var method = player[action];
  method(object);
}

// display any results/changes on the page
function report () {
  var note = document.querySelector('#inventory > ul');
  for (var i = 0; i < player.items.length; i++){
    note.innerHTML = player.items[i];
  }
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

