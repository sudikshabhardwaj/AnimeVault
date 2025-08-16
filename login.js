document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username !== "" && password !== "") {
        // Mark user as logged in
        localStorage.setItem("isLoggedIn", "true");

        // Read "source" param from URL
        const params = new URLSearchParams(window.location.search);
        const source = params.get("source");

        if (source === "home") {
            window.location.href = "search.html"; // home login → search
        } else if (source === "gallery") {
            window.location.href = "gallery.html"; // teaser login → full gallery
        } else {
            window.location.href = "index.html"; // default
        }
    } else {
        alert("Please enter username and password");
    }
});
