import States from './states.js';
import initMenu from './menu.js';
import debounce from './debounce.js';
import getScreenshot from './screenshot.js';
import getPdf from './pdf.js';
import {putLoadedImageOnPreview, createPreview, refreshingPreview} from './preview.js';

const photo = document.getElementById('photo'),
    selectAnimal = document.getElementById('animal'),
    conditions = document.getElementById('conditions'),
    areaMainChar = document.getElementById('area-main-characteristics'),
    areaConditions = document.getElementById('area-conditions'),
    areaDescriptAnimal = document.getElementById('area-description-animal'),
    areaBehavioralFeatures = document.getElementById('area-behavioral-features'),
    firstInputPhonenumber = document.getElementById('first-input-phonenumber'),
    secondInputPhonenumber = document.getElementById('second-input-phonenumber'),
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

initMenu();

btnSavePdf.addEventListener('click', getPdf);

photo.addEventListener('change', putLoadedImageOnPreview);

btnSaveAdvert.addEventListener('click', getScreenshot);

btnUndo.addEventListener('click', function() {
    states.undo();
    reverseState();
    createPreview();
    refreshingPreview();
});

function reverseState() {
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

document.addEventListener('DOMContentLoaded', createPreview);