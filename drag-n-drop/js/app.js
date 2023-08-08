// select the item element
const items = document.querySelectorAll(".item");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	box.addEventListener("dragenter", onDragEnter);
	box.addEventListener("dragover", onDragOver);
	box.addEventListener("dragleave", onDragLeave);
	box.addEventListener("drop", onDrop);
});

function onDragEnter(event) {
	event.preventDefault();
	event.target.classList.add("drag-over");
	console.log(event.target);
}

function onDragOver(event) {
	event.preventDefault();
	event.target.classList.add("drag-over");
}

function onDragLeave(event) {
	event.target.classList.remove("drag-over");
	event.target.classList.remove("correct");
	event.target.classList.remove("incorrect");
}

function onDrop(event) {
	event.target.classList.remove("drag-over");

	// get the draggable element
	const id = event.dataTransfer.getData("text/plain");
	console.log(id);

	// if (event.target.dataset.target === "true") {
	// 	event.target.classList.add("correct");
	// } else {
	// 	event.target.classList.add("incorrect");
	// }

	const draggable = document.getElementById(id);

	// add it to the drop target
	event.target.appendChild(draggable);

	// display the draggable element
	draggable.classList.add("dropped");
	draggable.classList.remove("hide");
}

// attach the dragstart event handler
items.forEach((item) => {
	item.addEventListener("dragstart", onDragStart);
});

// handle the dragstart
function onDragStart(event) {
	event.dataTransfer.setData("text/plain", event.target.id);
	event.dataTransfer.dropEffect = "move";
}
