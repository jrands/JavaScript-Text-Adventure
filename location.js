
function Location(name, description, items){
  
  this.name = name;
  
  this.description = description;
  
  this.items = items;
  
}

var map = {}

map.locations = {

  area0: new Location ("room 107", "You awaken to find yourself in a bleak and gloomy hospital room. You've been in a coma the past few days, unable to recall how you got here. The old CRT TV hanging from the ceiling is flickering and giving off an unsettling static noise. There is a remote on the dresser next to you.", ["remote"]),

  area1: new Location ("bathroom", "The bathroom of room  107 is very small; it contains a toilet, sink, and a shower. It's been days since you had water, you're reminded of your dehydration by he faucet that is dripping slowly. There's a cup lying on the floor. ", ["cup"] ),

  area2: new Location ("hallway", "A long hallway that has several flickering lights at the end of it. It is lined with other patient rooms, and there is a lobby at the end of the hall. Room 105 is left open a crack. There is a janitorial closet as well." ),

  area3: new Location ("room 105", "A zombie is standing in front of you! Do you have something to fend it off?", ["keys"] ),

  area4: new Location ("janitorial closet", "The closet contains lots of cleaning supplies. You see various tools such as a bucket, a mop, and rubber gloves.", ["bucket", "mop", "rubber gloves"]),
  
  area5: new Location ("office", "An office belonging to head surgeon. The charts and graphs that line the wall make little sense to you. The desk with the small safe underneath catches your eye.", ["safe"]),
  
  area6: new Location ("lobby","There's a large group of zombies in front of you! You can't progress unless you have a way to get rid of them.", ["crowbar"]),
  
  area7: new Location ("parking lot", "You check all the cars in the parking lot. Each one you check has been siphoned of gas until you reach a red pickup truck. The keys are left in the ignition, but the car won't start. You may be able to jump start it somehow.")
};

map.arr = [

map.locations.area0,
map.locations.area1,
map.locations.area2,
map.locations.area3,
map.locations.area4,
map.locations.area5,
map.locations.area6,
map.locations.area7,

];

map.connections = [

  [0, 1, 1, 0, 0, 0, 0, 0], //room 107
  [1, 0, 0, 0, 0, 0, 0, 0], //bathroom
  [1, 0, 0, 1, 1, 1, 1, 0], //hallway
  [0, 0, 1, 0, 0, 0, 0, 0], //room 105
  [0, 0, 1, 0, 0, 0, 0, 0], //janitorial closet
  [0, 0, 1, 0, 0, 0, 0, 0], //office
  [0, 0, 1, 0, 0, 0, 0, 1], //lobby
  [0, 0, 0, 0, 0, 0, 1, 0] //parking lot
];


var getLocation = function(){
  return map.locations.area0;
}

function isConnected(from, to) {
// check if there is a 1 in the corresponding cell of connections
  if(map.connections[from][to] === 1){
    return true;
  }
  else{
    return false;
  }
}

var displayLoc = function(loc){
  var scene = document.querySelector('#descrip');
  var currentLoc = document.querySelector('#loc');
  scene.innerHTML = loc.description;
  currentLoc.innerHTML = "Current Location: " + loc.name;
}