const artistInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

console.log(artistInput);
console.log(searchButton);

searchButton.addEventListener("click", function() {
    console.log(artistInput.value);
});
