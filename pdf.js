const previewBig = document.getElementById('previewBig');

export default function getPdf() {
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