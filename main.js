import initMenu from './menu.js';
import getScreenshot from './screenshot.js';
import getPdf from './pdf.js';
import {putLoadedImageOnPreview, createPreview} from './preview.js?v=0.1';
import {setCounter} from './count-symbols.js';
import sendMail from './feedback.js';

const photo = document.getElementById('photo'),
    btnSavePdf = document.getElementById('save-pdf'),
    btnSaveAdvert = document.getElementById('save-advertisement'),
    feedbackName = document.getElementById('feedback-name'),
    feedbackMail = document.getElementById('feedback-mail'),
    feedbackMessage = document.getElementById('feedback-message'),
    feedbackSubmit = document.getElementById('feedback-submit'),
    formFeedback = document.forms['feedback'];

if (feedbackName.value.length == 0 || feedbackMail.value.length == 0 || feedbackMessage.value.length == 0) {
    feedbackSubmit.disabled = true;
} else {
    feedbackSubmit.disabled = false;
}

formFeedback.addEventListener('keyup', function() {
    if (feedbackName.readOnly == false &&
        feedbackName.value.length > 0 && feedbackMail.value.length > 0 
        && feedbackMessage.value.length > 0) {
        feedbackSubmit.disabled = false;
    }
});

feedbackSubmit.addEventListener('click', function() {
    if (feedbackSubmit.disabled == false) {
        sendMail();
        
        var elements = formFeedback.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
        }
        
        feedbackSubmit.disabled = true;   
    } 
});

formFeedback.addEventListener('submit', function(event) {
        event.preventDefault ();
});

initMenu();
setCounter();

btnSavePdf.addEventListener('click', getPdf);

photo.addEventListener('change', putLoadedImageOnPreview);

btnSaveAdvert.addEventListener('click', getScreenshot);

document.addEventListener('DOMContentLoaded', createPreview);