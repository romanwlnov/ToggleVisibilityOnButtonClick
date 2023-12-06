document.getElementById('toggleButton').addEventListener('click', function() {
    var elementToToggle = document.getElementById('elementToToggle');
    if (elementToToggle.style.display === 'none') {
        elementToToggle.style.display = 'block';
    } else {
        elementToToggle.style.display = 'none';
    }
});
