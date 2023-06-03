const HardsellOverlay = document.getElementById('HardsellOverlay')
if (HardsellOverlay) {
    HardsellOverlay.remove()
}
const body = document.body
if (body) {
    body.style.overflow = 'auto'
    body.style.position = 'unset'
}