$(document).ready(()=>{
    const quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
            toolbar: '#toolbar',
        }
    });

    quill.on('text-change', (ev) => {
       $('#save').removeClass('saved');
    });

    $('#write-tags').tagify({
        delimiters: '\n',
    });

    $('#write-thumb').on('change', function (ev) {
        const file = $(this)[0].files.item(0);
        const uri = file ? URL.createObjectURL(file) : '';
        $('.write-thumb img').attr('src', uri);
        $(this).parent().find('.custom-file-label').text(file.name);
    });

    $('#save').on('click', function () {
        $(this).addClass('onsave');
        setTimeout(() => {
            $(this).removeClass('onsave');
            $(this).addClass('saved');
        }, 2000);
    })
});
