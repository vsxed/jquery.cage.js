$(function () {
    $.fn.cage = function (options) {

            var settings = {
                element: 'body',
                type: 'calm',
                auto: false,
                refresh: 3000
            };

            if (options) $.extend(settings, options);

            if (settings.type === 'calm') {
                var baseURL = 'http://www.placecage.com/';
            } else if (settings.type === 'gray') {
                var baseURL = 'http://www.placecage.com/g/';
            } else if (settings.type === 'crazy') {
                var baseURL = 'http://www.placecage.com/c/';
            }

            function getCage() {
                var randomNumber = Math.floor(Math.random() * 626) + 75;
                var url = baseURL + randomNumber + '/' + randomNumber;

                $(settings.element).css("background", "url(" + url + ") 0 0 repeat");
            }

            if (settings.auto === true) {
                getCage();
                setInterval(function () {
                    getCage();
                }, settings.refresh);
            } else {
                getCage();
            }
        };
});