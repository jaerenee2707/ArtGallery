// Add an event listener to the search input that listens for changes to its value
searchInput.addEventListener('input', function() {
  // Get the search query from the input element
  var searchQuery = searchInput.value.toLowerCase();
  // Clear the gallery element
  gallery.innerHTML = '';
  // Loop through the image names and only display the ones that match the search query
  imageNames.forEach(function(imageName, index) {
    if (overlayTexts[index].toLowerCase().includes(searchQuery) || tagsTexts[index].toLowerCase().includes(searchQuery)) {
      // Create and append the image elements like before
      var imageElement = document.createElement('img');
      imageElement.src = imageName;

      var textElement = document.createElement('div');
      textElement.className = 'text';
      textElement.textContent = overlayTexts[index];

      var overlayElement = document.createElement('div');
      overlayElement.className = 'overlay';
      overlayElement.appendChild(textElement);

      var containerElement = document.createElement('div');
      containerElement.className = 'container';
      containerElement.appendChild(imageElement);
      containerElement.appendChild(overlayElement);

      var galleryElement = document.createElement('div');
      galleryElement.className = 'gallery';
      galleryElement.appendChild(containerElement);

      var responsiveElement = document.createElement('div');
      responsiveElement.className = 'responsive';
      responsiveElement.appendChild(galleryElement);

      gallery.appendChild(responsiveElement);

      var colorThief = new ColorThief();
      var images = document.querySelectorAll('.gallery img');
      var overlays = document.querySelectorAll('.overlay');

      images.forEach(function(image, index) {
        image.addEventListener('load', function() {
          var dominantColor = colorThief.getColor(image);
          overlays[index].style.backgroundColor = 'rgb(' + dominantColor.join(',') + ')';
        });
      });
    }
  });
});
var autocompleteInput = document.getElementById('search');
// Add an event listener to the autocomplete function that listens for when a value is selected
autocompleteInput.addEventListener('autocomplete-select', function(event) {
  // Update the value of the search input with the selected value
  searchInput.value = event.detail;
  // Trigger the input event on the search input to update the search results
  var inputEvent = new Event('input');
  searchInput.dispatchEvent(inputEvent);
});
