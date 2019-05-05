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
    matchURL();
    matchParams();
});

function matchParams() {
    const typeParam = (new URL(location)).searchParams.get('type') || 'normal';
    const types = typeParam.split(' ');
    console.log(types);

    for (const type of types) {
        $('[class$=-ui]').css('display', 'none');
        switch (type) {
            case 'premium':
            case 'writer':
            case 'editor':
            case 'admin':
                $('.normal-ui').css('display', 'none');
                $(`.${type}-ui`).css('display', 'block');
                break;

            case 'normal':
                $('.normal-ui').css('display', 'block');
                break;
            default:
                $('.normal-ui').css('display', 'block');
                break;
        }
    }
}

function matchURL() {
    const path = new URL(location).pathname;
    console.log(path);

    const regexes = [
        [/^\/writer\/.*$/, 'writer'],
        [/^\/editor\/.*$/, 'editor'],
        [/^\/admin\/.*$/, 'admin'],
    ];

    for (const reg of regexes) {
        if (path.match(reg[0])) {
            $('[class$=-ui]').css('display', 'none');
            $(`.${reg[1]}-ui`).css('display', 'block');
            console.log(reg[1]);
            break;
        }
    }
}
