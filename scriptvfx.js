function showPopup(title, description, images, link) {
    // Set the popup content
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;

    // Populate the images
    const imagesContainer = document.getElementById('popup-images');
    imagesContainer.innerHTML = images.map(img => `<img src="${img}" alt="${title} image">`).join('');

    // Set the watch link
    const watchLink = document.getElementById('popup-link');
    watchLink.href = link;

    // Show the popup
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
