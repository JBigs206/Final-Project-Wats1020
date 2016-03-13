$( document ).ready(function() {
		
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var mapLayers = {
    "Satellite": satLayer,
    "Map View": drawLayer,
    "Open Street Maps": osm
};

var map = L.map('map-container').setView([47.608013, -122.335167], 15);

L.control.layers(mapLayers).addTo(map);
drawLayer.addTo(map);

var marker = L.marker([47.608013, -122.335167]).addTo(map);
	marker.bindPopup("<b>City Center</b>");
	
//variables for the marker locations
var Rspoon;
var shark;
var spagett;	
	
var tiny;
var peep;
var divine;	
	
var jc;	
var bird;
var eye;	

var leif;
var jedi;
var pier;	
	
	
$('#ResturantsBtn').click(function(){
	
	Rspoon = L.marker([47.6081327, -122.33701810000002]).addTo(map);
	Rspoon.bindPopup("<b>Rusty Spoon</b><br>Gourmet food from Iceland.");
	
	shark = L.marker([47.61205349999999, -122.3374983]).addTo(map);
	shark.bindPopup("<b>Shark Fin Biestro</b><br>Chinese Resturant.");
	
	spagett = L.marker([47.6045172, -122.3306824]).addTo(map);
	spagett.bindPopup("<b>Spagett</b><br>Authentic Italian food.");
	
	//removes markers for the other buttons
	map.removeLayer(tiny);
	map.removeLayer(peep);
	map.removeLayer(divine);
	
	map.removeLayer(jc);
	map.removeLayer(bird);
	map.removeLayer(eye);
	
	map.removeLayer(leif);
	map.removeLayer(jedi);
	map.removeLayer(pier); 
	
	
	});	


$('#BarsBtn').click(function(){

	tiny = L.marker([47.6073345, -122.33797850000002]).addTo(map);
	tiny.bindPopup("<b>The Tiny Elephant</b><br>Hipster Bar.");
	
	peep = L.marker([47.6074048, -122.3428874]).addTo(map);
	peep.bindPopup("<b>The Peep Hole</b><br>Local dive bar.");
	
	divine = L.marker([47.607118, -122.333257]).addTo(map);
	divine.bindPopup("<b>Divine</b><br>Popular night club.");
	
	//removes markers for the other buttons
	map.removeLayer(Rspoon);
	map.removeLayer(shark);
	map.removeLayer(spagett);
	
	map.removeLayer(jc);
	map.removeLayer(bird);
	map.removeLayer(eye);
	
	map.removeLayer(leif);
	map.removeLayer(jedi);
	map.removeLayer(pier);
	});
	
$('#StoresBtn').click(function(){
	
	jc = L.marker([47.6089511, -122.32684460000002]).addTo(map);
	jc.bindPopup("<b>JC Quarters</b><br>Clothing store by the people, for the people.");
	
	bird = L.marker([47.6038212, -122.32417570000001]).addTo(map);
	bird.bindPopup("<b>Whirly Bird</b><br>Best helicopter store in the country.");
	
	eye = L.marker([47.60536219999999, -122.32372220000002]).addTo(map);
	eye.bindPopup("<b>Eye of Mordor</b><br>High end monocle shop.");
	
	//removes markers for the other buttons
	map.removeLayer(Rspoon);
	map.removeLayer(shark);
	map.removeLayer(spagett);
	
	map.removeLayer(tiny);
	map.removeLayer(peep);
	map.removeLayer(divine);
	
	map.removeLayer(leif);
	map.removeLayer(jedi);
	map.removeLayer(pier);
	
	});
	
$('#LandmkBtn').click(function(){
	
	leif = L.marker([47.607624, -122.325608]).addTo(map);
	leif.bindPopup("<b>Leif Erikson Memorial</b><br>Monument to Leif Erikson.");
	
	jedi = L.marker([47.609012, -122.329924]).addTo(map);
	jedi.bindPopup("<b>Jedi Temple</b><br>Center of the Jedi Order.");
	
	pier = L.marker([47.604128, -122.339603]).addTo(map);
	pier.bindPopup("<b>Fisherman's Pier</b><br>Historical fishing port.");
	
	//removes markers for the other buttons
	map.removeLayer(Rspoon);
	map.removeLayer(shark);
	map.removeLayer(spagett);
	
	map.removeLayer(tiny);
	map.removeLayer(peep);
	map.removeLayer(divine);
	
	map.removeLayer(jc);
	map.removeLayer(bird);
	map.removeLayer(eye);
	
	});
	
//form validation for contact page
jQuery.validator.addMethod("lettersonly", function(value, element) 
	{
	return this.optional(element) || /^[a-z ]+$/i.test(value);
	}, "Letters and spaces only please");
	
	$('#order-form').validate({
		submitHandler: function(form){
			form.submit();
		},
		rules: {
			//Personal Info
			"your-name":{
				required: true,
				maxlength: 128,
				lettersonly: true,
			},
			"comments":{
				maxlength: 500,
				required: true,
			}
		}
	});
	
});	