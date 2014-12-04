
"use strict";

$( document ).ready(function() {
    var markers = [];

    var mapOptions = {
        center: { lat: 36.5215598, lng: -6.2781756},
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    //initialize the map
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

});