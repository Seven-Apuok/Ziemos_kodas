document.addEventListener('DOMContentLoaded', function () {
    const checkboxCustom = document.getElementById('checkboxCustom');
    const Checkbox = document.getElementById('subscribe');

    const SvgCode = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="1 1 15 13" fill="none"><rect width="100%" height="100%" fill="#BA4270" /><path d="M2 6.97348L5.17296 10.1464L13.3194 2" stroke="white" stroke-width="3"/></svg>';

    Checkbox.addEventListener('change', function () {

        checkboxCustom.innerHTML = Checkbox.checked ? SvgCode : '';
    });
});


// let box = document.getElementById('subscribe');

// box.setAttribute('class',"checked__box");
// box.setAttribute('disabled',"");