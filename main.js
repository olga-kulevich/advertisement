const btnPrew = document.getElementById('preview_btn'),
    preview = document.getElementById('preview'),
    previewBig = document.getElementById('previewBig'),
    title = document.getElementById('title'),
    selectTitle = document.getElementById('select-title'),
    description = document.getElementById('description'),
    areaDescription1 = document.getElementById('area-description1'),
    conditions = document.getElementById('conditions'),
    areaConditions = document.getElementById('area-conditions'),
    description2 = document.getElementById('description2'),
    areaDescription2 = document.getElementById('area-description2'),
    behavioralFeatures = document.getElementById('behavioral-features'),
    areaBehavioralFeatures = document.getElementById('area-behavioral-features'),
    firstPhonenumber = document.getElementById('first-phonenumber'),
    firstInputPhonenumber = document.getElementById('first-input-phonenumber'),
    secondPhonenumber = document.getElementById('second-phonenumber'),
    secondInputPhonenumber = document.getElementById('second-input-phonenumber'),
    checkbox = document.getElementById('inlineCheckbox1'),
    fee = document.getElementById('fee');

function previewFile() {
    var petImage = document.getElementById('pet-image');
    var file = document.getElementById('photo').files[0];
    var reader  = new FileReader();

    reader.onloadend = function() {
        petImage.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        petImage.src = "";
    }
}

btnPrew.addEventListener('click', function () {
   while (preview.firstChild) {
       preview.removeChild(preview.firstChild);
   }

   title.innerHTML = selectTitle.options[selectTitle.selectedIndex].value.toUpperCase();
   description.innerHTML = areaDescription1.value;
   conditions.innerHTML = areaConditions.value;
   description2.innerHTML = areaDescription2.value;
   behavioralFeatures.innerHTML = areaBehavioralFeatures.value;
   firstPhonenumber.innerHTML = firstInputPhonenumber.value;
   secondPhonenumber.innerHTML = secondInputPhonenumber.value;

   if (checkbox.checked) {
       fee.innerHTML = checkbox.value;
   } else {
       fee.innerHTML = "";
   }

// take screenshot and put to div 'preview'
   $('#previewBig').show(0);

    domtoimage.toSvg(previewBig)
        .then(function (dataUrl) {
            $('#previewBig').hide();
            var img = new Image();
            img.src = dataUrl;
            img.classList.add("img-fluid", "img-responsive");

            preview.appendChild(img);
        })
});

function getScreenshot() {
    $('#previewBig').show(0);

    domtoimage.toBlob(previewBig)
        .then(function (blob) {
            $('#previewBig').hide();
            window.saveAs(blob, 'ad.png');
    });
}
