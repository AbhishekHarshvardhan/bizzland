$("document").ready(function(){$(".button-collapse").sideNav();$(".scrollspy").scrollSpy({scrollOffset:100});var options=[{selector:".main-text",offset:0,callback:function(el){Materialize.fadeInImage($(el))}},{selector:".navbar-fixed",offset:1200,callback:function(){$("nav").removeClass("transparent");$("nav").addClass("blue-grey darken-3")}}];Materialize.scrollFire(options);const position=[12.971389,77.75013];const centerPosition=[12.971389,77.85013];function showGoogleMaps(){const latLng=new google.maps.LatLng(position[0],position[1]);const centerLatLng=new google.maps.LatLng(centerPosition[0],centerPosition[1]);const mapOptions={zoom:12,streetViewControl:!1,scaleControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,center:centerLatLng};map=new google.maps.Map(document.getElementById("googlemap"),mapOptions);marker=new google.maps.Marker({position:latLng,map:map,draggable:!1,animation:google.maps.Animation.DROP})}
google.maps.event.addDomListener(window,"load",showGoogleMaps)})