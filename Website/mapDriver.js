// mapDriver.js
// Author: Artur Filipowicz
// Date: 8/7/2012
// Version: 1.0
// 
// Description: Javascript functions for moving and zooming into a google map.
// Execution: See background map on http://www.techtelligent.net/MastermindMedia/
// Requires <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
//
// License: The MIT License (MIT) Copyright (c) 2015
 
var lat; 
var lng;

var lLat; 
var lLng;
var goingToLoc = false;

var map;
var t; 

// Load a map and center it at a random point on the Equator
// The map is loaded into an element with id mapBG
function loadMap(){
	lat = 0;
	lng = Math.floor(Math.random()*19)*10

	var neg = Math.floor(Math.random()*2)	
	if ( neg == 1)
	{
		lng = 0 - lng;
	}
	
	var myOptions = {
			zoom: 3,
			center: new google.maps.LatLng(lat,lng),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};
				
	map = new google.maps.Map(document.getElementById("mapBG"), myOptions);
	
	setTimeout("moveMap()",2000);
	
}

// Move the map along latitude lat 0.4 degrees every 100 ms. 
function moveMap(){
	lng = lng - 0.4; 
	map.panTo(new google.maps.LatLng(lat,lng));
    setTimeout("moveMap()",100);
}

// Move the map to a location and zoom in. 
function gotoLocation(){
	map.panTo(new google.maps.LatLng(lLat,lLng));
	if (map.getZoom() !== 10)
	{
		setTimeout("zoomIn()",500);
	}
	
	if (map.getZoom() == 10)
	{
		setTimeout("returnToEquator()",80000);
	}
}

// Zoom into the map at the current location. 
function zoomIn(){
	map.setZoom(map.getZoom() + 1);
	setTimeout("gotoLocation()",1000);
}

// Zoom out of the map and return to the Equator.
function returnToEquator(){	
	if (map.getZoom() !== 3)
	{
		setTimeout("zoomOut()",500);
	}
	
	if(map.getZoom() == 3)
	{
		map.panTo(new google.maps.LatLng(0,lng));
		goingToLoc = false; 
		setTimeout("moveMap()",200);
	}
	
}

// Zoom out of the map at the current location. 
function zoomOut(){
	map.setZoom(map.getZoom() - 1);
	setTimeout("returnToEquator()",1000);
}
