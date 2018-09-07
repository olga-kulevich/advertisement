export function setCounter() {
    var arr = [
        'area-main-characteristics',
        'area-conditions',
        'area-description-animal',
        'area-behavioral-features',
    ];

    arr.forEach(function(item) {
        let element = document.getElementById(item);
        element.addEventListener('input', (event) => updateCounter(event.currentTarget));
        updateCounter(element);
    });
}

function updateCounter(target) {
    var maxLength = target.getAttribute('maxlength'),
        currentLength = target.value.length;

    target.nextElementSibling.innerHTML = currentLength + '/' + maxLength;
}