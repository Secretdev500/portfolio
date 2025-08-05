
// Show the dropdown navigation menu (mobile)
function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}


// Hide the dropdown navigation menu (mobile)
function cancel(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}


// Array of words for the typewriter effect
const texts = [
    "Developer",
    "Student",
    "Programmer"
];


// Typing speed in milliseconds
let speed = 100;


// Reference to the typewriter text element
const textElements = document.querySelector('.typewriter-text');


// Indexes to track current word and character
let textIndex = 0;
let characterIndex = 0;


// Typewriter effect: types out each character
function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}


// Typewriter effect: erases each character
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}


// Start the typewriter effect on page load
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
});