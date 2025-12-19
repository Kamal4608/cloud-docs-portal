// ===== AUTH CHECK =====
function checkAuth() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

// ===== LOGIN =====
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 🔐 DEMO CREDENTIALS
  if (username === "admin" && password === "admin@123") {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("role", "admin");
    window.location.href = "index.html";
  }
  else if (username === "user" && password === "user@123") {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("role", "user");
    window.location.href = "index.html";
  }
  else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
}

// ===== LOGOUT =====
function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}
