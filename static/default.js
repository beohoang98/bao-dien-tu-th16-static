function fakeSubmit(ev) {
    ev.preventDefault();
    
    const form = ev.target;
    const url = new URL(form.action);
    url.searchParams.set('form', 'login-register');
    console.log(url);

    location.href = url.href;
}

$(document).ready(() => {
    $('#modal-login form, #modal-signup form').on('submit', fakeSubmit);
})