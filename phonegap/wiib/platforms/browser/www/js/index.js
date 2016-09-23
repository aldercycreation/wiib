window.addEventListener('load', function() {
	"use strict";
	//Initialize FastClick plugin
    FastClick.attach(document.body);
}, false);

//Declare variables
var myScroll, wrapper, $sectionTitle, $btnLocation, activeLi = 1;

//Set variables
body = document.getElementById("body"),
wrapper = document.getElementById("wrapper");
$sectionTitle = $('h1.sectionTitle');
$btnLocation = $('a#location');

var xhReq = new XMLHttpRequest();
var heightBody = window.innerHeight-50;

var app = {

	initialize: function() {

		//Creation of the css class
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.cssClass { position:absolute; z-index:2; left:0; top:50px; width:100%; height: '+heightBody+'px; overflow:auto;}';
		document.getElementsByTagName('head')[0].appendChild(style);

		//Add the css class
		wrapper.className = 'cssClass';

		//Load default option
		xhReq.open("GET", "options/option1.html", false);
		xhReq.send(null);
		document.getElementById("sectionContent").innerHTML=xhReq.responseText;

		//Add default active class to the menu
		$( "ul.ulMenu li:nth-child(1)" ).addClass( "active" );

		//Initialize slides in HOME section
		$("#slides").slidesjs({
	    	width: 940,
	    	height: 528,
			navigation: {
				active: false
			},
			pagination: {
				active: false
			},
			play: { auto: true}
	    });
		
		//Creation of the scroll using iScroll plugin
		myScroll = new iScroll('wrapper', { hideScrollbar: true });

		//Add default header title
		$sectionTitle.text('Home');
		this.bindEvents();
	},
	bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
	updatewiib();
	// setTimeout(updatewiib(), 20000);
    	//Only for iOS 7 in the Phonegap Project
        if (parseFloat(window.device.version) >= 7.0) 
		{
			$('div#header').css('padding-top','20px');
			$('div#header .btn').css('margin-top','20px');
			$('div#header .location').css('margin-top','20px');
			$('div#sectionContent').css('margin-top','30px');
			$('div#wrapper').css('top','70px');
		}
    }

};

		//alert("OK");
	
	//var obj = jQuery.parseJSON( '[{"level":-63,"SSID":"L3wifi","BSSID":"58:97:bd:d2:07:ff","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662976},{"level":-63,"SSID":"timeA","BSSID":"58:97:bd:d2:07:fa","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662992},{"level":-62,"SSID":"AVCTRL","BSSID":"58:97:bd:d2:07:fc","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662971},{"level":-63,"SSID":"iPad","BSSID":"58:97:bd:d2:07:fe","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662988},{"level":-63,"SSID":"CvxWiFiMgmt","BSSID":"58:97:bd:d2:07:fb","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662980},{"level":-58,"SSID":"Mydd2016","BSSID":"2c:e6:cc:01:fa:b8","frequency":2412,"capabilities":"[WPA2-PSK-CCMP][ESS]","timestamp":23662878},{"level":-61,"SSID":"i like potatoes","BSSID":"e8:94:f6:ca:a9:76","frequency":2462,"capabilities":"[WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]","timestamp":23662907},{"level":-42,"SSID":"WIIB|274B|21.00c|47.00|93mm|","BSSID":"1a:fe:34:de:27:4b","frequency":2412,"capabilities":"[WPA2-PSK-CCMP+TKIP][ESS]","timestamp":23662874},{"level":-67,"SSID":"klconverge2016@unifibiz","BSSID":"1c:a5:32:bf:4c:c9","frequency":2457,"capabilities":"[WPA2-PSK-CCMP][ESS]","timestamp":23662916},{"level":-71,"SSID":"CvxWiFiMgmt","BSSID":"58:97:bd:d2:04:44","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662899},{"level":-62,"SSID":"Guest","BSSID":"58:97:bd:d2:07:fd","frequency":5320,"capabilities":"[ESS][BLE]","timestamp":23662984},{"level":-69,"SSID":"Guest","BSSID":"58:97:bd:d2:07:f2","frequency":2462,"capabilities":"[ESS][BLE]","timestamp":23662920},{"level":-52,"SSID":"Mydd2016","BSSID":"f0:3e:90:30:5a:68","frequency":2412,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662859},{"level":-71,"SSID":"Mydd2016","BSSID":"f0:3e:90:2f:63:5c","frequency":5765,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662997},{"level":-72,"SSID":"L3wifi","BSSID":"58:97:bd:c9:64:7f","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662950},{"level":-72,"SSID":"timeA","BSSID":"58:97:bd:c9:64:7a","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662967},{"level":-72,"SSID":"AVCTRL","BSSID":"58:97:bd:c9:64:7c","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662963},{"level":-72,"SSID":"iPad","BSSID":"58:97:bd:c9:64:7e","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662958},{"level":-73,"SSID":"CvxWiFiMgmt","BSSID":"58:97:bd:c9:64:7b","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662954},{"level":-68,"SSID":"iPad","BSSID":"58:97:bd:d2:07:f1","frequency":2462,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662928},{"level":-69,"SSID":"L3wifi","BSSID":"58:97:bd:d2:07:f0","frequency":2462,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662911},{"level":-70,"SSID":"KL Converge","BSSID":"d4:68:4d:1d:9b:28","frequency":2462,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662924},{"level":-71,"SSID":"AVCTRL","BSSID":"58:97:bd:cc:7c:23","frequency":2412,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662869},{"level":-73,"SSID":"L3wifi","BSSID":"58:97:bd:d2:04:40","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662886},{"level":-74,"SSID":"AVCTRL","BSSID":"58:97:bd:c9:64:73","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662903},{"level":-79,"SSID":"Mydd2016","BSSID":"f0:b0:52:1d:cf:0c","frequency":5765,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23663006},{"level":-75,"SSID":"CvxWiFiMgmt","BSSID":"58:97:bd:c9:64:74","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662891},{"level":-77,"SSID":"L3wifi","BSSID":"58:97:bd:c9:64:70","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662882},{"level":-89,"SSID":"L3wifi","BSSID":"5c:83:8f:4f:38:8f","frequency":5220,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662933},{"level":-89,"SSID":"CvxWiFiMgmt","BSSID":"5c:83:8f:4f:38:8b","frequency":5220,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662937},{"level":-90,"SSID":"timeA","BSSID":"5c:83:8f:55:e8:3c","frequency":5765,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23663001},{"level":-71,"SSID":"Guest","BSSID":"58:97:bd:c9:64:7d","frequency":5280,"capabilities":"[ESS][BLE]","timestamp":23662946},{"level":-74,"SSID":"Guest","BSSID":"58:97:bd:c9:64:72","frequency":2437,"capabilities":"[ESS][BLE]","timestamp":23662895},{"level":-89,"SSID":"Guest","BSSID":"5c:83:8f:4f:38:8d","frequency":5220,"capabilities":"[ESS][BLE]","timestamp":23662941}]' );
	
	
	//alert(obj[0].SSID);
	/*
	$.each( obj, function( key, value ) {
       console.log(  value.SSID );
  
	 if ( value.SSID.substring(0, 4) == "WIIB" )
	{
	alert( value.SSID);
	 }
        });
	*/	
		
		function updatewiib() {
			//code
		
$.getJSON( "http://api-m2x.att.com/v2/devices/767f9ecf3fc3c5b640437eba4e77ee53/streams/", function( data ) {


$("#temp").html(data.streams[0].value);
$("#humid").html(data.streams[1].value);
$("#distance").html(data.streams[2].value);

$("#date").html(data.streams[2].latest_value_at);

 //setTimeout(updatewiib(), 20000);

 
 //to change color
 if (data.streams[2].value < 60) {
	$("#thecolor").html('[ AVAILABLE ]');
	$("#thecolor").css("background-color","green");
 }
 else
 {
	$("#thecolor").html('[ EMPTY ]');
	$("#thecolor").css("background-color","red");
 }

 
});


 $(this).delay(5000).queue(function() { updatewiib(); } );
 
		}
		
		

