const API = "http://localhost:5000/api/auth";

async function register() {
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  document.getElementById('message').innerText = data.message;
}
