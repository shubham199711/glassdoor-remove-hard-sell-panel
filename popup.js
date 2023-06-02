document.addEventListener('DOMContentLoaded', function () {
    console.log("here ---------------->");
    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function () {
        console.log("here 2 ---------------->");
        var HardsellOverlay = document.getElementById('HardsellOverlay')
        if (HardsellOverlay) {
            HardsellOverlay.remove()
        }
        var body = document.getElementsByTagName("body")[0]
        body.style.overflow = 'auto'
        body.style.position = 'unset'
    });
});