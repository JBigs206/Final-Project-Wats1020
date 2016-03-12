$( document ).ready(function() {
	
/*$(document).ready(function(){
    $(".nav-tabs a").click(function(){
		$(this).tab('show');
    });
});	*/
	$(document).ready(function(){
		if($('#ResturantsBtn').click())
   	 	{
        	$('#ResturantsBtn').tab('show');
			$('#BarsBtn').tab('hide');
			$('#StoresBtn').tab('hide');
			$('#LandmkBtn').tab('hide');
   		} else if ($('#ResturantsBtn').click())
			{
			$('#BarsBtn').tab('show');
			$('#ResturantsBtn').tab('hide');
			$('#StoresBtn').tab('hide');
			$('#LandmkBtn').tab('hide');
			}
});	
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
	

	
	
$('#ResturantsBtn').click(function(){
	var Rspoon = L.marker([47.6081327, -122.33701810000002]).addTo(map);
	Rspoon.bindPopup("<b>Rusty Spoon</b><br>Gourmet food from Iceland.");
	Rspoon.valueOf()._icon.style.backgroundColor = 'red';
	
	var shark = L.marker([47.61205349999999, -122.3374983]).addTo(map);
	shark.bindPopup("<b>Shark Fin Biestro</b><br>Chinese Resturant.");
	shark.valueOf()._icon.style.backgroundColor = 'red';
	
	var spagett = L.marker([47.6045172, -122.3306824]).addTo(map);
	spagett.bindPopup("<b>Spagett</b><br>Authentic Italian food.");
	spagett.valueOf()._icon.style.backgroundColor = 'red';
	
	});	


$('#BarsBtn').click(function(){
	var tiny = L.marker([47.6073345, -122.33797850000002]).addTo(map);
	tiny.bindPopup("<b>The Tiny Elephant</b><br>Hipster Bar.");
	tiny.valueOf()._icon.style.backgroundColor = 'yellow';
	
	var peep = L.marker([47.6074048, -122.3428874]).addTo(map);
	peep.bindPopup("<b>The Peep Hole</b><br>Local dive bar.");
	peep.valueOf()._icon.style.backgroundColor = 'yellow';
	
	var divine = L.marker([47.607118, -122.333257]).addTo(map);
	divine.bindPopup("<b>Divine</b><br>Popular night club.");
	divine.valueOf()._icon.style.backgroundColor = 'yellow';
	});
	
$('#StoresBtn').click(function(){
	var jc = L.marker([47.6089511, -122.32684460000002]).addTo(map);
	jc.bindPopup("<b>JC Quarters</b><br>Clothing store by the people, for the people.");
	jc.valueOf()._icon.style.backgroundColor = 'green';
	
	var bird = L.marker([47.6038212, -122.32417570000001]).addTo(map);
	bird.bindPopup("<b>Whirly Bird</b><br>Best helicopter store in the country.");
	bird.valueOf()._icon.style.backgroundColor = 'green';
	
	var eye = L.marker([47.60536219999999, -122.32372220000002]).addTo(map);
	eye.bindPopup("<b>Eye of Mordor</b><br>High end monocle shop.");
	eye.valueOf()._icon.style.backgroundColor = 'green';
	});
	
$('#LandmkBtn').click(function(){
	var leif = L.marker([47.607624, -122.325608]).addTo(map);
	leif.bindPopup("<b>Leif Erikson Memorial</b><br>Monument to Leif Erikson.");
	leif.valueOf()._icon.style.backgroundColor = 'orange';
	
	var jedi = L.marker([47.609012, -122.329924]).addTo(map);
	jedi.bindPopup("<b>Jedi Temple</b><br>Center of the Jedi Order.");
	jedi.valueOf()._icon.style.backgroundColor = 'orange';
	
	var pier = L.marker([47.604128, -122.339603]).addTo(map);
	pier.bindPopup("<b>Fisherman's Pier</b><br>Historical fishing port.");
	pier.valueOf()._icon.style.backgroundColor = 'orange';
	});
	

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