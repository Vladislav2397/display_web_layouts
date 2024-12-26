const viewportOffsetTop = document.querySelector('#viewport-offsetTop')
const viewportPageTop = document.querySelector('#viewport-pageTop')
const viewportWidth = document.querySelector('#viewport-width')
const viewportHeight = document.querySelector('#viewport-height')

const screenWidth = document.querySelector('#screen-width')
const screenHeight = document.querySelector('#screen-height')

function onResize() {
    const vp = window.visualViewport

    viewportOffsetTop.innerHTML = `offsetTop: ${vp.offsetTop}`
    viewportPageTop.innerHTML = `pageTop: ${vp.pageTop}`
    viewportWidth.innerHTML = `width: ${vp.width}`
    viewportHeight.innerHTML = `height: ${vp.height}`
}

function onScreen() {
    const data = window.screen

    screenWidth.innerHTML = `width: ${data.width}`
    screenHeight.innerHTML = `height: ${data.height}`
}

window.visualViewport.addEventListener('resize', onResize)
window.visualViewport.addEventListener('scroll', onResize)
onResize()
// window.visualViewport.addEventListener('resize', onScreen)
// window.visualViewport.addEventListener('scroll', onScreen)
onScreen()