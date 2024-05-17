// Get elements
var arrowRight = document.getElementById("arrow-right");
var arrowLeft = document.getElementById('arrow-left');
var radioButtons = document.getElementsByName('slider');
var bgImages = document.querySelectorAll(".background-img");
var characterImages = document.querySelectorAll(".char-img");
var navButtons = document.querySelectorAll('.nav-button');
var checkboxes = document.querySelectorAll('input[type="checkbox"');
var characterSlideImages = document.querySelectorAll(".char-img-slide");
var characterInfoBox = document.querySelectorAll('.char-info');

// Initialisation
let currentRadioButtonIndex = 0;
radioButtons[0].checked = true; // Always checked first radio button after refreshing

// Click one of radio buttons
radioButtons.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        // Play image slide animation
        animateImageSlides();

        // Remove classes from certain elements
        addOrRemoveClasses(false);

        // Assign new index
        currentRadioButtonIndex = index;

        // Update elements
        addOrRemoveClasses(true);
    });
});

// Click Right Arrow
arrowRight.addEventListener('click', () => {
    slideNavigation(1);
})

// Click Left Arrow
arrowLeft.addEventListener('click', () => {
    slideNavigation(-1);
})

// Click Character Information Box
characterInfoBox.forEach((charInfoBox) => {
    charInfoBox.addEventListener('click', () => {
        // Uncheck all boxes (to close character info window)
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        })
    })
})


// Function for navigating through slides by passing an int value
function slideNavigation(_passValue) {
    // Play image slide animation
    animateImageSlides();

    // Remove classes from certain elements
    addOrRemoveClasses(false);

    // Change radio button's index
    currentRadioButtonIndex += _passValue;

    // Implement radio button boundaries
    if (currentRadioButtonIndex >= radioButtons.length) {
        currentRadioButtonIndex = 0;
    } else if (currentRadioButtonIndex < 0) {
        currentRadioButtonIndex = radioButtons.length - 1;
    }

    // To check current radio button
    radioButtons[currentRadioButtonIndex].checked = true;

    // Update elements
    addOrRemoveClasses(true);
}

// Function: Pass 'true' to Add classes | Pass 'false' to Remove classes
function addOrRemoveClasses(_addClass) {
    if (_addClass) {
        bgImages[currentRadioButtonIndex].classList.add('showing');
        characterImages[currentRadioButtonIndex].classList.add('currentSelectImage');
        navButtons[currentRadioButtonIndex].classList.add('currentSelect');
    } else {
        bgImages[currentRadioButtonIndex].classList.remove('showing');
        characterImages[currentRadioButtonIndex].classList.remove('currentSelectImage');
        navButtons[currentRadioButtonIndex].classList.remove('currentSelect');

        // Uncheck all boxes (to close character info window)
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        })
    }
}

// Function for playing a small animation on images when navigating slides
function animateImageSlides() {
    // Play animation
    characterSlideImages.forEach((charSlide) => {
        charSlide.classList.add('animate-char-slide');
    })

    // Remove animation class after navigate slide's duration
    setTimeout(() => {
        characterSlideImages.forEach((charSlide) => {
            charSlide.classList.remove('animate-char-slide');
        })
    }, 760)
}
