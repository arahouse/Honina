$(document).ready(function () {
    var Events = {},
        App = {};
    Events = {
        formSend: function () {
            $('form').on('submit', function (e) {
                e.preventDefault();
                var form = $(this);
                form.fadeOut();
                form.siblings('.callback_loading').fadeIn();

                $.ajax({
                    url: '/send_message.php',
                    type: 'post',
                    data: form.serialize(),
                    success: function (data) {
                        form.siblings('.callback_loading').fadeOut();
                        form.siblings('.success-message').fadeIn();
                        console.log(data);
                    },
                    error: function () {
                        console.log(data);
                        form.siblings('.callback_loading').fadeOut();
                        form.siblings('.error-message').fadeIn();
                    }
                });
                return false;
            });
        }
    };

    App = {
        init: function () {
            Events.formSend();
        }
    };


    App.init();

});