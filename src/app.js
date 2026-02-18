// If frontend and backend are behind same ALB, leave empty:
const API_BASE_URL = "https://api.mounikaindyala.fun";  

// ================= REGISTER =================
async function registerUser() {
  try {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const res = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (error) {
    document.getElementById("result").innerText =
      "Error: " + error.message;
  }
}


// ================= LOGIN =================
async function loginUser() {
  try {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (error) {
    document.getElementById("result").innerText =
      "Error: " + error.message;
  }
}


// ================= LOAD USERS =================
async function loadUsers() {
  try {
    const res = await fetch(`${API_BASE_URL}/users`);
    const data = await res.json();

    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (error) {
    document.getElementById("result").innerText =
      "Error: " + error.message;
  }
}


// ================= LOAD ORDERS =================
async function loadOrders() {
  try {
    const res = await fetch(`${API_BASE_URL}/orders`);
    const data = await res.json();

    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);

  } catch (error) {
    document.getElementById("result").innerText =
      "Error: " + error.message;
  }
}


