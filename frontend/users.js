const API = 'http://localhost:5000/api/users';

async function fetchUsers() {
  const res = await fetch(API);
  const users = await res.json();

  const list = document.getElementById('userList');
  list.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `${user.email} 
      <button onclick="deleteUser('${user._id}')">Delete</button>`;
    list.appendChild(li);
  });
}

async function createUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  fetchUsers();
}

async function deleteUser(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  fetchUsers();
}

window.onload = fetchUsers;
