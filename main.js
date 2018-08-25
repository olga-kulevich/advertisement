const btnPrew = document.getElementById('preview_btn'),
    saveAd = document.getElementById('save-advertisement'),
    savePdf = document.getElementById('save-pdf'),
    preview = document.getElementById('preview'),
    previewBig = document.getElementById('previewBig'),
    title = document.getElementById('title'),
    selectTitle = document.getElementById('select-title'),
    description = document.getElementById('description'),
    areaMainChar = document.getElementById('area-main-characteristics'),
    conditions = document.getElementById('conditions'),
    areaConditions = document.getElementById('area-conditions'),
    description2 = document.getElementById('description2'),
    areaDescriptAnimal = document.getElementById('area-description-animal'),
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
    var reader = new FileReader();

    reader.onloadend = function() {
        petImage.src = reader.result;
    };

    if (file && document.getElementById('photo').files.length !== 0) {
        reader.readAsDataURL(file);
        btnPrew.disabled = false;
        saveAd.classList.remove('disabled');
        savePdf.classList.remove('disabled');

    } else {
        btnPrew.disabled = true;
        saveAd.classList.add('disabled');
        savePdf.classList.add('disabled');
    }
}

//function createPreview() {}

//btnPrew.addEventListener('click', createPreview);

btnPrew.addEventListener('click', function () {
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    title.innerHTML = selectTitle.options[selectTitle.selectedIndex].value.toUpperCase();
    description.innerHTML = areaMainChar.value;
    conditions.innerHTML = areaConditions.value;
    description2.innerHTML = areaDescriptAnimal.value;
    behavioralFeatures.innerHTML = areaBehavioralFeatures.value;
    firstPhonenumber.innerHTML = firstInputPhonenumber.value;
    secondPhonenumber.innerHTML = secondInputPhonenumber.value;

    if (checkbox.checked) {
        fee.innerHTML = checkbox.value;
    } else {
        fee.innerHTML = "";
    }

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

function getPdf() {
    $('#previewBig').show(0);

    domtoimage.toJpeg(previewBig)
        .then(function (dataUrl) {
            $('#previewBig').hide();
            var pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(dataUrl, 'jpeg', 5, 7.5, 199.5, 282.15);
            //pdf.addFont('ArialMS', 'Arial', 'normal');
            //pdf.setFont("Arial");
            pdf.setFontType("normal");
            pdf.setFontSize(10);
            pdf.text(85, 295, '@propalasobaka.press');

            pdf.save('ad.pdf');
        });
};

//document.addEventListener('DOMContentLoaded', createPreview);