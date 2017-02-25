/**
 * Created by Kong on 10/14/2016.
 */
var index = 0

var photos = ["images/spring.jpg", "images/summer.jpg", "images/fall.png", "images/winter.jpg"];

function previous(){
    if (index>0){
        index=index-1;
    } else { //wrap around to last image
        index=photos.length-1;
    }
    document.getElementById('main_image').src=photos[index];
}

function next(){
    if (index<photos.length-1){
        index=index+1;
    } else { //wrap around to first image
        index=0;
    }
    document.getElementById('main_image').src=photos[index];
}

window.onload = function date() {
    "use strict";
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        full_date = new Date(),
        this_month_text = monthNames[full_date.getMonth()], //get text of the month

        new_span = document.createElement('span'),
        new_text = document.createTextNode(full_date.getDate() + ', ' + this_month_text + ', ' + full_date.getFullYear()),
        position = document.getElementsByTagName('footer')[0];
    new_span.appendChild(new_text); // append text into span
    position.appendChild(new_span); // append span into footer
};

