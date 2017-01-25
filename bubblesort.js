(function($) {
    $.fn.ajax_link = function() {
        $('#ajax-link').hide();
        setTimeout(function() {
            $('#ajax-display').fadeOut().html("").show();
            $('#ajax-shuffle').fadeIn();
        }, 5000)
    }
})(jQuery);

