const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const todo = document.getElementById("todo")
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  const conceptImage = document.querySelector(".concept-img");
  const layout = document.querySelector('.col-xl-12.col-12.col-md-12');
  const quote = document.querySelector('#quote');
  const clock = document.querySelector('#clock');
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
  conceptImage.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  layout.setAttribute('class', 'col-xl-6 col-12 col-md-12');
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}