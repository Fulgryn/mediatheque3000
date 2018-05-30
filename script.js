let btnNote = document.querySelector(".btn");
btnNote.addEventListener("click", function() {
	let note = prompt("Nouvelle note:");
    var parent = document.querySelector(".notes");
    var newNote = document.createElement("div");
    newNote.className = "col-sm-6 col-md-6";
    newNote.textContent = note;
    
    
    parent.appendChild(newNote);
});