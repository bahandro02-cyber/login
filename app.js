let isLogin = true;

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const nameInput = document.getElementById("name");
const mainBtn = document.getElementById("mainBtn");
const switchBtn = document.getElementById("switchBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");

switchBtn.onclick = function() {
  isLogin = !isLogin;

  title.textContent = isLogin ? "Welcome Back" : "Create Account";
  subtitle.textContent = isLogin ? "Login to your account" : "Register now";
  mainBtn.textContent = isLogin ? "Login" : "Register";
  switchBtn.textContent = isLogin ? "Register" : "Login";
  nameInput.hidden = isLogin;
};

mainBtn.onclick = function() {
  if (!email.value || !password.value) {
    alert("Please fill in all fields!");
    return;
  }

  if (!isLogin && !nameInput.value) {
    alert("Enter your name!");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must contain at least 6 characters!");
    return;
  }

  alert(isLogin ? "Login successful!" : "Registration successful!");
};