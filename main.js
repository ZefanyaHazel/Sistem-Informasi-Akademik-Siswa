// Data dummy dengan role
const dummyUsers = [{
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        username: "guru",
        password: "guru123",
        role: "guru"
    },
    {
        username: "siswa",
        password: "siswa123",
        role: "siswa"
    }
];

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    const user = dummyUsers.find(u =>
        u.username === username &&
        u.password === password
    );

    if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", user.username);
        localStorage.setItem("role", user.role);
        if (user.role === "admin") {
            window.location.href = "admin/index.html";
        } else if (user.role === "guru") {
            window.location.href = "guru/index.html";
        } else if (user.role === "siswa") {
            window.location.href = "murid/index.html";
        }
    } else {
        errorMsg.textContent = "Username atau password salah!";
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 400); // 1 detik = 1000 ms
});