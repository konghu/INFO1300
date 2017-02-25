/**
 * Created by Kong on 10/21/2016.
 */
$(document).ready(function(){//hide the footer
    $("#hide").click(function(){
        $("footer").hide()
    })
});

$(document).ready(function() {//make the car move across to the right
    $("#car_img").click(function() {
        $("#car_img").animate({marginLeft: '800px'}, 1000)
    });
});

$(document).ready(function(){//make the image fade in or fade out in span of 3 seconds
    $("#fadeToggle").click(function(){
        $("#ghost_img").fadeToggle(3000)
    });
});


$(document).ready(function(){//change background color of header to green
    $("#SpringTheme").click(function(){
        $("h1").css({"background-color": "green"});
    });
});

$(document).ready(function(){//change background color of body to green
    $("#SpringTheme").click(function(){
        $("body").css({"background-color": "green"});
    });
});


$(document).ready(function(){//change background color of header to orange
    $("#FallTheme").click(function(){
        $("h1").css({"background-color": "orange"});
    });
});

$(document).ready(function(){//change background color of body to orange
    $("#FallTheme").click(function(){
        $("body").css({"background-color": "orange"});
    });
});
