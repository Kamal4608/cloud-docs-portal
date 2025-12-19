function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // CHANGE THESE CREDENTIALS
  if (user === "admin" && pass === "admin123") {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
}

function checkAuth() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
