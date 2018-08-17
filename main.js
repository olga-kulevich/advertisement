const btnPrew = document.getElementById('preview_btn');

btnPrew.addEventListener('click', function () {
    $('#previewBig').show(0);
    domtoimage.toSvg(document.getElementById('previewBig')).then(function (dataUrl) {
    $('#previewBig').hide();
    var img = new Image();
    img.src = dataUrl;
    img.classList.add("img-fluid", "img-responsive");

    document.getElementById("preview").appendChild(img);
    })
});

function getScreenshot() {
    $('#previewBig').show(0);
    domtoimage.toBlob(document.getElementById('previewBig'))
        .then(function (blob) {
            $('#previewBig').hide();
            window.saveAs(blob, 'test.png');
    });
}
