

var inpt = document.getElementById("inp");
var p = document.getElementById("content");
var list = document.getElementById("item");
var cn=0;

inpt.onkeyup = function(e) {
	// body...
	p.innerHTML = inpt.value;

}


function add_btn(){
	
	if(inpt.value != ""){
		var item = document.createElement("li");
		item.className="it";

		item.textContent = inpt.value + " " +Date();
		list.appendChild(item);
		inpt.value="";
		p.innerHTML="";
	}
	
}

function remove_btn(){
	if(list.lastChild){
	list.removeChild(list.lastChild);
	}
}

function change_font(){
	
	if(cn%2==0){
		console.log("yoho");
		list.style.fontFamily="san-seriff";
	}else{
		list.style.fontFamily="verdana";
	}

	cn++;
}