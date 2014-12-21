
"use strict";

$( document ).ready(function() {

    var center = new google.maps.LatLng(36.5215598,-6.2781756);

    var mapOptions = {
        center: center,
        zoom: 5,
        scrollwheel: false
    };
    //initialize the map
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    var cadizMarker = new google.maps.Marker({
       position: center,
        map: map,
        title: 'Cádiz'
    });

});