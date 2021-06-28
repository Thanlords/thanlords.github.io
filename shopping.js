var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


function getlength(){
	return input.value.length;
}
function createElement(){
	var li = document.createElement("li");	
	var delbutton = document.createElement("button")
	delbutton.classList.add("deletebutton")
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + "  ";
	li.appendChild(delbutton)
	ul.appendChild(li,delbutton);
	delbutton.innerHTML = "Delete";

	input.value = "";

}
function deleteLiElement(event){
	event.parentNode.remove()
}
function userclick(){
	if (getlength()>0){
		createElement();
	}
}
function userenter(event){
	if (getlength()>0 && event.keyCode === 13){
		createElement();
	}
}
function toggleLiElement(event){
	event.classList.toggle('done')
}

button.addEventListener("click",userclick);
input.addEventListener("keypress",userenter);
ul.addEventListener("click", function(event) {
	if(event.target.nodeName === "LI"){
		toggleLiElement(event.target);
	}
	else if(event.target.nodeName === "BUTTON") {
		deleteLiElement(event.target);
	}
});