function menu(option){

	//Remove previous active class
	$( "ul.ulMenu li:nth-child("+activeLi+")" ).removeClass( "active" );

	//Add active class to the current option
	$( "ul.ulMenu li:nth-child("+option+")" ).addClass( "active" );

	//Save active option
	activeLi = option;

	//Read by ajax the page
	xhReq.open("GET", "options/option"+option+".html", false);
	xhReq.send(null);
	document.getElementById("sectionContent").innerHTML=xhReq.responseText;

	if(option == 1){
		setTitle('Home');
		$btnLocation.hide();
		//Initialize slides
		$("#slides").slidesjs({
	    	width: 940,
	    	height: 528,
			navigation: {
				active: false
			},
			pagination: {
				active: false
			},
			play: { auto: true}
    	});
		myScroll.enable();
	}
	else if(option == 2){
		$btnLocation.hide();
		setTitle('Connect New');
		myScroll.enable();
	}
	else if(option == 3){
		$btnLocation.hide();
		setTitle('Details');
		myScroll.enable();
	}
	else if(option == 4){
		setTitle('WIIB Beacon');
		myScroll.disable();
		//Initialize PhotoSwipe plugin for gallery
		//var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	
	
	
	 
	 
	 //parsing beacon to information.
	var obj = jQuery.parseJSON( '[{"level":-63,"SSID":"L3wifi","BSSID":"58:97:bd:d2:07:ff","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662976},{"level":-63,"SSID":"timeA","BSSID":"58:97:bd:d2:07:fa","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662992},{"level":-62,"SSID":"AVCTRL","BSSID":"58:97:bd:d2:07:fc","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662971},{"level":-63,"SSID":"iPad","BSSID":"58:97:bd:d2:07:fe","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662988},{"level":-63,"SSID":"CvxWiFiMgmt","BSSID":"58:97:bd:d2:07:fb","frequency":5320,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662980},{"level":-58,"SSID":"Mydd2016","BSSID":"2c:e6:cc:01:fa:b8","frequency":2412,"capabilities":"[WPA2-PSK-CCMP][ESS]","timestamp":23662878},{"level":-61,"SSID":"i like potatoes","BSSID":"e8:94:f6:ca:a9:76","frequency":2462,"capabilities":"[WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]","timestamp":23662907},{"level":-42,"SSID":"WIIB|274B|21.00|47.00|93|","BSSID":"1a:fe:34:de:27:4b","frequency":2412,"capabilities":"[WPA2-PSK-CCMP+TKIP][ESS]","timestamp":23662874},{"level":-67,"SSID":"klconverge2016@unifibiz","BSSID":"1c:a5:32:bf:4c:c9","frequency":2457,"capabilities":"[WPA2-PSK-CCMP][ESS]","timestamp":23662916},{"level":-71,"SSID":"CvxWiFiMgmt","BSSID":"58:97:bd:d2:04:44","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662899},{"level":-62,"SSID":"Guest","BSSID":"58:97:bd:d2:07:fd","frequency":5320,"capabilities":"[ESS][BLE]","timestamp":23662984},{"level":-69,"SSID":"Guest","BSSID":"58:97:bd:d2:07:f2","frequency":2462,"capabilities":"[ESS][BLE]","timestamp":23662920},{"level":-52,"SSID":"Mydd2016","BSSID":"f0:3e:90:30:5a:68","frequency":2412,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662859},{"level":-71,"SSID":"Mydd2016","BSSID":"f0:3e:90:2f:63:5c","frequency":5765,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662997},{"level":-72,"SSID":"L3wifi","BSSID":"58:97:bd:c9:64:7f","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662950},{"level":-72,"SSID":"timeA","BSSID":"58:97:bd:c9:64:7a","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662967},{"level":-72,"SSID":"AVCTRL","BSSID":"58:97:bd:c9:64:7c","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662963},{"level":-72,"SSID":"iPad","BSSID":"58:97:bd:c9:64:7e","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662958},{"level":-73,"SSID":"CvxWiFiMgmt","BSSID":"58:97:bd:c9:64:7b","frequency":5280,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662954},{"level":-68,"SSID":"iPad","BSSID":"58:97:bd:d2:07:f1","frequency":2462,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662928},{"level":-69,"SSID":"L3wifi","BSSID":"58:97:bd:d2:07:f0","frequency":2462,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662911},{"level":-70,"SSID":"KL Converge","BSSID":"d4:68:4d:1d:9b:28","frequency":2462,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662924},{"level":-71,"SSID":"AVCTRL","BSSID":"58:97:bd:cc:7c:23","frequency":2412,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662869},{"level":-73,"SSID":"L3wifi","BSSID":"58:97:bd:d2:04:40","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662886},{"level":-74,"SSID":"AVCTRL","BSSID":"58:97:bd:c9:64:73","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662903},{"level":-79,"SSID":"Mydd2016","BSSID":"f0:b0:52:1d:cf:0c","frequency":5765,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23663006},{"level":-75,"SSID":"CvxWiFiMgmt","BSSID":"58:97:bd:c9:64:74","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662891},{"level":-77,"SSID":"L3wifi","BSSID":"58:97:bd:c9:64:70","frequency":2437,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662882},{"level":-89,"SSID":"L3wifi","BSSID":"5c:83:8f:4f:38:8f","frequency":5220,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662933},{"level":-89,"SSID":"CvxWiFiMgmt","BSSID":"5c:83:8f:4f:38:8b","frequency":5220,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23662937},{"level":-90,"SSID":"timeA","BSSID":"5c:83:8f:55:e8:3c","frequency":5765,"capabilities":"[WPA2-PSK-CCMP][ESS][BLE]","timestamp":23663001},{"level":-71,"SSID":"Guest","BSSID":"58:97:bd:c9:64:7d","frequency":5280,"capabilities":"[ESS][BLE]","timestamp":23662946},{"level":-74,"SSID":"Guest","BSSID":"58:97:bd:c9:64:72","frequency":2437,"capabilities":"[ESS][BLE]","timestamp":23662895},{"level":-89,"SSID":"Guest","BSSID":"5c:83:8f:4f:38:8d","frequency":5220,"capabilities":"[ESS][BLE]","timestamp":23662941}]' );
	 
	//var obj = jQuery.parseJSON( a );
	 
	//alert(obj[0].SSID);
	 
	 
	 $.each( obj, function( key, value ) {
       $("#wiibbeacon").append(value.SSID + "<br>");
  
	 if ( value.SSID.substring(0, 4) == "WIIB" )
	{
	    $("#wiibbeacon").append("<b>" + value.SSID + "</b><br>");
	    
	    
	    //custom made for m2x
	
	
	//split and process.
	var result = value.SSID.split('|');

	//WIIB|274B|21.00c|47.00|93mm|
	
	// 0 | 1 | 2 temp | 3 humid | 4 dist

//send temp

/*
    var dt = new Date();
    var localDate = dt;

    var gmt = localDate;
        var min = gmt.getTime() / 1000 / 60; // convert gmt date to minutes
        var localNow = new Date().getTimezoneOffset(); // get the timezone
        // offset in minutes
        var localTime = min - localNow; // get the local time

    var dateStr = new Date(localTime * 1000 * 60);
    // dateStr = dateStr.toISOString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"); // this will return as just the server date format i.e., yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
    dateStr = dateStr.toString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    //return dateStr;
*/
    var dateStr = new Date().toISOString();
   // 2014-07-16T02:55:12.345Z
    
    
    
    
      $.ajax({
      url:"http://api-m2x.att.com/v2/devices/e7872027031f98dd783896ca0ec8f6cb/streams/temp/values",
      type:"POST",
      headers: { 
        "Accept" : "application/json; charset=utf-8",
        "Content-Type": "application/json; charset=utf-8",
	"X-M2X-KEY": "d22d98b8dc9fb482e3589ea7f853ec0c"
      },
      data:{  "value": result[2], "timestamp": "2014-07-16T02:55:12.345Z"  },
      dataType:"json"
    })
      
      /*
	    $.ajax({
    url: 'http://api-m2x.att.com/v2/devices/e7872027031f98dd783896ca0ec8f6cb/streams/temp/values',
    type: 'post',
    data: { "values": [{ "value": result[2], "timestamp": "2014-07-16T02:55:12.345Z" }] },
    headers: {
	'Content-Type': 'application/json' ,
	'X-M2X-KEY': 'd22d98b8dc9fb482e3589ea7f853ec0c'
    },
    dataType: 'json',
    success: function (data) {
        console.info(data);
    }
});
	    
	 */   
	    
	    
	    //send humid

	    $.ajax({
    url: 'http://api-m2x.att.com/v2/devices/e7872027031f98dd783896ca0ec8f6cb/streams/humid/values',
    type: 'post',
    data: { "values": [{ "value": result[3], "timestamp": dateStr }] },
    headers: {
	'Content-Type': 'application/json' ,
	'X-M2X-KEY': 'd22d98b8dc9fb482e3589ea7f853ec0c'
    },
    dataType: 'json',
    success: function (data) {
        console.info(data);
    }
});
	    
	    
	    //send dist

	    $.ajax({
    url: 'http://api-m2x.att.com/v2/devices/e7872027031f98dd783896ca0ec8f6cb/streams/distance/values',
    type: 'post',
    data: { "values": [{ "value": result[4], "timestamp": dateStr }] },
    headers: {
	'Content-Type': 'application/json' ,
	'X-M2X-KEY': 'd22d98b8dc9fb482e3589ea7f853ec0c'
    },
    dataType: 'json',
    success: function (data) {
        console.info(data);
    }
});
	    
	    
	 }
        });
	
	
	
	
	
	 /*
	 $.each(obj, function(i, item)
		{
			$("#wiibbeacon").append(JSON.stringify( obj[i] ) + "<br>");
			
		}
		);
	 */
	 
	 
	//}
	
	 
	 
	 
	 function ssidHandler(a)
        {
       
          //real data from access point (AP)
	 $("#wiibbeacon").append("<hr><b>Debuging</b><br>" + JSON.stringify(a));
	 
	}
	 
        function fail(e){
        alert("Failed"+e);
        }
        
        
        //this is old scan result
       // WifiWizard.listNetworks(ssidHandler, fail);
        
        
        //get new result
        WifiWizard.getScanResults(ssidHandler, fail);
	
	
	
	}
	else if(option == 5){
		setTitle('Contact');
		mapObject.init();
	}

	//Refresh of the iScroll plugin
	myScroll.refresh();
	myScroll.scrollTo(0,0);

}

