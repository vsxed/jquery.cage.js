/*!
 * jQuery Cage Plugin
 * jquery.cage.js
 * Copyright (c) 2013 Eduard Mayer
 * Version 0.9
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

            /* Refresh the refresh value if theres set any. Otherwise use a 3000ms as a base */
            var fadetime = settings.refresh * 0.3;

            function getCage() {
            	var randomNumber = Math.floor(Math.random() * 626) + 75,
                url = baseURL + randomNumber + '/' + randomNumber;
    			$(element).css("opacity", "0");
                $(element).css("background", "url(" + url + ") 0 0 repeat").fadeTo(fadetime, 1.0);
            }

            if (settings.auto === true) {
            	getCage();
                setInterval(function () {
                    $(element).fadeOut(fadetime, function(){
                    	getCage();
                    	$(this).fadeIn(fadetime);
                    });
                }, settings.refresh);
            } else {
                getCage();
            }
        };
});