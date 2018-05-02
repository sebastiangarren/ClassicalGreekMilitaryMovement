var mymap = L.map('mapid').setView([37.805, 23.00], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2ViYXN0aWFuZ2FycmVuIiwiYSI6ImNqZnJoa2s2OTJramkzMG52ODMxNXFvaHYifQ.qFHF71NGXq17Mrud8YnOSA'
}).addTo(mymap);


var marker = L.marker([37.5, 23.01]).addTo(mymap);
marker.bindPopup("<b>I'm blue.</b><br>But I'm in Greece, at least.").openPopup();