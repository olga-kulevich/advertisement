export function putLoadedImageOnPreview() {
    var petImage = document.getElementById('pet-image');
    var file = document.getElementById('photo').files[0];
    var reader = new FileReader();

    if (file && document.getElementById('photo').files.length !== 0) {
        reader.onloadend = function () {
            petImage.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
}

const title = document.getElementById('title'),
    description = document.getElementById('description'),
    description2 = document.getElementById('description2'),
    behavioralFeatures = document.getElementById('behavioral-features'),
    firstPhonenumber = document.getElementById('first-phonenumber'),
    secondPhonenumber = document.getElementById('second-phonenumber');

export function createPreview() {
    putLoadedImageOnPreview();

    title.innerHTML = selectTitle.options[selectTitle.selectedIndex].value.toUpperCase() + ' ' + selectAnimal.value.toUpperCase();
    description.innerHTML = areaMainChar.value;
    conditions.innerHTML = areaConditions.value;
    description2.innerHTML = areaDescriptAnimal.value;
    behavioralFeatures.innerHTML = areaBehavioralFeatures.value;
    firstPhonenumber.innerHTML = firstInputPhonenumber.value;
    secondPhonenumber.innerHTML = secondInputPhonenumber.value;

    if (checkbox.checked) {
        fee.innerHTML = checkbox.value + ' ' + sumFee.value + '!';
    } else {
        fee.innerHTML = "";
    }

    $('#previewBig').show(0);

    domtoimage.toSvg(previewBig)
        .then(function (dataUrl) {
            while (preview.firstChild) {
                preview.removeChild(preview.firstChild);
            }

            $('#previewBig').hide();
            var img = new Image();
            img.src = dataUrl;
            img.classList.add("img-fluid", "img-responsive");

            preview.appendChild(img);
            preview.style.opacity = 1;
        });
}
