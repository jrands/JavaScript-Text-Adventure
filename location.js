
function Location(name, description, val){
  
  this.name = name;
  
  this.description = description;
  
  this.items = [];
  
  this.val = val;
  
}

var map = {}

map.locations = {

  emptyloc: new Location ("", "That location doesn't exist.",  0),

  area0: new Location ("room 107", "You awaken to find yourself in a bleak and gloomy hospital room. You've been in a coma the past few days, unable to recall how you got here. The old CRT TV hanging from the ceiling is flickering and giving off an unsettling static noise. There is a dresser pushed up against the door that leads to the hallway. There is another door by the window that leads to the bathroom.", 1),

  area1: new Location ("bathroom", "The bathroom is very small; it contains a toilet, sink, and a shower. The faucet is dripping slowly. ", 2),

  area2: new Location ("hallway", "A long hallway that has several flickering lights at the end of it. It is lined with other patient rooms, and there is a lobby at the end of the hall. There is a janitorial closet as well. ", 3),

  area3: new Location ("room 105", "A zombie is in this room. The room contains a dresser, TV, and nightstand just like 107."),

  area4: new Location ("Janitorial Closet", "The closet contains lots of cleaning supplies. You see various tools such as a bucket, a mop, and rubber gloves.", 4),
  
  area5: new Location ("Office", "An office belonging to head surgeon. The charts and graphs that line the wall make little sense to you. The desk with all it's knick-knacks in the center of the room catches your eye.", 5),
  
  area6: new Location ("Lobby","You find yourself in the hostpital lobby. There are chairs and tables lined with magazines.", 6),
  
  area7: new Location ("Parking Lot", "The parking lot is virtually empty. The few remaining cars have been siphoned of gas.", 7)
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

//document.querySelector('#descri p').innerHTML = area0.description;

map.connections = [

  [0, 1, 1, 0, 0, 0, 0, 0], //room 107
  [1, 0, 0, 0, 0, 0, 0, 0], //bathroom
  [1, 0, 0, 1, 1, 1, 1, 0], //hallway
  [0, 0, 1, 0, 0, 0, 0, 0], //room 105
  [0, 0, 1, 0, 0, 0, 0, 0], //janitorial closet
  [0, 0, 1, 0, 0, 0, 0, 0], //office
  [0, 0, 1, 0, 0, 0, 0, 1], //lobby
  [0, 0, 0, 0, 0, 1, 0, 0] //parking lot
  
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

/*
function numLocation(name){
  for(var i in map.arr){
    if(name === locations[i].name)
      return i;
  }
}*/

function testMap() {
  
}

var displayLoc = function(loc){
  var scene = document.querySelector('#descrip');
  var currentLoc = document.querySelector('#loc');
  scene.innerHTML = loc.description;
  currentLoc.innerHTML = "Current Location: " + loc.name;
}