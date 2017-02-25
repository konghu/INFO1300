/**
 * Created by Kong on 11/26/2016.
 */

$(document).ready(function() { //credit to http://www.w3schools.com/w3css/w3css_slideshow.asp
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2500);
    }
});

window.onload = function () {
    "use strict";
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dateNow = new Date(),
        month = months[dateNow.getMonth()],
        day = dateNow.getDate(),
        year = dateNow.getFullYear(),
        new_span = document.createElement('span'),
        text = document.createTextNode(month + ' ' + day + ', ' + year),
        footer0 = document.getElementsByTagName('footer')[0];
    // append the date to the footer
    new_span.appendChild(text);
    footer0.appendChild(new_span);
    
};
