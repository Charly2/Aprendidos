$(document).ready(function() {

    $('select').material_select();

    var options = [{
            selector: '.twoContainer',
            offset: 50,
            callback: function(el) {
                console.log(el)
                Materialize.toast("<a href='#home' class='jsSlideDownClick'>Regresar arriba</a> ", 65000);
            }
        },

        {
            selector: '.letterA',
            offset: 50,
            callback: function(el) {
                console.log(el)
                Materialize.toast("Materias con letra 'A' ", 6500);
            }
        }, {
            selector: '.letterB',
            offset: 500,
            callback: function(el) {
                Materialize.toast("Materias con letra 'B'", 3500);
            }
        },

        {
            selector: '.letterC',
            offset: 600,
            callback: function(el) {
                Materialize.toast("Materias con letra 'C'", 3500);
            }
        },

        {
            selector: '.letterD',
            offset: 650,
            callback: function(el) {
                Materialize.toast("Materias con letra 'D'", 3500);
            }
        },

        {
            selector: '.letterE',
            offset: 850,
            callback: function(el) {
                Materialize.toast("Materias con letra 'E'", 3500);
            }
        }, {
            selector: '.letterF',
            offset: 750,
            callback: function(el) {
                Materialize.toast("Materias con letra 'F'", 3500);
            }
        }, {
            selector: '.letterG',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'G'", 3500);
            }
        }, {
            selector: '.letterH',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'H'", 3500);
            }
        }, {
            selector: '.letterI',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'I'", 3500);
            }
        }, {
            selector: '.letterL',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'L'", 3500);
            }
        }, {
            selector: '.letterM',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'M'", 3500);
            }
        }, {
            selector: '.letterP',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'P'", 3500);
            }
        }, {
            selector: '.letterQ',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'Q'", 3500);
            }
        }, {
            selector: '.letterR',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'R'", 3500);
            }
        },

        {
            selector: '.letterS',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'S'", 3500);
            }
        }, {
            selector: '.letteT',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'T'", 3500);
            }
        }, {
            selector: '.letteV',
            offset: 780,
            callback: function(el) {
                Materialize.toast("Materias con letra 'V'", 3500);
            }
        }, {
            selector: '#staggered-test',
            offset: 400,
            callback: function(el) {
                Materialize.showStaggeredList($(el));
            }
        }, {
            selector: '#image-test',
            offset: 500,
            callback: function(el) {
                Materialize.fadeInImage($(el));
            }
        }
    ];
    Materialize.scrollFire(options);

    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          
            console.log(modal, trigger);
        },
        complete: function() { refresh() } // Callback for Modal close
    });

    $(".modal-close").on('click', function() {
        $(this).parent().parent().parent().hide('fast');
    });

    $(".modal-close-two").on('click', function() {
         $('.modal-close-two"').modal('close');
    });



    $('.fieldset__Letter .list a, .jsSlideDownClick').click(function() {
        $.scrollTo(this.hash, 1000, { easing: 'swing' });
        return false;
    });

    $(".button-collapse").sideNav();

    $('.jsOpenContinueTeacherRegister').modal('open');

    $('.slider').slider();

    //$('.selectItemMenu .link').dropdown('open');

    //Nosotros
    $(".profiles__Articl").hover(function() {
        $(this).find('.img1').hide(),
            $(this).find('.img2').show();
    }, function() {
        $(this).find('.img2').hide(),
            $(this).find('.img1').show();
    });

    $('.formSearch').on('change', 'select', function() { console.log("got you"); });


    //Continue Register
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 60, // Creates a dropdown of 15 years to control year
        max: [2005, 7, 14]
    });

    $(".jsClickRegister").on('click', function() {

        window.location.href = '/register';

    });





    //Aqui la data
    //
    function toGetCities() {

        var optionLI = '';

        $.getJSON('/adcities-codei-gofjg/json', isJSON, false);

        var result = {}
        var isshow;

        function isJSON(arr) {

            isshow = arr;

            for (var i = 0; i < arr.length; i++) {
                result[arr[i].name] = arr[i];
            }


            $('input.autocomplete').autocomplete({
                data: result,

                limit: 80, // The max amount of results that can be shown at once. Default: Infinity.
            }).click(function(e) {

                $(this).keyup();


            }).keyup(function(e) {

                var n = $(this).val();

                if (n == '') {

                    for (var i = 0; i < isshow.length; i++) {
                        optionLI += "<li><span>" + isshow[i].name + "</span></li>";
                    }

                    var to = "<ul class='autocomplete-content dropdown-content jsCityShow'>" +
                        optionLI +
                        "</ul>";

                    $(".jsAppendCity").html(to);

                    isshow = [];

                    toClick();

                } else {
                    //
                    var removeElement = $(".jsCityShow").remove();
                }

            });


            function toClick() {
                $(".jsCityShow li").click(function() {
                    var valueInsert = $(this).find('span').text();

                    $(".cityauto").val(valueInsert);
                    var removeTo = $(".jsCityShow").remove();
                    isshow = [];
                });
            }


        }
    }

    toGetCities();


    function toGetMaterias() {

        var optionLI = '';

        $.getJSON('/admateries-code-gofjg/json', isJSON, false);

        var result = {}
        var isshow;

        function isJSON(arr) {

            isshow = arr;

            for (var i = 0; i < arr.length; i++) {
                result[arr[i].name] = arr[i];
            }

            $('input.materiasauto').autocomplete({
                data: result,

                limit: 80, // The max amount of results that can be shown at once. Default: Infinity.
            }).click(function(e) {
                $(this).keyup();
            }).keyup(function(e) {

                var n = $(this).val();

                if (n == '') {

                    for (var i = 0; i < isshow.length; i++) {
                        optionLI += "<li><span>" + isshow[i].name + "</span></li>";
                    }

                    var to = "<ul class='autocomplete-content dropdown-content jsAppendShow'>" +
                        optionLI +
                        "</ul>";

                    $(".jsAppendMaterias").html(to);

                    isshow = [];

                    toClick();

                } else {
                    //
                    var removeElement = $(".jsAppendShow").remove();
                }



            });

            function toClick() {
                $(".jsAppendShow li").click(function() {
                    var valueInsert = $(this).find('span').text();

                    $(".materiasauto").val(valueInsert);
                    var removeTo = $(".jsAppendShow").remove();
                    isshow = [];
                });
            }




        }
    }

    toGetMaterias();


    function otherCities() {

        var optionLI = '';

        $.getJSON('/adcities-codei-gofjg/json', isJSON, false);

        var result = {}
        var isshow;

        function isJSON(arr) {

            isshow = arr;

            for (var i = 0; i < arr.length; i++) {
                result[arr[i].name] = arr[i];

                var isVAL = $(".form__Tree input[type='submit']").val();

            }


            $(".cityregister").keyup(function() {

                for (var i = 0; i < arr.length; i++) {
                    if ($(this).val() == arr[i].name) {
                        return $(".form__Tree input[type='submit']").prop('disabled', false);
                    } else {
                        $(".form__Tree input[type='submit']").prop('disabled', true);
                    }
                }

            });



            $('.cityregister').autocomplete({
                data: result,

                limit: 80, // The max amount of results that can be shown at once. Default: Infinity.
            }).click(function(e) {

                $(this).keyup();


            }).keyup(function(e) {

                var n = $(this).val();


                if (n == '') {

                    for (var i = 0; i < isshow.length; i++) {
                        optionLI += "<li><span>" + isshow[i].name + "</span></li>";
                    }

                    var to = "<ul class='autocomplete-content dropdown-content jsCityShow'>" +
                        optionLI +
                        "</ul>";

                    $(".jsAppendCity").html(to);

                    isshow = [];

                    toClick();

                } else {
                    //
                    var removeElement = $(".jsCityShow").remove();
                }


            }).hover(function(e) {

                var valueInsert = $(".cityregister").val();



                for (var i = 0; i < arr.length; i++) {
                    if (valueInsert == arr[i].name) {
                        return $(".form__Tree input[type='submit']").prop('disabled', false);
                    } else {
                        $(".form__Tree input[type='submit']").prop('disabled', true);
                    }
                }

            });


            function toClick() {
                $(".jsCityShow li").click(function() {
                    var valueInsert = $(this).find('span').text();

                    $(".cityregister").val(valueInsert);
                    var removeTo = $(".jsCityShow").remove();
                    isshow = [];

                    $(".cityregister").trigger('click');

                });
            }





            $(".cityregister").keyup(function() {

                for (var i = 0; i < arr.length; i++) {
                    if ($(this).val() == arr[i].name) {
                        return $(".form__Tree input[type='submit']").prop('disabled', false);
                    } else {
                        $(".form__Tree input[type='submit']").prop('disabled', true);
                    }
                }

            });


            $(".teacher__Register--Steps--Container").hover(function() {

                var valueInsert = $(".cityregister").val();

                if ($(".isHidden").length > 0) {


                    $(".form__Tree input[type='submit']").prop('disabled', false);

                } else {

                    for (var i = 0; i < arr.length; i++) {
                        if (valueInsert == arr[i].name) {
                            return $(".form__Tree input[type='submit']").prop('disabled', false);
                        } else {
                            $(".form__Tree input[type='submit']").prop('disabled', true);
                        }
                    }
                }
            });




        }
    }

    otherCities();



    //Delete Cities

    $(".jsDeleteCity").on('click', function() {


        $.ajax({
            url: '/adcities-codei-gofjg/delete',
            type: 'post',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify({
                id: $(this).attr('data-id')
            }),
            success: function(indelete) {
                window.location.reload();
            }

        });


    });


    $(".jsDeleteMateria").on('click', function() {

        $.ajax({
            url: '/admateries-code-gofjg/delete',
            type: 'post',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify({
                id: $(this).attr('data-id')
            }),
            success: function(indelete) {
                window.location.reload();
            }

        })


    });


    //Profesor Register
    function steps() {
        var preload = '<div class="viewpreloader" style="text-align:center;text-align: center;width:65px;margin:0 auto;"><div class="preloader-wrapper big active">' +
            '<div class="spinner-layer spinner-blue">' +
            '<div class="circle-clipper left">' +
            '<div class="circle"></div>' +
            '</div><div class="gap-patch">' +
            '<div class="circle"></div>' +
            '</div><div class="circle-clipper right">' +
            '<div class="circle"></div>' +
            '</div>' +
            '</div></div>';
        if (window.location.hash == '#step1teacher') {
            $(".form__One").css('display', 'block');
        } else if (window.location.hash == '#step2teacher') {

            $(".form__One").css('display', 'none');
            $(".form__One").before(preload);

            setTimeout(function() {
                $(".viewpreloader").hide();
                $(".teacher__Register__steps--Two").show('slow');
            }, 2000);

            //view menu
            $(".teacher__Register--Steps--Menu .list:first-child i").css(
                'color', '#d56046'
            );

        } else if (window.location.hash == '#step3teacher') {
            $(".teacher__Register__Steps--One, .teacher__Register__steps--Two").css('display', 'none');
            $(".teacher__Register__steps--Two").before(preload);

            setTimeout(function() {
                $(".viewpreloader").hide();
                $(".teacher__Register__Steps--Tree").show('slow');
            }, 2000);

            $(".teacher__Register--Steps--Menu .list:first-child i, .list:nth-child(2) i").css(
                'color', '#d56046'
            );


        } else if (window.location.hash == '#step4teacher') {
            $(".teacher__Register__Steps--One, .teacher__Register__steps--Two, .teacher__Register__Steps--Tree").css('display', 'none');
            $(".teacher__Register__Steps--Tree").before(preload);

            setTimeout(function() {
                $(".viewpreloader").hide();
                $(".teacher__Register__Steps--Four").show('slow');
            }, 2000);

            $(".teacher__Register--Steps--Menu .list:first-child i, .list:nth-child(2) i, .list:nth-child(3) i").css(
                'color', '#d56046'
            );

        } else if (window.location.hash == '#step5teacher') {
            $(".teacher__Register__Steps--One, .teacher__Register__steps--Two, .teacher__Register__Steps--Tree, .teacher__Register__Steps--Four").css('display', 'none');
            $(".teacher__Register__Steps--Four").before(preload);
            setTimeout(function() {
                $(".viewpreloader").hide();
                $(".teacher__Register__Steps--Five").show('slow');
            }, 2000);

            $(".teacher__Register--Steps--Menu .list:first-child i, .list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i").css(
                'color', '#d56046'
            );
        }

    }
    steps();


    function teacherContact() {
        $(".activeJs").css('cursor', 'pointer');
        $(".activeJs").click(function() {
            $(this).hide('fast');
            $(".secondd__Iz").show('fast');
            $(".secondd__Iz").addClass('activeOtherJs');

            other();


            var _nameTeacher = $(this).find('.capitalizeCase').text();
            var _dataemail = $(this).attr('data-email');

            $('.modelNew').modal('open');

            $.ajax({
                url: '/save/teacher/visitedcontact',
                type: 'post',
                dataType: 'JSON',
                contentType: 'application/json',
                data: JSON.stringify({
                    name: _nameTeacher,
                    emailsend: _dataemail
                }),
                success: function(data) {
                    alert('enviado');
                },
                error: function(err) {
                    console.log(err)
                }
            });

        });


        function other() {
            $(".activeOtherJs").css('cursor', 'pointer');
            $(".activeOtherJs").click(function() {
                $(this).hide('fast');
                $(".second__Iz").show('fast');
            });
        }

        $(".closeJsTeacher").click(function() {
            $('#modal2').modal('close');
            $(".modal-overlay").remove();

        });
    }

    teacherContact();


    function reviewTeacher() {


        //Hover

        $(".review__Starts .list:nth-child(1) i").hover(function() {
            $(this).css('color', '#ff9800');

            $(".jsTitleHeader").text('¡Malísimo!');

        }, function() {
            $(this).css('color', '#c6c6c6');

            $(".jsTitleHeader").text('¿Calificación?');
        });

        $(".review__Starts .list:nth-child(2) i").hover(function() {
            $(".review__Starts .list:nth-child(1) i").css('color', '#ff9800');
            $(this).css('color', '#ff9800');
            $(".jsTitleHeader").text('Malo');

        }, function() {
            $(".review__Starts .list:nth-child(1) i").css('color', '#c6c6c6');
            $(this).css('color', '#c6c6c6');

            $(".jsTitleHeader").text('¿Calificación?');
        });

        $(".review__Starts .list:nth-child(3) i").hover(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i").css('color', '#ff9800');
            $(this).css('color', '#ff9800');
            $(".jsTitleHeader").text('Zafa');

        }, function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i").css('color', '#c6c6c6');
            $(this).css('color', '#c6c6c6');

            $(".jsTitleHeader").text('¿Calificación?');
        });


        $(".review__Starts .list:nth-child(4) i").hover(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i").css('color', '#ff9800');
            $(this).css('color', '#ff9800');
            $(".jsTitleHeader").text('Bueno');

        }, function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i").css('color', '#c6c6c6');
            $(this).css('color', '#c6c6c6');

            $(".jsTitleHeader").text('¿Calificación?');
        });

        $(".review__Starts .list:nth-child(5) i").hover(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i").css('color', '#ff9800');
            $(this).css('color', '#ff9800');
            $(".jsTitleHeader").text('¡Genial!');

        }, function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i").css('color', '#c6c6c6');
            $(this).css('color', '#c6c6c6');

            $(".jsTitleHeader").text('¿Calificación?');
        });






        var _calification;
        var _calificationresult;
        //Click
        $(".review__Starts .list:nth-child(1) i").click(function() {
            $(this).addClass('visitedReview');

            //Remove
            $(".list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i, .list:nth-child(5) i").removeClass('visitedReview');

            setTimeout(function() {
                $(".jsTitleHeader").text('¡Malísimo!');
            }, 1000);

            calificacion = 1;
            _calificationresult = 1 * 33;



            $(".formReview input[name='calificacion']").val(calificacion);
            $(".formReview input[name='resultcalifi']").val(_calificationresult);

            /////////////////////////////
            //Adding cant calification //
            /////////////////////////////
            $(".formReview input[name='calificacionCant']").val(33);
        });

        $(".review__Starts .list:nth-child(2) i").click(function() {
            $(".review__Starts .list:nth-child(1) i").addClass('visitedReview');
            $(this).addClass('visitedReview');
            //Remove
            $(".list:nth-child(3) i, .list:nth-child(4) i, .list:nth-child(5) i").removeClass('visitedReview');

            setTimeout(function() {
                $(".jsTitleHeader").text('Malo');
            }, 1000);

            calificacion = 2;
            _calificationresult = 2 * 29;

            $(".formReview input[name='calificacion']").val(calificacion);
            $(".formReview input[name='resultcalifi']").val(_calificationresult);

            /////////////////////////////
            //Adding cant calification //
            /////////////////////////////
            $(".formReview input[name='calificacionCant']").val(29);

        });

        $(".review__Starts .list:nth-child(3) i").click(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i").addClass('visitedReview');
            $(this).addClass('visitedReview');
            //Remove
            $(".list:nth-child(4) i, .list:nth-child(5) i").removeClass('visitedReview');

            setTimeout(function() {
                $(".jsTitleHeader").text('Zafa');
            }, 1000);

            calificacion = 3;
            _calificationresult = 3 * 40;

            $(".formReview input[name='calificacion']").val(calificacion);
            $(".formReview input[name='resultcalifi']").val(_calificationresult);

            /////////////////////////////
            //Adding cant calification //
            /////////////////////////////
            $(".formReview input[name='calificacionCant']").val(40);


        });

        $(".review__Starts .list:nth-child(4) i").click(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i").addClass('visitedReview');
            $(this).addClass('visitedReview');
            //Remove
            $(".list:nth-child(5) i").removeClass('visitedReview');

            setTimeout(function() {
                $(".jsTitleHeader").text('Bueno');
            }, 1000);

            calificacion = 4;
            _calificationresult = 4 * 124;

            $(".formReview input[name='calificacion']").val(calificacion);
            $(".formReview input[name='resultcalifi']").val(_calificationresult);

            /////////////////////////////
            //Adding cant calification //
            /////////////////////////////
            $(".formReview input[name='calificacionCant']").val(124);
        });

        $(".review__Starts .list:nth-child(5) i").click(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i").addClass('visitedReview');
            $(this).addClass('visitedReview');

            setTimeout(function() {
                $(".jsTitleHeader").text('¡Genial!');
            }, 1000);

            calificacion = 5;
            _calificationresult = 5 * 252;

            $(".formReview input[name='calificacion']").val(calificacion);
            $(".formReview input[name='resultcalifi']").val(_calificationresult);

            /////////////////////////////
            //Adding cant calification //
            /////////////////////////////
            $(".formReview input[name='calificacionCant']").val(252);
        });



    }

    reviewTeacher();

    function removeReview() {

        $(".jsCloseReview").click(function() {

            var idEdit = $(this).parent().attr('data-id');
            var idRemoveYo = $(this).parent().attr('data-remove');
            var removeid = $(this).parent().attr('data-idreview');


            $.ajax({
                url: '/save/teacher/removereview',
                type: 'post',
                dataType: 'JSON',
                contentType: 'application/json',
                data: JSON.stringify({

                    id: idEdit,
                    idyo: idRemoveYo,
                    remove: removeid

                }),
                done: function(obj) {
                    alert('done')
                },
                success: function(obj) {
                    window.location.reload();
                },
                error: function(err) {
                    console.log(err);
                }
            });

        });

    }
    removeReview();


    function toLikeProfileTeacher() {

        $(".jsLike").on('click', function() {

            var _idTeacher = $(this).attr('data-id');
            var _idUser = $(this).attr('data-user');
            $(".jsLike").addClass('jsRemoveLike');
            //Active black in icon to select
            $(".jsRemoveLike").addClass('viewBlack');

            $(".jsLike").removeClass('jsLike');
            var icon = $(this).parent().html();


            $.ajax({
                url: '/save/teacher/like',
                type: 'post',
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify({
                    id: _idTeacher,
                    iduser: _idUser
                }),
                success: function(toLike) {
                    var cantLikes;

                    window.location.reload();


                },
                error: function(err) {
                    console.log(err);
                }

            })

        });


    }
    toLikeProfileTeacher();


    function toRemoveLikeProfileTeacher() {

        $(".jsRemoveLike").on('click', function() {


            var _idTeacher = $(this).attr('data-id');
            var _idUser = $(this).attr('data-user');
            var _idLikeRemove = $(this).attr('data-idremove');

            $(".jsRemoveLike").addClass('jsLike');
            $(".jsRemoveLike").removeClass('viewBlack');
            $(".jsRemoveLike").removeClass('jsRemoveLike');

            var icon = $(this).parent().html();



            $.ajax({
                url: '/save/teacher/removelike',
                type: 'post',
                dataType: 'JSON',
                contentType: 'application/json',
                data: JSON.stringify({
                    id: _idTeacher,
                    iduser: _idUser,
                    idlikeremove: _idLikeRemove
                }),
                success: function(toLike) {


                    window.location.reload();


                },
                error: function(err) {
                    console.log(err);
                }

            })

        });

    }
    toRemoveLikeProfileTeacher();


    function priceFilter() {



        $(".jsPriceFilter").on('click', function() {


            var number = $(this).find('.number').text();
            var clearNumber = number.replace('$ ', '');
            var convertNumber = Number(clearNumber);


            var sumUrl = convertNumber + 10;

            switch (sumUrl) {

                case 30:


                    var sumUrl = convertNumber + 20;

                    var isUrl = 'find?price=' + sumUrl + '&page=0';
                    window.location.href = isUrl;

                    break;

                case 50:

                    var sumUrl = convertNumber + 30;

                    var isUrl = 'find?price=' + sumUrl + '&page=0';
                    window.location.href = isUrl;

                    break;

                case 60:

                    var sumUrl = convertNumber + 10;

                    var isUrl = 'find?price=' + sumUrl + '&page=0';
                    window.location.href = isUrl;

                    break;

                case 90:

                    var sumUrl = convertNumber + 15;

                    var isUrl = 'find?price=' + sumUrl + '&page=0';
                    window.location.href = isUrl;

                    break;


                case 115:

                    var sumUrl = convertNumber + 25;

                    var isUrl = 'find?price=' + sumUrl + '&page=0';
                    window.location.href = isUrl;

                    break;

                default:
                    var isUrl = 'find?price=' + sumUrl + '&page=0';
                    window.location.href = isUrl;
            }



        });

    }
    priceFilter()


    function editProfilePhoto() {

        $(".profileUser__Figure").hover(function() {
            $('.profileUser__Edit').css('display', 'block');
        }, function() {
            $('.profileUser__Edit').css('display', 'none');
        });

    }
    editProfilePhoto();


    //Shared Social


    function sharedFacebook(element, element2) {

        var ventanaShared = 'menubar=yes,location=yes,resizable=yes,scrollbars=no,status=yes,width=450,height=450,left=450px,top=140px'

        $(element).on('click', function() {
            var urlProfile = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href;

            window.open(urlProfile, 'Aprendidos', ventanaShared);

        });

        $(element2).on('click', function() {

            var urlProfile = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href;
            window.open(urlProfile, 'Aprendidos', ventanaShared);

        });

    }

    sharedFacebook($(".jsSharedFacebook"), $(".jsSharedFacebookView"));





    function sharedTwitter(element, element2) {

        var ventanaShared = 'menubar=yes,location=yes,resizable=yes,scrollbars=no,status=yes,width=450,height=450,left=450px,top=140px'

        $(element).on('click', function() {

            var urlProfile = 'https://twitter.com/share?url=' + escape(window.location.href) + "&text=@" + 'aprendidos' + ' Profesor ' + $(".description__Name .title").text();

            window.open(urlProfile, 'Aprendidos', ventanaShared);

        });


        $(element2).on('click', function() {

            var urlProfile = 'https://twitter.com/share?url=' + escape(window.location.href) + "&text=@" + 'aprendidos' + ' Perfil ' + $(".description__Name .title").text();

            window.open(urlProfile, 'Aprendidos', ventanaShared);

        });

    }

    sharedTwitter($(".jsSharedTwiitter"), $(".jsSharedTwiitterView"));


    $("#upload").change(function() {
        changeImage(this);
    });



    //Call to function´s
    function changeImage(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.jsHoverImgProfile').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }


    }


    function toSearch() {

        $(".jsFormAjaxHome").submit(function(e) {
            e.preventDefault();

            var barrio = $(".autocomplete").val();
            var materias = $(".materiasauto").val();

            if (barrio.length < 1 || materias.length < 1) {

                $(".formSearchError").fadeIn('slow');
                setTimeout(function() {
                    $(".formSearchError").fadeOut('slow');
                }, 1800);

            } else {
                window.location.href = 'search/find?barrio=' + barrio + '&materias=' + materias + '&page=0';
            }

        });

        $(".jsFormSearchAjaxHome").submit(function(e) {
            e.preventDefault();

            var barrio = $(".autocomplete").val();
            var materias = $(".materiasauto").val();

            if (barrio.length < 1 || materias.length < 1) {

                $(".formSearchError").fadeIn('slow');
                setTimeout(function() {
                    $(".formSearchError").fadeOut('slow');
                }, 1800);

            } else {
                window.location.href = '/search/find?barrio=' + barrio + '&materias=' + materias + '&page=0';
            }

        });

    }

    toSearch();


    function domicilioChecked() {


    }
    domicilioChecked();


    /*function Domain(){

            if(window.location.hostname == 'aprendidos.com' || window.location.hostname == 'localhost') {

            } else {
                window.location.href = 'http://google.com';
            }

    }
    Domain();*/

    var start = function() {

        $(".subUl--Start li:first-child").hover(function() {

            $(this).addClass('startSelect');

        }, function() {
            $(this).removeClass('startSelect')

        });

        $(".subUl--Start li:nth-child(2)").hover(function() {

            $(".subUl--Start li:nth-child(1)").addClass('startSelect');
            $(this).addClass('startSelect');

        }, function() {
            $(".subUl--Start li:nth-child(1)").removeClass('startSelect');
            $(this).removeClass('startSelect')

        });

        $(".subUl--Start li:nth-child(3)").hover(function() {

            $(".subUl--Start li:nth-child(1)").addClass('startSelect');
            $(".subUl--Start li:nth-child(2)").addClass('startSelect');
            $(this).addClass('startSelect');

        }, function() {
            $(".subUl--Start li:nth-child(1)").removeClass('startSelect');
            $(".subUl--Start li:nth-child(2)").removeClass('startSelect');
            $(this).removeClass('startSelect')

        });

        $(".subUl--Start li:nth-child(4)").hover(function() {

            $(".subUl--Start li:nth-child(1)").addClass('startSelect');
            $(".subUl--Start li:nth-child(2)").addClass('startSelect');
            $(".subUl--Start li:nth-child(3)").addClass('startSelect');
            $(this).addClass('startSelect');

        }, function() {
            $(".subUl--Start li:nth-child(1)").removeClass('startSelect');
            $(".subUl--Start li:nth-child(2)").removeClass('startSelect');
            $(".subUl--Start li:nth-child(3)").removeClass('startSelect');
            $(this).removeClass('startSelect')

        });

        $(".subUl--Start li:nth-child(5)").hover(function() {

            $(".subUl--Start li:nth-child(1)").addClass('startSelect');
            $(".subUl--Start li:nth-child(2)").addClass('startSelect');
            $(".subUl--Start li:nth-child(3)").addClass('startSelect');
            $(".subUl--Start li:nth-child(4)").addClass('startSelect');
            $(this).addClass('startSelect');

        }, function() {
            $(".subUl--Start li:nth-child(1)").removeClass('startSelect');
            $(".subUl--Start li:nth-child(2)").removeClass('startSelect');
            $(".subUl--Start li:nth-child(3)").removeClass('startSelect');
            $(".subUl--Start li:nth-child(4)").removeClass('startSelect');
            $(this).removeClass('startSelect')

        });



    }
    start();


    function toType() {

        $("input[name='typeClass']").change(function(e) {
            var n = $(this).val();

            if (n == 'curso') {
                $(".priceJS").fadeOut();
                $(".jstxtType").text('¿Cómo son los cursos que das?');
                $("input[name='precio']").val('0')
            } else {
                $(".priceJS").fadeIn();
                $(".jstxtType").text('¿Cómo son las clases que das?');
                $("input[name='precio']").val('');
            }
        });

    }
    toType();

    function toMaterias() {

        $(".jsMateriasOn").change(function(e) {

            var one = $(this).find('.jsOneData'),
                oneGet = $(one).attr('name'),
                oneGetVal = $(one).val();

            var two = $(this).find('.jsTwoData'),
                twoGet = $(two).attr('name');
            twoGetVal = $(two).val();


            var tree = $(this).find('.jsTreeData'),
                treeGet = $(tree).attr('name'),
                treeGetVal = $(tree).val();

            var four = $(this).find('.jsFourData'),
                fourGet = $(four).attr('name');
            fourGetVal = $(four).val();


            var _domHTML = "<div class='elements " + oneGetVal + "'>" +
                "<input type='hidden' name='" + oneGet + "' value='" + oneGetVal + "'  />" +
                "<input type='hidden' name='" + twoGet + "' value='" + twoGetVal + "' /> " +
                "<input type='hidden' name='" + treeGet + "' value='" + treeGetVal + "' />" +
                "<input type='hidden' name='" + fourGet + "' value='" + fourGetVal + "' /> " +
                "</div>";



            var _state = $(this).find('input[type="checkbox"]');


            if ($(_state).is(':checked')) {

                $(".appendMaterias").append(_domHTML);

            } else {

                var _remove = $(this).find('.jsOneData').val();
                var _elementRemove = $(".appendMaterias  ." + _remove);

                $(_elementRemove).remove();

            }

        });

    }

    toMaterias();

    function toAddCity() {
        var isNumber = 0;
        var otherNumber = Number($(".appendCityHidden div:last-child").attr('data-remove')) + 1;

        if (otherNumber) {
            otherNumber = otherNumber;
        } else {
            otherNumber = 0;
        }

        $.getJSON('/adcities-codei-gofjg/json', isJSON, false);


        function isJSON(arr) {

            var myArr = [];

            $(".jsClClick").click(function(e) {
                e.preventDefault();

                var idval = $(".cityregister").val();

                myArr.push(idval);


                for (var i = 0; i < arr.length; i++) {

                    if (idval == arr[i].name) {
                        insertData();
                    }
                }




                function insertData() {
                    $(".jsViewCity").css('display', 'block');

                    var name = $(".jsSumCity").val();

                    var list = '<li class="list chip" data-id="' + isNumber + '">' +

                        name +
                        ' <i class="fa fa-times-circle jsItemCityRemove"></i>'

                    +'</li>';

                    var listHidden = '<div class="isHidden" data-remove="' + isNumber + '" data-name="' + name + '"><input type="hidden" name="barrio[' + isNumber + '][name]" value="' + name + '" />' +
                        '<input type="hidden" name="barrio[' + isNumber + '][id]" value="' + isNumber + '" /></div>';

                    //Agregamos en la view
                    $(".jsAppendSumCity").append(list);

                    //Agregamso los inputs
                    $(".appendCityHidden").append(listHidden);


                    $(".jsSumCity").val('');
                    $(".jsSumCity").removeAttr('required');
                    $(".jsSumCity").attr('placeholder', 'Agregue mas ciudades');

                    $(".cityregister").removeAttr('name');
                    $(".jsBasic").remove();


                    isNumber++;

                }


                removeItem();

            });

            $(".jsClClickOther").click(function(e) {
                e.preventDefault();

                var idval = $(".cityregister").val();

                myArr.push(idval);

                var idnumber = $(".appendCityHidden div:last-child").attr('data-remove');


                for (var i = 0; i < arr.length; i++) {

                    if (idval == arr[i].name) {
                        insertData();
                    }
                }




                function insertData() {

                    $(".jsViewCity").css('display', 'block');

                    var name = $(".cityregister").val();

                    var list = '<li class="list chip" data-id="' + otherNumber + '">' +
                        name +
                        ' <i class="fa fa-times-circle jsItemCityRemove"></i>'

                    +'</li>';

                    var listHidden = '<div class="isHidden" data-remove="' + otherNumber + '" data-name="' + name + '"><input type="hidden" name="barrio[' + otherNumber + '][name]" value="' + name + '" />' +
                        '<input type="hidden" name="barrio[' + otherNumber + '][id]" value="' + otherNumber + '" /></div>';

                    //Agregamos en la view
                    $(".jsAppendSumCity").append(list);

                    //Agregamso los inputs
                    $(".appendCityHidden").append(listHidden);


                    $(".jsSumCity").val('');
                    $(".jsSumCity").removeAttr('required');
                    $(".jsSumCity").attr('placeholder', 'Agregue mas ciudades');



                    otherNumber++;

                }


                removeItem();

            });


            function removeItem() {

                $(".jsItemCityRemove").click(function() {
                    var id = $(this).parent().attr('data-id');
                    $(this).parent().remove();

                    var cantidad = $(this).parent();

                    $(".appendCityHidden [data-remove='" + id + "']").remove();


                    var cantidad = $(".appendCityHidden .isHidden");

                    if (cantidad.length == 0) {
                        $(".jsViewCity").css('display', 'none');
                        $(".cityregister").attr('name', 'barrio[0][name]');
                        $(".jsBefore").append('<input class="jsBasic" type="hidden" name="barrio[0][id]" value="0" />')
                    }
                });

            }

            removeItem();

        }


    }

    toAddCity();

    function textTareas(txt) {

        $(txt).each(function(i) {

            var tlength = $(this).text().length;


            if(tlength > 70) {
                $(this).text($(this).text().substr(0, 190) + '...');
            }



        })

        

    }

    textTareas($(".jsTextTareas"));


});
