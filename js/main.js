// Select all product images by class or tag
document.querySelectorAll('.card-img-top').forEach(function (img) {
  img.addEventListener('click', function() {
    var popupContainer = document.getElementById('imagePopupContainer');
    var popupImage = document.getElementById('popupImage');
    
    // Set the image source to the clicked image's source
    popupImage.src = this.src;

    // Show the popup
    popupContainer.style.display = 'flex';
  });
});

// Close the popup when clicking the close button
document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('imagePopupContainer').style.display = 'none';
});

// Close the popup when clicking outside of the image
document.getElementById('imagePopupContainer').addEventListener('click', function(event) {
  var popupImage = document.getElementById('popupImage');
  
  // Check if the click was outside of the image
  if (event.target !== popupImage) {
    document.getElementById('imagePopupContainer').style.display = 'none';
  }
});

// Close the popup when pressing the "Esc" key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    document.getElementById('imagePopupContainer').style.display = 'none';
  }
});
