// Sample list of services
const services = [
    "Namakaranam",
    "Annaprasana",
    "Aksharabyasam",
    "Sudharsana Homam",
    "GruhaPravesam",
    "Marriage Ceremony",
    "Abhishekam",
    "Homam Services"
];

// Reference to the search box and suggestion list
const searchBox = document.getElementById("search-box");
const suggestions = document.getElementById("suggestions");

// Function to filter and display suggestions
searchBox.addEventListener("input", function() {
    const query = searchBox.value.toLowerCase();
    suggestions.innerHTML = ""; // Clear previous suggestions

    if (query.length > 0) {
        const filteredServices = services.filter(service =>
            service.toLowerCase().includes(query)
        );

        if (filteredServices.length > 0) {
            const ul = document.createElement("ul");

            filteredServices.forEach(service => {
                const li = document.createElement("li");
                li.textContent = service;
                li.onclick = function() {
                    searchBox.value = service; // Set clicked value to search box
                    suggestions.innerHTML = ""; // Clear suggestions
                };
                ul.appendChild(li);
            });

            suggestions.appendChild(ul);
            suggestions.style.display = "block"; // Show suggestions
        } else {
            suggestions.style.display = "none"; // Hide if no matches
        }
    } else {
        suggestions.style.display = "none"; // Hide if query is empty
    }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function(e) {
    if (!e.target.closest(".nav-search-container")) {
        suggestions.style.display = "none";
    }
});

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
    const query = searchBox.value.trim();
    if (query) {
        alert("Searching for: " + query); // Replace with your actual search logic
    }
});
