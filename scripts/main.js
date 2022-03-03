
// selecting attributes from html
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
const DETAL_FRAME_SELECTOR = '[data-image-role="frame"]'
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'
const HIDDEN_DETAIL_CLASS = 'hidden-detail'
const ESC_KEY = 27
const TINY_EFFECT_CLASS = 'is-tiny'

// function to change the image and text
function setDetails(imageURL, titleText) {
    'use strict'

    // changinging the image
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR)
    // detailImage.setAttribute('src', 'img/otter3.jpg')
    detailImage.setAttribute('src', imageURL)


    // changing image title
    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR)
    // detailTitle.textContent = 'You Should Be Dancing'
    detailTitle.textContent = titleText
}

// function to retrieve and return the value of the data-image-url attribute
function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict'
    return thumbnail.getAttribute('data-image-title')
}

/*
    Brings the three other functions together for convenience, so
    that you do not need to call them separately. It will accept a reference to a thumbnail
    element and then call setDetails, passing in the values from calling
    imageFromThumb and titleFromThumb.
*/
function setDetailsFromThumb(thumbnail) {
    'use strict'
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail))
}

function addThumbClickHandler(thumb) {
    'use strict'
    thumb.addEventListener('click', function (event) {
        event.preventDefault()
        setDetailsFromThumb(thumb)
        showDetails()
    })
}

function getThumbnailsArray() {
    'use strict';
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails)
}

function hideDetails() {
    'use strict'
    document.body.classList.add(HIDDEN_DETAIL_CLASS)
}

function showDetails() {
    'use strict'
    const frame = document.querySelector(DETAL_FRAME_SELECTOR)
    document.body.classList.remove(HIDDEN_DETAIL_CLASS)
    frame.classList.add(TINY_EFFECT_CLASS)
    setTimeout( () => {
        frame.classList.remove(TINY_EFFECT_CLASS)
    })
}

function addKeyPressHandler() {
    'use strict'
    document.body.addEventListener('keyup', function (event) {
        event.preventDefault()
        console.log(event.keyCode)
        if (event.keyCode === ESC_KEY) {
            hideDetails()
        }
    })
}

function initializeEvents() {
    'use strict'
    let thumbnails = getThumbnailsArray()
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler()
}

initializeEvents()