function setTitle(title){
	$sectionTitle.text(title);
}

//Map

var mapObject = {

	init : function(){
		var map, markers = [], openInfoWindow, bounds = new google.maps.LatLngBounds();
		$('div#mapCanvas').css({'height': heightBody - (heightBody/2) + 10 + 'px'});
		var markers = [];
		var latlng = new google.maps.LatLng(43.978518, 15.383649);
		var myOptions = {
			zoom: 16,
			center: latlng,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
		
		myScroll.enable();
		myScroll.refresh();
		myScroll.scrollTo(0,0);

		this.getMarkers();
	},

	getMarkers: function(){
		//Set a hardcoded marker
		mapObject.addMarker(
			'43.978518',
			'15.383649',
			'Contact',
			'<h3>Contact me</h3><br><p>I am at this heart shaped island.</p>',
			1,
			false);
		$btnLocation.show();
	},

	addMarker: function(lat,lng,title,description,id,position){
		var myLatlng = new google.maps.LatLng(lat, lng);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			animation: google.maps.Animation.DROP,
			title: title
		});

		marker.infowindow = new google.maps.InfoWindow({
			content: description
		});

		marker.id = id;

		google.maps.event.addListener(marker, 'click', function() {

			if(marker.title != '')
			{
				marker.infowindow.open(map, marker);    	
			}		
		});

		markers.push(marker);
	}

};

//When user resize the window in the browser, or in mobile change the position, adjust the height of the content
$( window ).resize(function() {
  $('#wrapper').css('height',window.innerHeight-50);
});
