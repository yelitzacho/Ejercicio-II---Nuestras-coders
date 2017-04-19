window.addEventListener( 'load', function (e){
	e.preventDefault();

	var contenedor = document.getElementById('contenedor');

	var section = document.createElement('section');
	var titulo = document.createElement('h1');
	var linea = document.createElement('hr');

	titulo.innerText = "Nuestras coders";
	section.appendChild(titulo);

	linea.setAttribute('class','linea');
	section.setAttribute('class','sectionTitulo');
	section.appendChild(linea);

	contenedor.appendChild(section);

	var coders = 	['','Rosmery Madonado','Nadia Cuadros','Katherine Ortega',
					'Flor Tello','Mitchell Rodríguez','Karin Alejo'];

	for (var i = 1; i <= 6; i++){

		var urlImg = 'assets/img/'+ i +'.png';
		var figure = document.createElement('figure');
		var img = document.createElement('img');
		var figcaption = document.createElement('figcaption');
		var span = document.createElement('span');

		img.setAttribute('src', urlImg);
		img.setAttribute('class','coders');

		figure.appendChild(img);
		figure.setAttribute('class','contenedorImg');

		span.innerText = coders[i];
		span.setAttribute('class','nombre-coder');

		figcaption.appendChild(span);
		figure.appendChild(figcaption);

		contenedor.appendChild(figure);
	 }
})