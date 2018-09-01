import States from './states.js';
import initMenu from './menu.js';
import putLoadedImageOnPreview from './preview.js';

initMenu();

const preview = document.getElementById('preview'),
    previewBig = document.getElementById('previewBig'),
    photo = document.getElementById('photo'),
    title = document.getElementById('title'),
    selectTitle = document.getElementById('select-title'),
    selectAnimal = document.getElementById('animal'),
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
    fee = document.getElementById('fee'),
    sumFee = document.getElementById('sum-fee'),
    btnUndo = document.getElementById('undo'),
    btnSavePdf = document.getElementById('save-pdf'),
    btnSaveAdvert = document.getElementById('save-advertisement');

const states = new States({
    animal: selectAnimal.value,
    character: areaMainChar.value,
    conditions: areaConditions.value,
    description: areaDescriptAnimal.value,
    behavfeatures: areaBehavioralFeatures.value,
    firstphone: firstInputPhonenumber.value,
    secondphone: secondInputPhonenumber.value,
    fee: sumFee.value
});

btnSavePdf.addEventListener('click', getPdf);

photo.addEventListener('change', putLoadedImageOnPreview);

btnSaveAdvert.addEventListener('click', getScreenshot);

btnUndo.addEventListener('click', function() {
    states.undo();
    pringState();
    createPreview();
    refreshingPreview();
});

function pringState() {
    selectAnimal.value = states.get('animal');
    areaMainChar.value = states.get('character');
    areaConditions.value = states.get('conditions');
    areaDescriptAnimal.value = states.get('description');
    areaBehavioralFeatures.value = states.get('behavfeatures');
    firstInputPhonenumber.value = states.get('firstphone');
    secondInputPhonenumber.value = states.get('secondphone');
    sumFee.value = states.get('fee');
}

function pushAnimal() {
    states.push({
        animal: selectAnimal.value
    });
}

function pushCharacter() {
    states.push({
        character: areaMainChar.value
    });
}

function pushConditions() {
    states.push({
        conditions: areaConditions.value
    });
}

function pushDescriptAnimal() {
    states.push({
        description: areaConditions.value
    });
}

function pushBehavFeatures() {
    states.push({
        behavfeatures: areaBehavioralFeatures.value
    });
}

function pushFirstPhone() {
    states.push({
        firstphone: firstInputPhonenumber.value
    });
}

function pushSecondPhone() {
    states.push({
        secondphone: secondInputPhonenumber.value
    });
}

function pushFee() {
    states.push({
        fee: sumFee.value
    });
}

selectAnimal.addEventListener('input', debounce(pushAnimal, 300));
areaMainChar.addEventListener('input', debounce(pushCharacter, 300));
areaConditions.addEventListener('input', debounce(pushConditions, 300));
areaDescriptAnimal.addEventListener('input', debounce(pushDescriptAnimal, 300));
areaBehavioralFeatures.addEventListener('input', debounce(pushBehavFeatures, 300));
firstInputPhonenumber.addEventListener('input', debounce(pushFirstPhone, 300));
secondInputPhonenumber.addEventListener('input', debounce(pushSecondPhone, 300));
sumFee.addEventListener('input', debounce(pushFee, 300));

function createPreview() {
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

export function getScreenshot() {
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
            pdf.setFontType("normal");
            pdf.setFontSize(10);
            pdf.text(85, 295, '@propalasobaka.press');

            pdf.save('ad.pdf');
        });
};

function debounceCreatePreview() {
    refreshingPreview();
    delayProcess();
}

function debounce(payloadFunction, delayMs) {
    var timerId;

    return function () {
        var params = arguments;

        clearTimeout(timerId);

        timerId = setTimeout(function () {
            payloadFunction.apply(null, params);
        }, delayMs);
    };
};

function refreshingPreview() {
    if (preview.style.opacity == 1) {
        const loadingIndicator = document.createElement("span");
        loadingIndicator.classList.add("glyphicon", "glyphicon-refresh", "spin", "loading-indicator");
        preview.appendChild(loadingIndicator);
    }

    preview.style.opacity = 0.5;
}

const delayProcess = debounce(createPreview, 500);

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

document.addEventListener('DOMContentLoaded', createPreview);