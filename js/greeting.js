const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem("username", username);
	greeting.innerText = `Have a good day ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username")

if(savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	greeting.innerText = `Hello ${savedUsername}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}