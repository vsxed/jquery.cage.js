/*!
 * jQuery Cage Plugin
 * jquery.cage.js
 * Copyright (c) 2013 Eduard Mayer
 * Version 0.8
 * Licensed MIT (http://www.opensource.org/licenses/mit-license.php)
 */

$(function () {
    $.fn.cage = function (options) {

            var settings = {
                type: 'calm',
                auto: false,
                refresh: 3000
            };

            var element = $(this);

            if (options) $.extend(settings, options);

            if (settings.type === 'calm') {
                var baseURL = 'http://www.placecage.com/';
            } else if (settings.type === 'grey') {
                var baseURL = 'http://www.placecage.com/g/';
            } else if (settings.type === 'crazy') {
                var baseURL = 'http://www.placecage.com/c/';
            }

            function getCage() {
                var randomNumber = Math.floor(Math.random() * 626) + 75;
                var url = baseURL + randomNumber + '/' + randomNumber;

                $(element).css("background", "url(" + url + ") 0 0 repeat");
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