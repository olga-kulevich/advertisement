export default function debounce(payloadFunction, delayMs) {
    var timerId;

    return function () {
        var params = arguments;

        clearTimeout(timerId);

        timerId = setTimeout(function () {
            payloadFunction.apply(null, params);
        }, delayMs);
    };
};