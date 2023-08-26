$("document").ready(function(){

    $("#btnFadeIn").click(function(){
        $("#txtFade").fadeIn(2000);
    });

    $("#btnFadeOut").click(function(){
        $("#txtFade").fadeOut(2000);
    });

    $("#btnFadeToggle").click(function(){
        $("#txtFade").fadeToggle(2000);
    });



    $("#btnHide").click(function(){
        $("#txtHide").hide(2000);
    });
    
    $("#btnShow").click(function(){
        $("#txtHide").show(2000);
    });



    $("#btnSlideDown").click(function(){
        $("#txtSlide").slideDown(2000);
    });

    $("#btnSlideUp").click(function(){
        $("#txtSlide").slideUp(2000);
    });

    $("#btnSlideToggle").click(function(){
        $("#txtSlide").slideToggle(2000);
    });



    $("#btnAppend").click(function(){
        $("#divAppend").append("<p>This text gets appended when the button is clicked.</p>")
    });

    $("#btnHtml").click(function(){
        $("#txtHtml").html("<h3>This inner HTML has been changed.<h3>")
    });

    $("#btnText").click(function(){
        $("#txtText").text("This text has been changed.")
    });

    $("#btnVal").click(function(){
        $("#inputVal").val("Changed value")
    })



    $("#btnAddClass").click(function(){
        $("#container").addClass("hidden")
    })

    $("#btnRemoveClass").click(function(){
        $("#container").removeClass("hidden")
    })

    });