const pLat = document.getElementById("pLat");
const pLon = document.getElementById("pLon");
const pAlt = document.getElementById("pAlt");
const pVel = document.getElementById("pVel");
const uLat = document.getElementById("uLat");
const uLon = document.getElementById("uLon");

let mylat = 0;
let mylon = 0;

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((pos) => {
    mylat = pos.coords.latitude;
    mylon = pos.coords.longitude;
    uLat.textContent = pos.coords.latitude.toFixed(3);
    uLon.textContent = pos.coords.longitude.toFixed(3);
  })
}

const map = L.map("map").setView([0, 0], 3);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const iss = L.icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});

const marker = L.marker([0, 0], { icon: iss }).addTo(map).bindPopup("ISS spotted!");
const marker2 = L.marker([0, 0]).addTo(map).bindPopup("You are here!");
const apiURL = "https://api.wheretheiss.at/v1/satellites/25544";

function fetchData() {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      const lat = data.latitude;
      const lon = data.longitude;
      const alt = data.altitude;
      const vel = data.velocity;
      map.setView([lat, lon]);
      marker.setLatLng([lat, lon]);
      marker2.setLatLng([mylat, mylon]);

      pLat.textContent = lat.toFixed(3);
      pLon.textContent = lon.toFixed(3);
      pAlt.textContent = alt.toFixed(3);
      pVel.textContent = vel.toFixed(3);
    });
}

fetchData();

setInterval(fetchData, 1000);
