$('#avatar-file').change(function () {
    previewFile();
});
$('#photo-file').change(function () {
    photoFile();
});
function previewFile() {
    var preview = document.querySelector('.add-review__avatar'), file = document.getElementById('avatar-file').files[0], reader = new FileReader();
    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
}
//# sourceMappingURL=_add-review.js.map