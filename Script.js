const readMoreBtn1 = document.getElementById("read-more-btn1");
const popupContainer1 = document.getElementById("popup-container1");
const closeBtn1 = document.getElementById("close-btn1");

readMoreBtn1.addEventListener("click", function() {
	popupContainer1.style.display = "block";
});

closeBtn1.addEventListener("click", function() {
	popupContainer1.style.display = "none";
});

/*Script 2------------------------------------*/

const readMoreBtn2 = document.getElementById("read-more-btn2");
const popupContainer2 = document.getElementById("popup-container2");
const closeBtn2 = document.getElementById("close-btn2");

readMoreBtn2.addEventListener("click", function() {
	popupContainer2.style.display = "block";
});

closeBtn2.addEventListener("click", function() {
	popupContainer2.style.display = "none";
});

/*Script 3------------------------------------*/

const readMoreBtn3 = document.getElementById("read-more-btn3");
const popupContainer3 = document.getElementById("popup-container3");
const closeBtn3 = document.getElementById("close-btn3");

readMoreBtn3.addEventListener("click", function() {
	popupContainer3.style.display = "block";
});

closeBtn3.addEventListener("click", function() {
	popupContainer3.style.display = "none";
});

// Select the relevant HTML elements
const readMoreBtn = document.getElementById("read-more-btn");
const popupContainer = document.getElementById("popup-container");
const closeBtn = document.getElementById("close-btn");
const searchInput = document.getElementById("search-input");

// Add an event listener to the "Read More" button
readMoreBtn.addEventListener("click", function() {
	// Show the popup
	popupContainer.style.display = "block";
});

// Add an event listener to the "Close" button
closeBtn.addEventListener("click", function() {
	// Hide the popup
	popupContainer.style.display = "none";
});

// Add an event listener to the search input
searchInput.addEventListener("input", function() {
	// Get the search value from the input and convert it to lowercase
	const searchValue = searchInput.value.toLowerCase();
	// Get all the popup content elements
	const popupContents = document.getElementsByClassName("popup-content");
	// Loop through the popup contents
	for (let i = 0; i < popupContents.length; i++) {
		// Get the current content text and convert it to lowercase
		const contentText = popupContents[i].textContent.toLowerCase();
		// Check if the search value is included in the content text
		if (contentText.includes(searchValue)) {
			// If the search value is found, show the corresponding popup
			popupContents[i].parentNode.style.display = "block";
		} else {
			// If the search value is not found, hide the corresponding popup
			popupContents[i].parentNode.style.display = "none";
		}
	}
});
