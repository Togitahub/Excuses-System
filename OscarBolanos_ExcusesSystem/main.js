function onload() {
    let who = ["El perro", "El gato", "El perico", "El leon"];
    let action = ["se comio", "araño", "pico", "rompio"];
    let what = ["mi tarea", "mi mochila", "mi celular", "mis zapatos"];
    let when = ["ayer", "hoy", "antier", "pasado antier"];

    return (
        who[Math.floor(Math.random() * who.length)] +
        " " +
        action[Math.floor(Math.random() * action.length)] +
        " " +
        what[Math.floor(Math.random() * what.length)] +
        " " +
        when[Math.floor(Math.random() * when.length)]
    );
}

function refreshButton() {
    let refresh = document.getElementById("refresh");
    refresh.addEventListener('click', _ => {
        location.reload();
    })
}

function changeGreeting() {
    let greetings = ["WELCOME", "BENVENUTI", "BIENVENU", "BEM-VINDO"];
    let change = document.getElementById("changeButton");
    change.addEventListener('click', _ => {
        document.getElementById("greeting").innerHTML = greetings[Math.floor(Math.random() * greetings.length)];
    })
}

document.getElementById("excuse").innerHTML = onload();
refreshButton();
changeGreeting();