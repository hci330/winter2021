/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each .image 
 * element so that when the .image element is clicked, the corresponding 
 * image loads in the .featured_image element.
 */

const setImage = (srcThumbElement) => {
    // set the image:
    document.querySelector('.featured_image').style.backgroundImage = srcThumbElement.style.backgroundImage;

    // find the current element with the "active" class and remove it:
    document.querySelector('.active').classList.remove('active');

    // add the "active class to the thumbnail the user just clicked"
    srcThumbElement.classList.add('active');
}

// attach event handler to each image:
for (const elem of document.querySelectorAll('.image')) {
    elem.onclick = (ev) => {
        setImage(ev.currentTarget);
    }
}

/** 
 * 2. Create event handlers for the next and previous buttons so that you 
 * can easily see each image in sequence.
 */

document.querySelector('.prev').onclick = (ev) => {
    let thumbElement;
    try {
        // get the previous thumb (if it exists):
        thumbElement = document.querySelector('.active').parentElement.previousElementSibling.querySelector('.image');
    } catch (ex) {
        // otherwise get the last one:
        const thumbs = document.querySelectorAll('.image');
        thumbElement = thumbs[thumbs.length - 1];
    }
    setImage(thumbElement);
}

document.querySelector('.next').onclick = (ev) => {
    let thumbElement;
    try {
        // get the next thumb (if it exists):
        thumbElement = document.querySelector('.active').parentElement.nextElementSibling.querySelector('.image');
    } catch (ex) {
        // otherwise get the first one
        thumbElement = document.querySelectorAll('.image')[0];
    }
    setImage(thumbElement);
}