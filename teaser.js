 // Like button toggle
    document.addEventListener("DOMContentLoaded", function () {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn === "true") {
        // Already logged in → Full gallery dikhado
        document.getElementById("teaser-gallery").style.display = "none";
        document.getElementById("full-gallery").style.display = "block";
    } else {
        // Not logged in → Sirf teaser dikhado
        document.getElementById("full-gallery").style.display = "none";
        document.getElementById("teaser-gallery").style.display = "block";
    }
});

 
 document.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if(this.textContent.includes('❤️')) {
          this.textContent = '💔 Unlike';
          this.style.backgroundColor = '#999';
        } else {
          this.textContent = '❤️ Like';
          this.style.backgroundColor = '#ff235a';
        }
      });
    });