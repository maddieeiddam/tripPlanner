// const index = require('../public/bundle')
console.log('Hello from JavaScript');

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoibWFkZGllZWlkZGFtIiwiYSI6ImNqbWk1ZG9tejAxZW0zb3JwMmk5NXJ6cnoifQ.ZDIkuER2XZwMilQIqlRp_A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
