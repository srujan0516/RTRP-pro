document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const cards = document.querySelectorAll(".card");

    searchBar.addEventListener("keyup", function () {
        const searchText = searchBar.value.toLowerCase();
        cards.forEach(card => {
            const cardText = card.innerText.toLowerCase();
            if (cardText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    document.querySelectorAll(".request-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Your request has been sent!");
        });
    });

    document.querySelector(".my-requests-btn").addEventListener("click", () => {
        alert("Opening My Requests...");
    });
});
