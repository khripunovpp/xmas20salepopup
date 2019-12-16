(function() {
    function Popup(params) {
        var defaultOp = {
            mode: 'fixed',
            toForm: false,
            timer: 1000
        };
        var options = $.extend(defaultOp, params);

        var popup = $('.xmas20sale'),
            closeBtn = $('.xmas20sale__close');

        this.open = open;
        this.close = close;

        $(function() {
            $('head').append($('<style />').html('.fixedBody {overflow: hidden}'));
            if (options.mode === 'timer') {
                setTimeout(function() {
                    open();
                }, options.timer)
            } else {
                popup.css('display', 'block');
                $('body').addClass('fixedBody');
            }
            closeBtn.on('click', function(event) {
                event.preventDefault();
                close();
            });
        });

        function close() {
            popup.fadeOut(400, function() {
                $('body').removeClass('fixedBody');
            });
            if (options.toForm) toForm();
        }

        function open() {
            popup.fadeIn(400);
            $('body').addClass('fixedBody');
        }

        function toForm() {
            var a = $('.js_submit');
            var b = a.closest('form');

            if ($('form#toform').length) {
                a = $('#toform .js_submit');
                b = a.closest('form#toform');
            }

            if (b.length && a.is(':visible')) {
                $("html,body").animate({ scrollTop: b.last().offset().top }, 1000);
            }
        }
    }
    window.XmasPopup = Popup
}());

$(function() {
    /*
    mode: - fixed(default) - показан при загрузке ленда
          - timer - показывается по таймеру
    timer: 1000(default) - время до показа попапа (ms)
    toForm: false(default) - скролл к форме после закрытия
    */

    var xmas20popup = new XmasPopup({
        toForm: true
    })
});