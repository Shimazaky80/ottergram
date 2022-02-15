
// selecting attributes from html
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

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
    })
}