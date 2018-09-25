const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: 'url(http://i.imgur.com/D9574Cu.png)',
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
    activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const buildMarker = (type, coords) => {
    // Your Code Here
 //adding marker
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = iconURLs[type];

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
