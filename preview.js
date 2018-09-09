import debounce from './debounce.js';

const preview = document.getElementById('preview'),
    selectTitle = document.getElementById('select-title'),
    selectAnimal = document.getElementById('animal'),
    areaMainChar = document.getElementById('area-main-characteristics'),
    areaConditions = document.getElementById('area-conditions'),
    areaDescriptAnimal = document.getElementById('area-description-animal'),
    areaBehavioralFeatures = document.getElementById('area-behavioral-features'),
    firstInputPhonenumber = document.getElementById('first-input-phonenumber'),
    secondInputPhonenumber = document.getElementById('second-input-phonenumber'),
    sumFee = document.getElementById('sum-fee'),
    title = document.getElementById('title'),
    description = document.getElementById('description'),
    description2 = document.getElementById('description2'),
    behavioralFeatures = document.getElementById('behavioral-features'),
    firstPhonenumber = document.getElementById('first-phonenumber'),
    secondPhonenumber = document.getElementById('second-phonenumber'),
    checkbox = document.getElementById('inlineCheckbox1');

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

    domtoimage.toJpeg(previewBig)
        .then(function (dataUrl) {
            while (preview.firstChild) {
                preview.removeChild(preview.firstChild);
            }

            $('#previewBig').hide();
            var img = new Image();
            img.src = dataUrl;
            img.classList.add("img-responsive");

            preview.appendChild(img);
            preview.style.opacity = 1;
        });
}

const delayProcess = debounce(createPreview, 700);

export function debounceCreatePreview() {
    refreshingPreview();
    delayProcess();
}

photo.addEventListener('change', debounceCreatePreview);
selectTitle.addEventListener('change', debounceCreatePreview);
selectAnimal.addEventListener('input', debounceCreatePreview);
areaMainChar.addEventListener('input', debounceCreatePreview);
areaConditions.addEventListener('input', debounceCreatePreview);
areaDescriptAnimal.addEventListener('input', debounceCreatePreview);
areaBehavioralFeatures.addEventListener('input', debounceCreatePreview);
firstInputPhonenumber.addEventListener('input', debounceCreatePreview);
secondInputPhonenumber.addEventListener('input', debounceCreatePreview);
checkbox.addEventListener('change', debounceCreatePreview);
sumFee.addEventListener('input', debounceCreatePreview);

export function refreshingPreview() {
    if (preview.style.opacity == 1) {
        const loadingIndicator = document.createElement("span");
        loadingIndicator.classList.add("glyphicon", "glyphicon-refresh", "spin", "loading-indicator");
        preview.appendChild(loadingIndicator);
    }

    preview.style.opacity = 0.5;
}
