//EXcepción: tecla enter en el input de cantidad de películas.
const onPricesResult = () => {
	const inputMovies = document.getElementById('InputMoviesNumber');
	const moviesValues = inputMovies.value;

	if(moviesValues){
		const moviesTotalPrice = moviesValues * theaterPrice;

		let precioStreaming = 0;
		streamings.forEach((streaming) => {
			if(streaming.state){
				precioStreaming += streaming.price;
			}
		});

		let winner;
		if(precioStreaming > moviesTotalPrice){
			winner = 'paga mejor el cine';
		} else if(precioStreaming < moviesTotalPrice){
			winner = 'paga mejor el streaming';
		} else {
			winner = 'cuestan igual, paga la que te convenga';
		}

		const result = document.getElementById('ResultP');
		result.innerText = `El costo de las peliculas en cine es: $${moviesTotalPrice} MXN
		El costo de las peliculas en streaming es: $${precioStreaming} MXN
		Por lo anterior ${winner}`
	} else {
		alert('Escoge bien por favor');
		inputMovies.focus();
	}
}
//-----Checkbox Logic-----------------------------------
const netflixCheck = () => {
	let n = 0;
	confirmStreaming(n);
}
const hboMaxCheck = () =>{
	let n = 1;
	confirmStreaming(n);
}
const confirmStreaming = (n) => {
	if (streamings[n].state == false){
		streamings[n].state = true;
	} else if (streamings[n].state == true){
		streamings[n].state = false;
	} 
}
//-----Prices------------------------------------------
const theaterPrice = 70;
const streamings = [
	{name: 'Netflix', price:139, state: false},
	{name: 'HBO-Max', price:99, state: false},
];
