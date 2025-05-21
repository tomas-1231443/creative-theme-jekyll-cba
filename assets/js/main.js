(function ($) {
    "use strict";

    /*==================================================================
    [ Focus input + has-val toggle ]
    ==================================================================*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            const value = $(this).val().trim();
            if (value !== "") {
            $(this).addClass('has-val');
            // console.log(`Added .has-val to [name=${$(this).attr('name')}], value: "${value}"`);
            } else {
            $(this).removeClass('has-val');
            // console.log(`Removed .has-val from [name=${$(this).attr('name')}], input is empty`);
            }
        });
    });

    /*==================================================================
    [ Validate ]
    ==================================================================*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) === false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() === '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

    /*==================================================================
    [ Show/hide password ] — FIXED
    ==================================================================*/
    $('.btn-show-pass').on('click', function () {
        var input = $(this).siblings('input');
        var icon = $(this).find('i');
        var isVisible = input.attr('type') === 'text';

        input.attr('type', isVisible ? 'password' : 'text');
        icon.toggleClass('zmdi-eye zmdi-eye-off');
    });

})(jQuery);
