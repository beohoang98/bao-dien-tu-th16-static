(($)=>{
    $(document).ready(() => {
        $('#change-avatar').on('change', handleAvatarChange);

        $('#edit-basic').on('click', () => {
            $('#basic').addClass('editable');
        });
        $('#basic').on('submit', (ev)=>{
            ev.preventDefault();

            $('#basic').removeClass('editable');

            $('#basic input').each((id, el) => {
                const name = $(el).attr('name');
                const value = typeof $(el).val === 'function' ? $(el).val() : $(el).text();
                console.log(`${name} = ${value}`);
                $('#' + name).text(value);
            });

            return false;
        })
    });

    function handleAvatarChange() {
        const file = this.files[0];

        if (file) {
            const url = URL.createObjectURL(file);
            const oldUrl = $('.profile #avatar').attr('src');

            $('.profile #avatar').attr('src', url);
        } else {
            console.log('User cancel change avatar');
        }
    }

})(jQuery);
