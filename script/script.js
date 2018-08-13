var login = document.querySelector(".login");
var login_link = document.querySelector(".login-link");
var login_popup = document.querySelector(".modal-login");
var login_close = document.querySelector(".modal-close");
var login_login = login_popup.querySelector("[name=login]");
var login_password = login_popup.querySelector("[name=password]");

var map_popup = document.querySelector(".modal-map");
var map_button = document.querySelector(".contacts-button-map");
var map_link = document.querySelector(".footer-link-map");
var map_close = document.querySelector(".map-close");

var isLocalStorageSupport = true;

try {
    localStorage.getItem("login");
} catch (exeption) {
    isLocalStorageSupport = false;
}

login_link.addEventListener("click", function (event) {
    event.preventDefault();
    login_popup.classList.add("js-login-show");
    if (isLocalStorageSupport && localStorage.getItem("login")) {
        login_login.value = localStorage.getItem("login");
        login_password.focus();
    } else {
        login_login.focus();
    }
});

login_close.addEventListener("click", function (event) {
    event.preventDefault();
    login_popup.classList.remove("js-login-show");
    login_popup.classList.remove("js-login-error");
});

login.addEventListener("submit", function (event) {
    if (!login_login.value || !login_password.value) {
        event.preventDefault();
        login_popup.classList.add("js-login-error");
    }
    if (isLocalStorageSupport) {
        localStorage.setItem("login", login_login.value);
    }
});

if (map_button != null)
    map_button.addEventListener("click", function (event) {
        event.preventDefault();
        map_popup.classList.add("js-map-show");
    });

map_link.addEventListener("click", function (event) {
    event.preventDefault();
    map_popup.classList.add("js-map-show");
})

map_close.addEventListener("click", function (event) {
    map_popup.classList.remove("js-map-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        event.preventDefault();
        login_popup.classList.remove("js-login-show");
        map_popup.classList.remove("js-map-show");
        login_popup.classList.remove("js-login-error");
    }
});