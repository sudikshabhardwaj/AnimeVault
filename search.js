document.getElementById("searchBtn").addEventListener("click", searchAnime);

async function searchAnime() {
    const query = document.getElementById("animeSearch").value.trim();
    const resultsContainer = document.getElementById("results");

    if (!query) {
        resultsContainer.innerHTML = "<p>Please enter an anime name.</p>";
        return;
    }

    resultsContainer.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=6`);
        const data = await response.json();

        if (!data.data.length) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
            return;
        }

        resultsContainer.innerHTML = ""; // Clear old results

        data.data.forEach(anime => {
            const card = document.createElement("div");
            card.classList.add("anime-card");

            card.innerHTML = `
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <p>${anime.synopsis ? anime.synopsis.slice(0, 100) + "..." : "No description available."}</p>
                <p><strong>Episodes:</strong> ${anime.episodes || "N/A"}</p>
                <a href="${anime.url}" target="_blank">View More</a>
            `;

            resultsContainer.appendChild(card);
        });

    } catch (error) {
        resultsContainer.innerHTML = "<p>Error fetching data.</p>";
        console.error(error);
    }
}
