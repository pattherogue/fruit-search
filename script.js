const input = document.getElementById('fruit-search');
const suggestionsList = document.getElementById('suggestions-list');

const fruitList = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Event listener for key strokes
input.addEventListener('keyup', searchHandler);

// Function to handle key strokes and trigger search
function searchHandler(event) {
    const userInput = event.target.value.trim().toLowerCase();
    const results = search(userInput);
    showSuggestions(results);
}

// Function to filter the list of fruits based on user input
function search(userInput) {
    return fruitList.filter(fruit => fruit.toLowerCase().includes(userInput));
}

// Function to display suggestions in the dropdown
function showSuggestions(results) {
    suggestionsList.innerHTML = ''; // Clear previous suggestions

    // Populate the suggestions list with filtered results
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        suggestionsList.appendChild(listItem);
    });

    // Show the suggestions dropdown
    suggestionsList.parentElement.style.display = results.length ? 'block' : 'none';
}

// Event listener to populate the search bar with selected suggestion
suggestionsList.addEventListener('click', useSuggestion);

// Function to populate the search bar with selected suggestion
function useSuggestion(event) {
    if (event.target.tagName === 'LI') {
        input.value = event.target.textContent;
        suggestionsList.parentElement.style.display = 'none'; // Hide suggestions dropdown after selection
    }
}
