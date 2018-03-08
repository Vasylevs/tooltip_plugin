;(function ($) {
    $.fn.tooltipF = function () {
        $('body').append('<div class="tooltip-block"></div>');
        var title;
        return this.each(function () {
            var tag = $(this).get(0).nodeName;
            if( tag == 'SPAN'){
                $(this).css({
                    'border-bottom': '1px dashed red',
                    'background': 'yellow'
                });
            };
           $(this).mouseenter(function () {
               title = $.trim($(this).attr('title'));
               $(this).attr('title','');
               if(title == undefined || title == ''){
                   title = $(this).text();
               }
           }).mousemove(function (e) {
                var top = e.clientY + 15;
                var left = e.clientX + 15;
                $('.tooltip-block').css({
                    'left': left,
                    'top': top
                }).text(title);
               $('.tooltip-block').show();
           }).mouseleave(function () {
               $('.tooltip-block').hide();
               $(this).attr('title',title);
           });
        });
    };
})(jQuery);