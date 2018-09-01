export default function putLoadedImageOnPreview() {
    var petImage = document.getElementById('pet-image');
    var file = document.getElementById('photo').files[0];
    var reader = new FileReader();

    if (file && document.getElementById('photo').files.length !== 0) {
        reader.onloadend = function() {
            petImage.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
}