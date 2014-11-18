
function Location(name, description){
  
  this.name = name;
  
  this.description = description;
  
  this.items = [];
  
}

var map = {}

map.locations = {

  area0: new Location ("ER Room 107", "The Room you recently woke up in. You spent the last few days in this room while in your coma. It is bleak and gloomy; the window lets in very little light. The old CRT TV hanging from the ceiling is flickering and giving off an unsettling static noise. There is a dresser pushed up against the door that leads to the hallway. There is another door by the window that leads to the bathroom."),

  area1: new Location ("Bathroom", "The bathroom is very small; it contains a toilet, sink, and a shower. The faucet is dripping slowly. "),

  area2: new Location ("Hallway", "A long hallway that has several flickering lights at the end of it. It is lined with other patient rooms, and there is a lobby at the end of the hall. There is a janitorial closet as well. "),

  area3: new Location ("ER Room 105", "A zombie is in this room. The room contains a dresser, TV, and nightstand just like 107."),

  area4: new Location ("Janitorial Closet", "The closet contains lots of cleaning supplies. You see various tools such as a bucket, a mop, and rubber gloves.")
};

map.connections = [

  [0, 1, 1, 0, 0]
  [1, 0, 0, 0, 0]
  [1, 0, 0, 1, 1]
  [0, 0, 1, 0, 0]
  [0, 0, 1, 0, 0]
  
];

map.test = function(){

  for (var i = 0; i < 5; i++){
    if ([0][i] === 1)
      console.log([0][i].name)
  }

};

map.test();



