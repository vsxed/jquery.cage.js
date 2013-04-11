
// DA OBEN BITTE

$('.smoothie, .for, .back').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1800);
            return false;
        }
    }
});

 // New Form Validation
        // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':

        

        // bind the validation to the form submit event
        //$('#send').click('submit');//.prop('disabled', true);
