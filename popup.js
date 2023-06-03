const HardsellOverlay = document.getElementById('HardsellOverlay')
console.log({ HardsellOverlay });
console.log(document.body);
if (HardsellOverlay) {
    HardsellOverlay.remove()
}
const body = document.body
body.style.overflow = 'auto'
body.style.position = 'unset'