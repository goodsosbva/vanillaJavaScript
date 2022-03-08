// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// const link = document.querySelector("a");
const h1list = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintH1list(username);
}

function handleLinkClick(e) {
    e.preventDefault();
}

function paintH1list(username) {
    h1list.innerText = `Hello ${username}`;
    h1list.classList.remove(HIDDEN_CLASSNAME);
}
// loginButton.addEventListener("click", loginBtnClick)
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    paintH1list(savedUsername);
}

const removeBtn = document.querySelector(".remove_storage");

function removeStorage() {
    // alert("click");
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

removeBtn.addEventListener("click", removeStorage);