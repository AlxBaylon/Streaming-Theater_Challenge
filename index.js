//-----Creating HTML Check Boxes --------------------------------
const creatingCheckBoxes = () =>{
	const divCheckBoxes = document.querySelector('div.Streaming-checkboxes');
	streamings.forEach((streaming) =>{
		divCheckBoxes.innerHTML+= `<label for="StreamingServices--${streaming.name}">
		<span>${streaming.name}</span>
		<input type="checkbox" id="StreamingServices--${streaming.name}" onclick="onClickCheck()">
	</label>`;
	});
}
//Excepción: tecla enter en el input de cantidad de películas.
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
			winner = 'mejor paga el cine';
		} else if(precioStreaming < moviesTotalPrice){
			winner = 'mejor paga el streaming';
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
const onClickCheck = () => {
	streamings.forEach((streaming) => {
		const checkBox = document.getElementById(`StreamingServices--${streaming.name}`);
		if(checkBox.checked){
			streaming.state = true;
		} else if(!checkBox.checked){
			streaming.state = false;
		}
	});
}
//-----Prices------------------------------------------
const theaterPrice = 70;
const streamings = [
	{name: 'Netflix', price:139, state: false},
	{name: 'HBO-Max', price:99, state: false},
	{name: 'Disney-Plus', price:159, state: false},
	{name: 'AmazonPrimeVideo', price:99, state: false},
];

creatingCheckBoxes();