// Get references to the search input and gallery elements
var searchInput = document.querySelector('#search');
var gallery = document.querySelector('#gallery');
imageNames.forEach(function(imageName, index) {
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
});
var colorThief = new ColorThief();
var images = document.querySelectorAll('.gallery img');
var overlays = document.querySelectorAll('.overlay');

images.forEach(function(image, index) {
  image.addEventListener('load', function() {
    var dominantColor = colorThief.getColor(image);
    overlays[index].style.backgroundColor = 'rgb(' + dominantColor.join(',') + ')';
  });
});