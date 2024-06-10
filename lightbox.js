box = document.getElementById("lightbox");
var back_overlay = document.getElementById("backOverlay");
let heartTexts = [];

if (localStorage.getItem("savedHearts") == null) {
  for (var i = 0; i < imageNames.length; i++) {
    heartTexts.push(["🤍", "🤍", "🤍", "🤍", "🤍"]);
  }
}
else {
  heartTexts = JSON.parse(localStorage.getItem("savedHearts"));
  for (var i = 0; i < imageNames.length; i++) {
    if(heartTexts[i] == null)
      heartTexts.push(["🤍", "🤍", "🤍", "🤍", "🤍"]);
  }
}


overlays.forEach(function(image, index) {
  image.addEventListener('click', function() {
    box.style.display = "block";
    back_overlay.style.display = "block";
    imageNames.forEach(function(imageName, index2) {
      if (index == index2) {
        var imageElement = document.createElement('img');
        imageElement.src = imageName;
        imageElement.className = 'lightboxImage';

        box.appendChild(imageElement);
        
        const imageStyle = window.getComputedStyle(imageElement);
        const imageWidth = parseInt(imageStyle.width);
        const imageHeight = parseInt(imageStyle.height);
        box.style.width = `${imageWidth + 20 * 2}px`;

        imageElement.style.textAlign = 'center';
        let boxStyle = window.getComputedStyle(box);
        let boxWidth = parseInt(boxStyle.width);
        let percentage = 0.15;
        
        var textElement = document.createElement('div');
        textElement.className = 'lightboxText';
        textElement.textContent = overlayTexts[index];

        var heartRow = document.createElement('div');
        heartRow.className = 'row';
        
        var heart1 = document.createElement('div');
        heart1.id = 'heart1';
        heart1.addEventListener('click', function() {
          heartsClick(1, index);
        });
        var heart2 = document.createElement('div');
        heart2.id = 'heart2';
        heart2.addEventListener('click', function() {
          heartsClick(2, index);
        });
        var heart3 = document.createElement('div');
        heart3.id = 'heart3';
        heart3.addEventListener('click', function() {
          heartsClick(3, index);
        });
        var heart4 = document.createElement('div');
        heart4.id = 'heart4';
        heart4.addEventListener('click', function() {
          heartsClick(4, index);
        });
        var heart5 = document.createElement('div');
        heart5.id = 'heart5';
        
        heart5.addEventListener('click', function() {
          heartsClick(5, index);
        });
        
        if (window.innerWidth > window.innerHeight) {
          heart1.style.fontSize = `${boxWidth * percentage}px`;
          heart2.style.fontSize = `${boxWidth * percentage}px`;
          heart3.style.fontSize = `${boxWidth * percentage}px`;
          heart4.style.fontSize = `${boxWidth * percentage}px`;
          heart5.style.fontSize = `${boxWidth * percentage}px`;
        }

        heart1.innerText = heartTexts[index][0];
        heart2.innerText = heartTexts[index][1];
        heart3.innerText = heartTexts[index][2];
        heart4.innerText = heartTexts[index][3];
        heart5.innerText = heartTexts[index][4];
      
        heartRow.appendChild(heart1);
        heartRow.appendChild(heart2);
        heartRow.appendChild(heart3);
        heartRow.appendChild(heart4);
        heartRow.appendChild(heart5);

        
        box.appendChild(textElement);
        box.appendChild(heartRow);
      }
    });
  });
});

function hideModal() {
  box.style.display = "none";
  back_overlay.style.display = "none";
  box.innerHTML = "";
}


// When the user clicks anywhere outside of the modal, hide it
window.addEventListener("click", function(event) {
  if (event.target == back_overlay) {
    hideModal();
  }
});

function heartsClick(index, imageIndex) {
  if (index == 1) {
    heartTexts[imageIndex] = ["❤️", "🤍", "🤍", "🤍", "🤍"];
  }
  else if (index == 2) {
    heartTexts[imageIndex] = ["❤️", "❤️", "🤍", "🤍", "🤍"];
  }
  else if (index == 3) {
    heartTexts[imageIndex] = ["❤️", "❤️", "❤️", "🤍", "🤍"];
  }
  else if (index == 4) {
    heartTexts[imageIndex] = ["❤️", "❤️", "❤️", "❤️", "🤍"];
  }
  else if (index == 5) {
    heartTexts[imageIndex] = ["❤️", "❤️", "❤️", "❤️", "❤️"];
  }

  // Update the displayed heart text
  heart1.innerText = heartTexts[imageIndex][0];
  heart2.innerText = heartTexts[imageIndex][1];
  heart3.innerText = heartTexts[imageIndex][2];
  heart4.innerText = heartTexts[imageIndex][3];
  heart5.innerText = heartTexts[imageIndex][4];

  localStorage.setItem("savedHearts", JSON.stringify(heartTexts));

}

