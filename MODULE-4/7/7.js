const form = document.getElementById("routeForm");
const times = document.getElementById("times");

// Map initialize
const map = L.map('map').setView([60.1699, 24.9384], 10);

// Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

let routeLayer;

// Karaportti 2 coordinates
const destination = {
    lat: 60.2229,
    lon: 24.7585
};

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const address = document.getElementById("address").value;

    try {
        // 1️⃣ Get coordinates from address (geocoding)
        const geoRes = await fetch(`https://api.digitransit.fi/geocoding/v1/search?text=${address}`);
        const geoData = await geoRes.json();

        const coords = geoData.features[0].geometry.coordinates;
        const fromLon = coords[0];
        const fromLat = coords[1];

        // 2️⃣ GraphQL route query
        const query = `
        {
          plan(
            from: {lat: ${fromLat}, lon: ${fromLon}}
            to: {lat: ${destination.lat}, lon: ${destination.lon}}
            numItineraries: 1
          ) {
            itineraries {
              startTime
              endTime
              legs {
                legGeometry {
                  points
                }
              }
            }
          }
        }
        `;

        const routeRes = await fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/graphql"
            },
            body: query
        });

        const routeData = await routeRes.json();

        const itinerary = routeData.data.plan.itineraries[0];

        // 3️⃣ Decode polyline
        const encoded = itinerary.legs[0].legGeometry.points;
        const decoded = decodePolyline(encoded);

        // Remove old route
        if (routeLayer) {
            map.removeLayer(routeLayer);
        }

        // Draw route
        routeLayer = L.polyline(decoded, { color: "blue" }).addTo(map);

        map.fitBounds(routeLayer.getBounds());

        // 4️⃣ Show times
        const start = new Date(itinerary.startTime);
        const end = new Date(itinerary.endTime);

        times.textContent = `Start: ${start.toLocaleTimeString()} | End: ${end.toLocaleTimeString()}`;

    } catch (error) {
        console.error(error);
        alert("Error fetching route");
    }
});

// Polyline decoder
function decodePolyline(str) {
    let index = 0, lat = 0, lng = 0, coordinates = [];

    while (index < str.length) {
        let b, shift = 0, result = 0;

        do {
            b = str.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);

        let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lat += dlat;

        shift = 0;
        result = 0;

        do {
            b = str.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);

        let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lng += dlng;

        coordinates.push([lat / 1e5, lng / 1e5]);
    }

    return coordinates;
}