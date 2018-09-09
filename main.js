import initMenu from './menu.js';
import getScreenshot from './screenshot.js';
import getPdf from './pdf.js';
import {putLoadedImageOnPreview, createPreview} from './preview.js?v=0.1';
import {setCounter} from './count-symbols.js';
import sendMail from './feedback.js';

const photo = document.getElementById('photo'),
    btnSavePdf = document.getElementById('save-pdf'),
    btnSaveAdvert = document.getElementById('save-advertisement'),
    feedbackSubmit = document.getElementById('feedback-submit');

feedbackSubmit.addEventListener('click', function() {
    sendMail();
    feedbackSubmit.disabled = true;
});

initMenu();
setCounter();

btnSavePdf.addEventListener('click', getPdf);

photo.addEventListener('change', putLoadedImageOnPreview);

btnSaveAdvert.addEventListener('click', getScreenshot);

document.addEventListener('DOMContentLoaded', createPreview);