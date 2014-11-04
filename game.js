var inputBox = document.querySelector('#action');

console.log(inputBox.tagName);
console.log(inputBox.parentNode.tagName);

var title = document.querySelector('#header')
title.innerHTML = "Hello!"

var newParagraph = function(txt){
  var newPara = document.createElement("p");
  var newText = document.createTextNode(txt);
  newPara.appendChild(newText);
  document.body.appendChild(newPara);
}
var checkItem = function(){
  var inv = document.querySelector("#inventory");
  output.innerHTML = "You currently have in your posession: " + inv;
}