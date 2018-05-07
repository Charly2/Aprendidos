$(document).ready(function() {
    function e(e) {
        if (e.files && e.files[0]) {
            var t = new FileReader();
            t.onload = function(e) {
                $(".jsHoverImgProfile").attr("src", e.target.result);
            }, t.readAsDataURL(e.files[0]);
        }
    }
    $("select").material_select();
    var t = [ {
        selector: ".twoContainer",
        offset: 50,
        callback: function(e) {
            console.log(e), Materialize.toast("<a href='#home' class='jsSlideDownClick'>Regresar arriba</a> ", 65e3);
        }
    }, {
        selector: ".letterA",
        offset: 50,
        callback: function(e) {
            console.log(e), Materialize.toast("Materias con letra 'A' ", 6500);
        }
    }, {
        selector: ".letterB",
        offset: 500,
        callback: function(e) {
            Materialize.toast("Materias con letra 'B'", 3500);
        }
    }, {
        selector: ".letterC",
        offset: 600,
        callback: function(e) {
            Materialize.toast("Materias con letra 'C'", 3500);
        }
    }, {
        selector: ".letterD",
        offset: 650,
        callback: function(e) {
            Materialize.toast("Materias con letra 'D'", 3500);
        }
    }, {
        selector: ".letterE",
        offset: 850,
        callback: function(e) {
            Materialize.toast("Materias con letra 'E'", 3500);
        }
    }, {
        selector: ".letterF",
        offset: 750,
        callback: function(e) {
            Materialize.toast("Materias con letra 'F'", 3500);
        }
    }, {
        selector: ".letterG",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'G'", 3500);
        }
    }, {
        selector: ".letterH",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'H'", 3500);
        }
    }, {
        selector: ".letterI",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'I'", 3500);
        }
    }, {
        selector: ".letterL",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'L'", 3500);
        }
    }, {
        selector: ".letterM",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'M'", 3500);
        }
    }, {
        selector: ".letterP",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'P'", 3500);
        }
    }, {
        selector: ".letterQ",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'Q'", 3500);
        }
    }, {
        selector: ".letterR",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'R'", 3500);
        }
    }, {
        selector: ".letterS",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'S'", 3500);
        }
    }, {
        selector: ".letteT",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'T'", 3500);
        }
    }, {
        selector: ".letteV",
        offset: 780,
        callback: function(e) {
            Materialize.toast("Materias con letra 'V'", 3500);
        }
    }, {
        selector: "#staggered-test",
        offset: 400,
        callback: function(e) {
            Materialize.showStaggeredList($(e));
        }
    }, {
        selector: "#image-test",
        offset: 500,
        callback: function(e) {
            Materialize.fadeInImage($(e));
        }
    } ];
    Materialize.scrollFire(t), $(".modal").modal({
        dismissible: !0,
        opacity: .5,
        in_duration: 300,
        out_duration: 200,
        starting_top: "4%",
        ending_top: "10%",
        ready: function(e, t) {
            console.log(e, t);
        },
        complete: function() {
            refresh();
        }
    }), $(".modal-close").on("click", function() {
        $(this).parent().parent().parent().hide("fast");
    }), $(".modal-close-two").on("click", function() {
        $('.modal-close-two"').modal("close");
    }), $(".fieldset__Letter .list a, .jsSlideDownClick").click(function() {
        return $.scrollTo(this.hash, 1e3, {
            easing: "swing"
        }), !1;
    }), $(".button-collapse").sideNav(), $(".jsOpenContinueTeacherRegister").modal("open"), 
    $(".slider").slider(), $(".profiles__Articl").hover(function() {
        $(this).find(".img1").hide(), $(this).find(".img2").show();
    }, function() {
        $(this).find(".img2").hide(), $(this).find(".img1").show();
    }), $(".formSearch").on("change", "select", function() {
        console.log("got you");
    }), $(".datepicker").pickadate({
        selectMonths: !0,
        selectYears: 60,
        max: [ 2005, 7, 14 ]
    }), $(".jsClickRegister").on("click", function() {
        window.location.href = "/register";
    }), function() {
        function e(e) {
            function s() {
                $(".jsCityShow li").click(function() {
                    var e = $(this).find("span").text();
                    $(".cityauto").val(e), $(".jsCityShow").remove(), i = [];
                });
            }
            i = e;
            for (var l = 0; l < e.length; l++) a[e[l].name] = e[l];
            $("input.autocomplete").autocomplete({
                data: a,
                limit: 80
            }).click(function(e) {
                $(this).keyup();
            }).keyup(function(e) {
                if ("" == $(this).val()) {
                    for (var a = 0; a < i.length; a++) t += "<li><span>" + i[a].name + "</span></li>";
                    var l = "<ul class='autocomplete-content dropdown-content jsCityShow'>" + t + "</ul>";
                    $(".jsAppendCity").html(l), i = [], s();
                } else $(".jsCityShow").remove();
            });
        }
        var t = "";
        $.getJSON("/adcities-codei-gofjg/json", e, !1);
        var i, a = {};
    }(), function() {
        function e(e) {
            function s() {
                $(".jsAppendShow li").click(function() {
                    var e = $(this).find("span").text();
                    $(".materiasauto").val(e), $(".jsAppendShow").remove(), i = [];
                });
            }
            i = e;
            for (var l = 0; l < e.length; l++) a[e[l].name] = e[l];
            $("input.materiasauto").autocomplete({
                data: a,
                limit: 80
            }).click(function(e) {
                $(this).keyup();
            }).keyup(function(e) {
                if ("" == $(this).val()) {
                    for (var a = 0; a < i.length; a++) t += "<li><span>" + i[a].name + "</span></li>";
                    var l = "<ul class='autocomplete-content dropdown-content jsAppendShow'>" + t + "</ul>";
                    $(".jsAppendMaterias").html(l), i = [], s();
                } else $(".jsAppendShow").remove();
            });
        }
        var t = "";
        $.getJSON("/admateries-code-gofjg/json", e, !1);
        var i, a = {};
    }(), function() {
        function e(e) {
            function s() {
                $(".jsCityShow li").click(function() {
                    var e = $(this).find("span").text();
                    $(".cityregister").val(e), $(".jsCityShow").remove(), i = [], $(".cityregister").trigger("click");
                });
            }
            i = e;
            for (var l = 0; l < e.length; l++) a[e[l].name] = e[l], $(".form__Tree input[type='submit']").val();
            $(".cityregister").keyup(function() {
                for (var t = 0; t < e.length; t++) {
                    if ($(this).val() == e[t].name) return $(".form__Tree input[type='submit']").prop("disabled", !1);
                    $(".form__Tree input[type='submit']").prop("disabled", !0);
                }
            }), $(".cityregister").autocomplete({
                data: a,
                limit: 80
            }).click(function(e) {
                $(this).keyup();
            }).keyup(function(e) {
                if ("" == $(this).val()) {
                    for (var a = 0; a < i.length; a++) t += "<li><span>" + i[a].name + "</span></li>";
                    var l = "<ul class='autocomplete-content dropdown-content jsCityShow'>" + t + "</ul>";
                    $(".jsAppendCity").html(l), i = [], s();
                } else $(".jsCityShow").remove();
            }).hover(function(t) {
                for (var i = $(".cityregister").val(), a = 0; a < e.length; a++) {
                    if (i == e[a].name) return $(".form__Tree input[type='submit']").prop("disabled", !1);
                    $(".form__Tree input[type='submit']").prop("disabled", !0);
                }
            }), $(".cityregister").keyup(function() {
                for (var t = 0; t < e.length; t++) {
                    if ($(this).val() == e[t].name) return $(".form__Tree input[type='submit']").prop("disabled", !1);
                    $(".form__Tree input[type='submit']").prop("disabled", !0);
                }
            }), $(".teacher__Register--Steps--Container").hover(function() {
                var t = $(".cityregister").val();
                if ($(".isHidden").length > 0) $(".form__Tree input[type='submit']").prop("disabled", !1); else for (var i = 0; i < e.length; i++) {
                    if (t == e[i].name) return $(".form__Tree input[type='submit']").prop("disabled", !1);
                    $(".form__Tree input[type='submit']").prop("disabled", !0);
                }
            });
        }
        var t = "";
        $.getJSON("/adcities-codei-gofjg/json", e, !1);
        var i, a = {};
    }(), $(".jsDeleteCity").on("click", function() {
        $.ajax({
            url: "/adcities-codei-gofjg/delete",
            type: "post",
            contentType: "application/json",
            dataType: "JSON",
            data: JSON.stringify({
                id: $(this).attr("data-id")
            }),
            success: function(e) {
                window.location.reload();
            }
        });
    }), $(".jsDeleteMateria").on("click", function() {
        $.ajax({
            url: "/admateries-code-gofjg/delete",
            type: "post",
            contentType: "application/json",
            dataType: "JSON",
            data: JSON.stringify({
                id: $(this).attr("data-id")
            }),
            success: function(e) {
                window.location.reload();
            }
        });
    }), function() {
        var e = '<div class="viewpreloader" style="text-align:center;text-align: center;width:65px;margin:0 auto;"><div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
        "#step1teacher" == window.location.hash ? $(".form__One").css("display", "block") : "#step2teacher" == window.location.hash ? ($(".form__One").css("display", "none"), 
        $(".form__One").before(e), setTimeout(function() {
            $(".viewpreloader").hide(), $(".teacher__Register__steps--Two").show("slow");
        }, 2e3), $(".teacher__Register--Steps--Menu .list:first-child i").css("color", "#d56046")) : "#step3teacher" == window.location.hash ? ($(".teacher__Register__Steps--One, .teacher__Register__steps--Two").css("display", "none"), 
        $(".teacher__Register__steps--Two").before(e), setTimeout(function() {
            $(".viewpreloader").hide(), $(".teacher__Register__Steps--Tree").show("slow");
        }, 2e3), $(".teacher__Register--Steps--Menu .list:first-child i, .list:nth-child(2) i").css("color", "#d56046")) : "#step4teacher" == window.location.hash ? ($(".teacher__Register__Steps--One, .teacher__Register__steps--Two, .teacher__Register__Steps--Tree").css("display", "none"), 
        $(".teacher__Register__Steps--Tree").before(e), setTimeout(function() {
            $(".viewpreloader").hide(), $(".teacher__Register__Steps--Four").show("slow");
        }, 2e3), $(".teacher__Register--Steps--Menu .list:first-child i, .list:nth-child(2) i, .list:nth-child(3) i").css("color", "#d56046")) : "#step5teacher" == window.location.hash && ($(".teacher__Register__Steps--One, .teacher__Register__steps--Two, .teacher__Register__Steps--Tree, .teacher__Register__Steps--Four").css("display", "none"), 
        $(".teacher__Register__Steps--Four").before(e), setTimeout(function() {
            $(".viewpreloader").hide(), $(".teacher__Register__Steps--Five").show("slow");
        }, 2e3), $(".teacher__Register--Steps--Menu .list:first-child i, .list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i").css("color", "#d56046"));
    }(), function() {
        function e() {
            $(".activeOtherJs").css("cursor", "pointer"), $(".activeOtherJs").click(function() {
                $(this).hide("fast"), $(".second__Iz").show("fast");
            });
        }
        $(".activeJs").css("cursor", "pointer"), $(".activeJs").click(function() {
            $(this).hide("fast"), $(".secondd__Iz").show("fast"), $(".secondd__Iz").addClass("activeOtherJs"), 
            e();
            var t = $(this).find(".capitalizeCase").text(), i = $(this).attr("data-email");
            $(".modelNew").modal("open"), $.ajax({
                url: "/save/teacher/visitedcontact",
                type: "post",
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify({
                    name: t,
                    emailsend: i
                }),
                success: function(e) {
                    alert("enviado");
                },
                error: function(e) {
                    console.log(e);
                }
            });
        }), $(".closeJsTeacher").click(function() {
            $("#modal2").modal("close"), $(".modal-overlay").remove();
        });
    }(), function() {
        $(".review__Starts .list:nth-child(1) i").hover(function() {
            $(this).css("color", "#ff9800"), $(".jsTitleHeader").text("¡Malísimo!");
        }, function() {
            $(this).css("color", "#c6c6c6"), $(".jsTitleHeader").text("¿Calificación?");
        }), $(".review__Starts .list:nth-child(2) i").hover(function() {
            $(".review__Starts .list:nth-child(1) i").css("color", "#ff9800"), $(this).css("color", "#ff9800"), 
            $(".jsTitleHeader").text("Malo");
        }, function() {
            $(".review__Starts .list:nth-child(1) i").css("color", "#c6c6c6"), $(this).css("color", "#c6c6c6"), 
            $(".jsTitleHeader").text("¿Calificación?");
        }), $(".review__Starts .list:nth-child(3) i").hover(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i").css("color", "#ff9800"), 
            $(this).css("color", "#ff9800"), $(".jsTitleHeader").text("Zafa");
        }, function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i").css("color", "#c6c6c6"), 
            $(this).css("color", "#c6c6c6"), $(".jsTitleHeader").text("¿Calificación?");
        }), $(".review__Starts .list:nth-child(4) i").hover(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i").css("color", "#ff9800"), 
            $(this).css("color", "#ff9800"), $(".jsTitleHeader").text("Bueno");
        }, function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i").css("color", "#c6c6c6"), 
            $(this).css("color", "#c6c6c6"), $(".jsTitleHeader").text("¿Calificación?");
        }), $(".review__Starts .list:nth-child(5) i").hover(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i").css("color", "#ff9800"), 
            $(this).css("color", "#ff9800"), $(".jsTitleHeader").text("¡Genial!");
        }, function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i").css("color", "#c6c6c6"), 
            $(this).css("color", "#c6c6c6"), $(".jsTitleHeader").text("¿Calificación?");
        });
        var e;
        $(".review__Starts .list:nth-child(1) i").click(function() {
            $(this).addClass("visitedReview"), $(".list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i, .list:nth-child(5) i").removeClass("visitedReview"), 
            setTimeout(function() {
                $(".jsTitleHeader").text("¡Malísimo!");
            }, 1e3), calificacion = 1, e = 33, $(".formReview input[name='calificacion']").val(calificacion), 
            $(".formReview input[name='resultcalifi']").val(e), $(".formReview input[name='calificacionCant']").val(33);
        }), $(".review__Starts .list:nth-child(2) i").click(function() {
            $(".review__Starts .list:nth-child(1) i").addClass("visitedReview"), $(this).addClass("visitedReview"), 
            $(".list:nth-child(3) i, .list:nth-child(4) i, .list:nth-child(5) i").removeClass("visitedReview"), 
            setTimeout(function() {
                $(".jsTitleHeader").text("Malo");
            }, 1e3), calificacion = 2, e = 58, $(".formReview input[name='calificacion']").val(calificacion), 
            $(".formReview input[name='resultcalifi']").val(e), $(".formReview input[name='calificacionCant']").val(29);
        }), $(".review__Starts .list:nth-child(3) i").click(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i").addClass("visitedReview"), 
            $(this).addClass("visitedReview"), $(".list:nth-child(4) i, .list:nth-child(5) i").removeClass("visitedReview"), 
            setTimeout(function() {
                $(".jsTitleHeader").text("Zafa");
            }, 1e3), calificacion = 3, e = 120, $(".formReview input[name='calificacion']").val(calificacion), 
            $(".formReview input[name='resultcalifi']").val(e), $(".formReview input[name='calificacionCant']").val(40);
        }), $(".review__Starts .list:nth-child(4) i").click(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i").addClass("visitedReview"), 
            $(this).addClass("visitedReview"), $(".list:nth-child(5) i").removeClass("visitedReview"), 
            setTimeout(function() {
                $(".jsTitleHeader").text("Bueno");
            }, 1e3), calificacion = 4, e = 496, $(".formReview input[name='calificacion']").val(calificacion), 
            $(".formReview input[name='resultcalifi']").val(e), $(".formReview input[name='calificacionCant']").val(124);
        }), $(".review__Starts .list:nth-child(5) i").click(function() {
            $(".review__Starts .list:nth-child(1) i, .list:nth-child(2) i, .list:nth-child(3) i, .list:nth-child(4) i").addClass("visitedReview"), 
            $(this).addClass("visitedReview"), setTimeout(function() {
                $(".jsTitleHeader").text("¡Genial!");
            }, 1e3), calificacion = 5, e = 1260, $(".formReview input[name='calificacion']").val(calificacion), 
            $(".formReview input[name='resultcalifi']").val(e), $(".formReview input[name='calificacionCant']").val(252);
        });
    }(), function() {
        $(".jsCloseReview").click(function() {
            var e = $(this).parent().attr("data-id"), t = $(this).parent().attr("data-remove"), i = $(this).parent().attr("data-idreview");
            $.ajax({
                url: "/save/teacher/removereview",
                type: "post",
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify({
                    id: e,
                    idyo: t,
                    remove: i
                }),
                done: function(e) {
                    alert("done");
                },
                success: function(e) {
                    window.location.reload();
                },
                error: function(e) {
                    console.log(e);
                }
            });
        });
    }(), function() {
        $(".jsLike").on("click", function() {
            var e = $(this).attr("data-id"), t = $(this).attr("data-user");
            $(".jsLike").addClass("jsRemoveLike"), $(".jsRemoveLike").addClass("viewBlack"), 
            $(".jsLike").removeClass("jsLike"), $(this).parent().html(), $.ajax({
                url: "/save/teacher/like",
                type: "post",
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify({
                    id: e,
                    iduser: t
                }),
                success: function(e) {
                    window.location.reload();
                },
                error: function(e) {
                    console.log(e);
                }
            });
        });
    }(), function() {
        $(".jsRemoveLike").on("click", function() {
            var e = $(this).attr("data-id"), t = $(this).attr("data-user"), i = $(this).attr("data-idremove");
            $(".jsRemoveLike").addClass("jsLike"), $(".jsRemoveLike").removeClass("viewBlack"), 
            $(".jsRemoveLike").removeClass("jsRemoveLike"), $(this).parent().html(), $.ajax({
                url: "/save/teacher/removelike",
                type: "post",
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify({
                    id: e,
                    iduser: t,
                    idlikeremove: i
                }),
                success: function(e) {
                    window.location.reload();
                },
                error: function(e) {
                    console.log(e);
                }
            });
        });
    }(), function() {
        $(".jsPriceFilter").on("click", function() {
            var e = $(this).find(".number").text().replace("$ ", ""), t = Number(e), i = t + 10;
            switch (i) {
              case 30:
                a = "find?price=" + (i = t + 20) + "&page=0", window.location.href = a;
                break;

              case 50:
                a = "find?price=" + (i = t + 30) + "&page=0", window.location.href = a;
                break;

              case 60:
                a = "find?price=" + (i = t + 10) + "&page=0", window.location.href = a;
                break;

              case 90:
                a = "find?price=" + (i = t + 15) + "&page=0", window.location.href = a;
                break;

              case 115:
                a = "find?price=" + (i = t + 25) + "&page=0", window.location.href = a;
                break;

              default:
                var a = "find?price=" + i + "&page=0";
                window.location.href = a;
            }
        });
    }(), function() {
        $(".profileUser__Figure").hover(function() {
            $(".profileUser__Edit").css("display", "block");
        }, function() {
            $(".profileUser__Edit").css("display", "none");
        });
    }(), function(e, t) {
        var i = "menubar=yes,location=yes,resizable=yes,scrollbars=no,status=yes,width=450,height=450,left=450px,top=140px";
        $(e).on("click", function() {
            var e = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
            window.open(e, "Aprendidos", i);
        }), $(t).on("click", function() {
            var e = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
            window.open(e, "Aprendidos", i);
        });
    }($(".jsSharedFacebook"), $(".jsSharedFacebookView")), function(e, t) {
        var i = "menubar=yes,location=yes,resizable=yes,scrollbars=no,status=yes,width=450,height=450,left=450px,top=140px";
        $(e).on("click", function() {
            var e = "https://twitter.com/share?url=" + escape(window.location.href) + "&text=@aprendidos Profesor " + $(".description__Name .title").text();
            window.open(e, "Aprendidos", i);
        }), $(t).on("click", function() {
            var e = "https://twitter.com/share?url=" + escape(window.location.href) + "&text=@aprendidos Perfil " + $(".description__Name .title").text();
            window.open(e, "Aprendidos", i);
        });
    }($(".jsSharedTwiitter"), $(".jsSharedTwiitterView")), $("#upload").change(function() {
        e(this);
    }), function() {
        $(".jsFormAjaxHome").submit(function(e) {
            e.preventDefault();
            var t = $(".autocomplete").val(), i = $(".materiasauto").val();
            t.length < 1 || i.length < 1 ? ($(".formSearchError").fadeIn("slow"), setTimeout(function() {
                $(".formSearchError").fadeOut("slow");
            }, 1800)) : window.location.href = "search/find?barrio=" + t + "&materias=" + i + "&page=0";
        }), $(".jsFormSearchAjaxHome").submit(function(e) {
            e.preventDefault();
            var t = $(".autocomplete").val(), i = $(".materiasauto").val();
            t.length < 1 || i.length < 1 ? ($(".formSearchError").fadeIn("slow"), setTimeout(function() {
                $(".formSearchError").fadeOut("slow");
            }, 1800)) : window.location.href = "/search/find?barrio=" + t + "&materias=" + i + "&page=0";
        });
    }();
    !function() {
        $(".subUl--Start li:first-child").hover(function() {
            $(this).addClass("startSelect");
        }, function() {
            $(this).removeClass("startSelect");
        }), $(".subUl--Start li:nth-child(2)").hover(function() {
            $(".subUl--Start li:nth-child(1)").addClass("startSelect"), $(this).addClass("startSelect");
        }, function() {
            $(".subUl--Start li:nth-child(1)").removeClass("startSelect"), $(this).removeClass("startSelect");
        }), $(".subUl--Start li:nth-child(3)").hover(function() {
            $(".subUl--Start li:nth-child(1)").addClass("startSelect"), $(".subUl--Start li:nth-child(2)").addClass("startSelect"), 
            $(this).addClass("startSelect");
        }, function() {
            $(".subUl--Start li:nth-child(1)").removeClass("startSelect"), $(".subUl--Start li:nth-child(2)").removeClass("startSelect"), 
            $(this).removeClass("startSelect");
        }), $(".subUl--Start li:nth-child(4)").hover(function() {
            $(".subUl--Start li:nth-child(1)").addClass("startSelect"), $(".subUl--Start li:nth-child(2)").addClass("startSelect"), 
            $(".subUl--Start li:nth-child(3)").addClass("startSelect"), $(this).addClass("startSelect");
        }, function() {
            $(".subUl--Start li:nth-child(1)").removeClass("startSelect"), $(".subUl--Start li:nth-child(2)").removeClass("startSelect"), 
            $(".subUl--Start li:nth-child(3)").removeClass("startSelect"), $(this).removeClass("startSelect");
        }), $(".subUl--Start li:nth-child(5)").hover(function() {
            $(".subUl--Start li:nth-child(1)").addClass("startSelect"), $(".subUl--Start li:nth-child(2)").addClass("startSelect"), 
            $(".subUl--Start li:nth-child(3)").addClass("startSelect"), $(".subUl--Start li:nth-child(4)").addClass("startSelect"), 
            $(this).addClass("startSelect");
        }, function() {
            $(".subUl--Start li:nth-child(1)").removeClass("startSelect"), $(".subUl--Start li:nth-child(2)").removeClass("startSelect"), 
            $(".subUl--Start li:nth-child(3)").removeClass("startSelect"), $(".subUl--Start li:nth-child(4)").removeClass("startSelect"), 
            $(this).removeClass("startSelect");
        });
    }(), function() {
        $("input[name='typeClass']").change(function(e) {
            "curso" == $(this).val() ? ($(".priceJS").fadeOut(), $(".jstxtType").text("¿Cómo son los cursos que das?"), 
            $("input[name='precio']").val("0")) : ($(".priceJS").fadeIn(), $(".jstxtType").text("¿Cómo son las clases que das?"), 
            $("input[name='precio']").val(""));
        });
    }(), function() {
        $(".jsMateriasOn").change(function(e) {
            var t = $(this).find(".jsOneData"), i = $(t).attr("name"), a = $(t).val(), s = $(this).find(".jsTwoData"), l = $(s).attr("name");
            twoGetVal = $(s).val();
            var n = $(this).find(".jsTreeData"), c = $(n).attr("name"), r = $(n).val(), o = $(this).find(".jsFourData"), d = $(o).attr("name");
            fourGetVal = $(o).val();
            var h = "<div class='elements " + a + "'><input type='hidden' name='" + i + "' value='" + a + "'  /><input type='hidden' name='" + l + "' value='" + twoGetVal + "' /> <input type='hidden' name='" + c + "' value='" + r + "' /><input type='hidden' name='" + d + "' value='" + fourGetVal + "' /> </div>", f = $(this).find('input[type="checkbox"]');
            if ($(f).is(":checked")) $(".appendMaterias").append(h); else {
                var u = $(this).find(".jsOneData").val(), p = $(".appendMaterias  ." + u);
                $(p).remove();
            }
        });
    }(), function() {
        function e(e) {
            function a() {
                $(".jsItemCityRemove").click(function() {
                    var e = $(this).parent().attr("data-id");
                    $(this).parent().remove(), $(this).parent(), $(".appendCityHidden [data-remove='" + e + "']").remove(), 
                    0 == $(".appendCityHidden .isHidden").length && ($(".jsViewCity").css("display", "none"), 
                    $(".cityregister").attr("name", "barrio[0][name]"), $(".jsBefore").append('<input class="jsBasic" type="hidden" name="barrio[0][id]" value="0" />'));
                });
            }
            var s = [];
            $(".jsClClick").click(function(i) {
                i.preventDefault();
                var l = $(".cityregister").val();
                s.push(l);
                for (var n = 0; n < e.length; n++) l == e[n].name && function() {
                    $(".jsViewCity").css("display", "block");
                    var e = $(".jsSumCity").val(), i = '<li class="list chip" data-id="' + t + '">' + e + ' <i class="fa fa-times-circle jsItemCityRemove"></i></li>', a = '<div class="isHidden" data-remove="' + t + '" data-name="' + e + '"><input type="hidden" name="barrio[' + t + '][name]" value="' + e + '" /><input type="hidden" name="barrio[' + t + '][id]" value="' + t + '" /></div>';
                    $(".jsAppendSumCity").append(i), $(".appendCityHidden").append(a), $(".jsSumCity").val(""), 
                    $(".jsSumCity").removeAttr("required"), $(".jsSumCity").attr("placeholder", "Agregue mas ciudades"), 
                    $(".cityregister").removeAttr("name"), $(".jsBasic").remove(), t++;
                }();
                a();
            }), $(".jsClClickOther").click(function(t) {
                t.preventDefault();
                var l = $(".cityregister").val();
                s.push(l), $(".appendCityHidden div:last-child").attr("data-remove");
                for (var n = 0; n < e.length; n++) l == e[n].name && function() {
                    $(".jsViewCity").css("display", "block");
                    var e = $(".cityregister").val(), t = '<li class="list chip" data-id="' + i + '">' + e + ' <i class="fa fa-times-circle jsItemCityRemove"></i></li>', a = '<div class="isHidden" data-remove="' + i + '" data-name="' + e + '"><input type="hidden" name="barrio[' + i + '][name]" value="' + e + '" /><input type="hidden" name="barrio[' + i + '][id]" value="' + i + '" /></div>';
                    $(".jsAppendSumCity").append(t), $(".appendCityHidden").append(a), $(".jsSumCity").val(""), 
                    $(".jsSumCity").removeAttr("required"), $(".jsSumCity").attr("placeholder", "Agregue mas ciudades"), 
                    i++;
                }();
                a();
            }), a();
        }
        var t = 0, i = Number($(".appendCityHidden div:last-child").attr("data-remove")) + 1;
        i = i || 0, $.getJSON("/adcities-codei-gofjg/json", e, !1);
    }(), function(e) {
        $(e).each(function(e) {
            $(this).text().length > 70 && $(this).text($(this).text().substr(0, 190) + "...");
        });
    }($(".jsTextTareas"));
});