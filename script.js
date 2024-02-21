let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let reposList = document.getElementById('repos-list');

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

// Fetch GitHub repositories and display them
function displayRepos() {
    fetch('https://api.github.com/users/yourusername/repos')
        .then(response => response.json())
        .then(repos => {
            reposList.innerHTML = ""; // Clear the existing list

            repos.forEach(repo => {
                const repoItem = document.createElement('li');
                const repoLink = document.createElement('a');

                repoLink.href = repo.html_url;
                repoLink.textContent = repo.name;
                repoLink.target = "_blank";

                repoItem.appendChild(repoLink);
                reposList.appendChild(repoItem);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
}

// Call the displayRepos function to fetch and display repositories
displayRepos();

// Function to change sidebar button
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}
