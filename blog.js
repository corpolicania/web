document.addEventListener("DOMContentLoaded", function(e) {

	const parrafos = document.querySelectorAll('.description-p');

	let alturas = [];
	let alturaMax = 0;


	const aplicarAlturas = (function aplicarAlturas() {

		parrafos.forEach(parrafo => {
			if (alturaMax == 0) {
				alturas.push(parrafo.clientHeight);
			} else {
				parrafo.style.height = alturaMax + "px";
			}
		})

		return aplicarAlturas;

	})();

	alturaMax = Math.max.apply(Math, alturas);

	aplicarAlturas();
})
