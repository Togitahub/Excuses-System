function excuseGenerator() {
	// Se declaran los arrays
	let who = ["El perro", "El gato", "El perico", "El leon"];
	let action = ["se comio", "araño", "pico", "rompio"];
	let what = ["mi tarea", "mi mochila", "mi celular", "mis zapatos"];
	let when = ["ayer", "hoy", "antier", "pasado antier"];

	//Se obtiene el boton refresh
	let refresh = document.getElementById("excuseButton");

	//Se ejecuta la concatenacion para la excusa aleatoria a traves de darla click al boton
	refresh.addEventListener("click", (_) => {
		document.getElementById("excuse").innerHTML =
			who[Math.floor(Math.random() * who.length)] +
			" " +
			action[Math.floor(Math.random() * action.length)] +
			" " +
			what[Math.floor(Math.random() * what.length)] +
			" " +
			when[Math.floor(Math.random() * when.length)];
	});
}

function changeGreeting() {
	let greetings = [
		"WELCOME",
		"BENVENUTI",
		"BIENVENU",
		"BEM-VINDO",
		"BIENVENIDO",
	];
	let lastGreeting = ""; // Almacena el utlimo saludo mostrado
	let change = document.getElementById("changeButton");
	change.addEventListener("click", (_) => {
		let newGreeting;

		// Este bucle genera un nuevo saludo aleatorio que no sea igual al último mostrado
		do {
			newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
		} while (newGreeting === lastGreeting);

		lastGreeting = newGreeting; // Actualiza el último saludo mostrado
		document.getElementById("greeting").innerHTML = newGreeting; // Cambia el contenido del elemento con id "greeting" al nuevo saludo
	});
}

function changeBodyColor() {
	const greetingElement = document.getElementById("greeting");
	const backgrounds = {
		BENVENUTI:
			"url('https://ambitointernacional.com/wp-content/uploads/2020/01/it-2.jpg')",
		WELCOME:
			"url('https://elespiritudekusanagi.wordpress.com/wp-content/uploads/2019/08/bandera-estados-unidos-de-america-fondos-de-pantalla-de-banderas.jpg')",
		BIENVENU:
			"url('https://cdn.pixabay.com/photo/2021/06/06/04/00/flag-6314238_640.jpg')",
		"BEM-VINDO":
			"url('https://cdn0.uncomo.com/es/posts/1/2/5/significado_de_la_bandera_y_escudo_de_brasil_49521_orig.jpg')",
		BIENVENIDO:
			"url('https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/08/23/bandera-espana-freepik-1.jpeg')",
	};

	// Crea una instancia de MutationObserver que observará cambios en el DOM
	const observer = new MutationObserver((mutations) => {
		// Itera sobre cada mutación que ha ocurrido
		mutations.forEach((mutation) => {
			// Verifica si el tipo de mutación es "childList", que indica cambios en los hijos de un nodo
			if (mutation.type === "childList") {
				// Obtiene el nuevo contenido HTML del nodo objetivo de la mutación
				const newGreeting = mutation.target.innerHTML;
				// Cambia la imagen de fondo del cuerpo del documento según el nuevo contenido
				// Si no hay una imagen de fondo correspondiente, se establece una cadena vacía
				document.body.style.backgroundImage = backgrounds[newGreeting] || "";
			}
		});
	});

	observer.observe(greetingElement, { childList: true }); // Configura el observador para observar cambios en la lista de hijos del elemento "greeting"
}

excuseGenerator();
changeGreeting();
changeBodyColor();
