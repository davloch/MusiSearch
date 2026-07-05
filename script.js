const artistInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

console.log(artistInput);
console.log(searchButton);

searchButton.addEventListener("click", function() {
    const artistName = artistInput.value.trim();
    if (artistName === "") {
        alert("Please enter an artist name.");
        return;
    }
    getAccessToken();

});
