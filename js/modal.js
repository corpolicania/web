let cerrar = document.querySelectorAll(".close")[0];
let noThks = document.querySelectorAll(".noThanks-btn")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let close = document.querySelectorAll(".insc-btn")[0];

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
    	modal.classList.toggle("modal-close");

		setTimeout(function() {
			modalC.style.opacity = "0";
			modalC.style.visibility = "hidden";
	}, 700)
    }
});


window.onload = function() {
	modalC.style.opacity = "1";
	modalC.style.visibility = "visible";
	modal.classList.toggle("modal-close");
}

cerrar.addEventListener("click", function() {
	modal.classList.toggle("modal-close");

	setTimeout(function() {
		modalC.style.opacity = "0";
		modalC.style.visibility = "hidden";
	}, 700)
})

noThks.addEventListener("click", function() {
	modal.classList.toggle("modal-close");

	setTimeout(function() {
		modalC.style.opacity = "0";
		modalC.style.visibility = "hidden";
	}, 700)
})

close.addEventListener("click", function() {
	modal.classList.toggle("modal-close");

	setTimeout(function() {
		modalC.style.opacity = "0";
		modalC.style.visibility = "hidden";
	}, 700)
})


document.addEventListener("click", function(e) {
	console.log(e.target);
	if (e.target === modalC) {
		modal.classList.toggle("modal-close");

		setTimeout(function() {
			modalC.style.opacity = "0";
			modalC.style.visibility = "hidden";
		}, 700)
	}
})


