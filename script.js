document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  // Never log or display passwords
  // Don't use alerts to show sensitive data
  alert("Login submitted. Backend will handle securely.");
});