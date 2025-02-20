function getRandomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function excuseGenerator() {
	const who = ["El perro", "El gato", "El perico", "El leon"];
	const action = ["se comio", "araño", "pico", "rompio"];
	const what = ["mi tarea", "mi mochila", "mi celular", "mis zapatos"];
	const when = ["ayer", "hoy", "antier", "pasado antier"];

	document.getElementById("excuseButton").addEventListener("click", () => {
		document.getElementById("excuse").innerHTML = `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}`;
	});
}

function changeGreeting() {
	const greetings = ["WELCOME", "BENVENUTI", "BIENVENU", "BEM-VINDO", "BIENVENIDO"];
	let lastGreeting = "";

	document.getElementById("changeButton").addEventListener("click", () => {
		let newGreeting;
		do {
			newGreeting = getRandomElement(greetings);
		} while (newGreeting === lastGreeting); //Este bucle genera un nuevo saludo distinto al ultimo

		lastGreeting = newGreeting; //Se almacena el nuevo saludo que es diferente al ultimo generado
		document.getElementById("greeting").innerHTML = newGreeting;
	});
}

function changeFlag() {
	const backgrounds = {
		BENVENUTI: "url('https://ambitointernacional.com/wp-content/uploads/2020/01/it-2.jpg')",
		WELCOME: "url('https://elespiritudekusanagi.wordpress.com/wp-content/uploads/2019/08/bandera-estados-unidos-de-america-fondos-de-pantalla-de-banderas.jpg')",
		BIENVENU: "url('https://cdn.pixabay.com/photo/2021/06/06/04/00/flag-6314238_640.jpg')",
		"BEM-VINDO": "url('https://cdn0.uncomo.com/es/posts/1/2/5/significado_de_la_bandera_y_escudo_de_brasil_49521_orig.jpg')",
		BIENVENIDO: "url('https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/08/23/bandera-espana-freepik-1.jpeg')",
	};

	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === "childList") {
				document.body.style.backgroundImage = backgrounds[mutation.target.innerHTML] || "";
			}
		});
	});

	observer.observe(document.getElementById("greeting"), { childList: true });
}

excuseGenerator();
changeGreeting();
changeFlag();
