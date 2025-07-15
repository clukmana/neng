// script.js

// Function to handle button click events
let noClickCount = 0;

function selectOption(option) {
  if (option === 'yes') {
    flashRainbowColors(() => {
      document.getElementById('question').style.display = 'none';
      displayCatHeart("see u tomorrow baby girl");
    });
  } else if (option === 'no') {
    noClickCount++;
    const messages = [
      'Yang Bener?',
      'Masa sih?',
      'Hmmm?',
      'Aku kasih 1 kesempatan lagi nih',
      'Yah udah mentok Neng'
    ];
    // Pilih pesan berdasarkan jumlah klik, tetap di pesan terakhir jika melewati jumlah
    const msg = messages[Math.min(noClickCount - 1, messages.length - 1)];
    document.getElementById('no-button').innerText = msg;

    // Contoh: kalau mau efek lain tiap klik no, bisa tambah di sini

  } else {
    alert('Invalid option!');
  }
}


// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'couple love GIF.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
     var caption = document.createElement('p');
        caption.id = 'caption';
        caption.textContent = captionText;
        container.appendChild(caption);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'clg.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    var caption = document.createElement('p');
        caption.id = 'caption';
        caption.textContent = captionText;
        container.appendChild(caption);

    };

}

// Display the cat.gif initially
displayCat();
