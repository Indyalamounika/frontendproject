document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("registerBtn").addEventListener("click", registerUser);
  document.getElementById("loginBtn").addEventListener("click", loginUser);
  document.getElementById("usersBtn").addEventListener("click", loadUsers);
  document.getElementById("ordersBtn").addEventListener("click", loadOrders);

});


async function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  document.getElementById("result").innerText = await res.text();
}


async function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  document.getElementById("result").innerText = await res.text();
}


async function loadUsers() {
  const res = await fetch("/users");
  const data = await res.json();
  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);
}


async function loadOrders() {
  const res = await fetch("/orders");
  const data = await res.json();
  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);
}

