
// selecting attributes from html
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="target"]'

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