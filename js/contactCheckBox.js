document.addEventListener('DOMContentLoaded', function () {
    const checkboxCustom = document.getElementById('checkboxCustom');
    const subscribeCheckbox = document.getElementById('subscribe');

    const initialSvgCode = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none"><path d="M2 6.97348L5.17296 10.1464L13.3194 2" stroke="white" stroke-width="3"/></svg>';

    // Checkbox paspaudimo įvykio klausymas
    subscribeCheckbox.addEventListener('change', function () {
        // Keičiame SVG kodą pagal buvusią būseną
        checkboxCustom.innerHTML = subscribeCheckbox.checked ? initialSvgCode : '';
    });
});
