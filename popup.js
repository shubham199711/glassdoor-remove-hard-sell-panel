document.addEventListener('DOMContentLoaded', function () {
    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function () {
        document.getElementById('HardsellOverlay').remove()
        const body = document.getElementsByTagName("body")[0]
        body.style.overflow = 'auto'
        body.style.position = 'unset'
    });
});