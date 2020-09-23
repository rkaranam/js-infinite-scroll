const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const photosCount = 10;
const apiKey = config.API_KEY;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photosCount}`;

// Create elements for links & photos, then add them DOM
function displayPhotos() {

	// Run function for each object in photosArray
	photosArray.forEach((photo) => {

		// Create <a> to link to Unsplash website
		const item = document.createElement('a');
		item.setAttribute('href', photo.links.html);
		item.setAttribute('target', '_blank');

        // Create <img> for each photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        // Put <img> inside <a> and then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
	});
}

// Get Photos from Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		displayPhotos();
	} catch (error) {}
}

// Load onload
getPhotos();
