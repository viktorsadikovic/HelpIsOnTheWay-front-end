  var start;
  console.log("test")
  function initMap() {
      const directionsRenderer = new google.maps.DirectionsRenderer();
      const directionsService = new google.maps.DirectionsService();
      const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 7,
          center: {lat: 41.9981, lng: 21.4254},
      });
      directionsRenderer.setMap(map);
      directionsRenderer.setPanel(document.getElementById("right-panel"));


      document.getElementById("changemode-walking").addEventListener("click", () => {
          calculateAndDisplayRoute(directionsService, directionsRenderer,
              start, google.maps.TravelMode.WALKING);
      });

      document.getElementById("changemode-transit").addEventListener("click", () => {
          calculateAndDisplayRoute(directionsService, directionsRenderer,
              start, google.maps.TravelMode.TRANSIT);
      });

      document.getElementById("changemode-driving").addEventListener("click", () => {
          calculateAndDisplayRoute(directionsService, directionsRenderer,
              start, google.maps.TravelMode.DRIVING);
      });

      infoWindow = new google.maps.InfoWindow();

      document.getElementById("search-route").addEventListener("click", () => {
          // Try HTML5 geolocation.
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                  (position) => {
                      const pos = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                      };
                      map.setCenter(pos);
                      start = pos;
                      calculateAndDisplayRoute(directionsService, directionsRenderer,
                          start, google.maps.TravelMode.WALKING);
                  },
                  () => {
                      addMarker(map);
                      handleLocationError(true, infoWindow, map.getCenter());
                  }
              );
          } else {
              // Browser doesn't support Geolocation
              addMarker(map);
              handleLocationError(false, infoWindow, map.getCenter());
          }
      });
  }

  function addMarker(map) {
      const latEnd = parseFloat(document.getElementById("latEnd").value);
      const lngEnd = parseFloat(document.getElementById("lngEnd").value);
      const pos = new google.maps.LatLng(latEnd, lngEnd);

      const marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: "Click to zoom"
      });
      map.setCenter(marker.getPosition());
      map.setZoom(15);
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
          browserHasGeolocation
              ? "Error: The Geolocation service failed."
              : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer, startPos, mode) {
      const latEnd = parseFloat(document.getElementById("latEnd").value);
      const lngEnd = parseFloat(document.getElementById("lngEnd").value);
      const end = new google.maps.LatLng(latEnd, lngEnd);

      directionsService.route(
          {
              origin: startPos,
              destination: end,
              travelMode: mode
          },
          (response, status) => {
              if (status === "OK") {
                  document.getElementById("mode-selector").style.visibility = "visible";
                  document.getElementById("right-panel").style.visibility = "visible";
                  directionsRenderer.setDirections(response);
              } else {
                  window.alert("Directions request failed due to " + status);
              }
          }
      );
  }
