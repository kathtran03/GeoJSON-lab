mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0aHRyYW4wMyIsImEiOiJjbTZxeWhodXkxcDRqMnFvaWJueWY3dzYzIn0.Qio5gJ5Wer70rWl-nxF85g';
let map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/satellite-v9', // style URL
zoom: 5.5, // starting zoom
center: [138, 38] // starting center
});
