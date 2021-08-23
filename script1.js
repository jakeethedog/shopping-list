var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}
function createList (){
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	var div = document.createElement("div");
	div.classList.add("container");
	ul.appendChild(div);
	//https://developer.mozilla.org/en-US/docs/Web/API/Element/append
	div.append(li, delButton);
	li.appendChild(document.createTextNode(input.value));
	delButton.classList.add("delClass");
	delButton.innerHTML='Delete';
	input.value="";
}
//task 1 line through
//https://www.w3schools.com/jsref/event_target.asp
function getLiEvent(event){
	if (event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
}
//task 2 delete list
function delList(event){
	if (event.target.className === "delClass"){
		event.target.parentElement.remove();
	}
}
//key press enter
input.addEventListener("keypress", function(event){
	if (inputLength() >0 && event.keyCode === 13){
	createList();}
})
//click on enter button
button.addEventListener("click", function(){
	if (inputLength() >0){
	createList();}
})
//click on list and delete button
ul.addEventListener("click",function(){
getLiEvent(event);
delList(event);
});
