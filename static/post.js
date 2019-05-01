(($) => {

    $(document).ready(() => {
        const type = (new URL(location)).searchParams.get('type') || "guest";
    
        $(`.${type}-ui`).css('display', 'block');

        switch (type)
        {
            case "premium":
                $(".premium-overlay").remove();
                $(".is-premium").removeClass('is-premium');
                break;
        }
    });

})(jQuery);