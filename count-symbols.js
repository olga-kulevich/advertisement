export function counterr() {
    var arr = ['area-main-characteristics','area-conditions','area-description-animal','area-behavioral-features'];

    arr.forEach(function(item) {
        let element = document.getElementById(item);
        element.addEventListener('input', counter);
    })
}

export function counter(event) {

    var element = event.currentTarget,
        maxlength = element.getAttribute('maxlength'),
        currentLength = element.value.length;

    element.nextElementSibling.innerHTML = currentLength + '/' + maxlength;
}

