import initMenu from './menu.js';
import getScreenshot from './screenshot.js';
import getPdf from './pdf.js';
import {putLoadedImageOnPreview, createPreview} from './preview.js';
import {counterr, counter} from './count-symbols.js';

const photo = document.getElementById('photo'),
    btnSavePdf = document.getElementById('save-pdf'),
    btnSaveAdvert = document.getElementById('save-advertisement');

initMenu();
counterr();

btnSavePdf.addEventListener('click', getPdf);

photo.addEventListener('change', putLoadedImageOnPreview);

btnSaveAdvert.addEventListener('click', getScreenshot);

document.addEventListener('DOMContentLoaded', createPreview);