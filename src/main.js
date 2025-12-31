import './style.css';
import L from 'leaflet';

const map = L.map('map', { zoomControl: false, attributionControl: false }).setView([45, -40], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const add = (t, lat, lng) => L.marker([lat, lng], {
  icon: L.divIcon({ className: 'x', html: `<div class="market">${t}</div><div class="arw"></div>`, iconSize: [100, 50], iconAnchor: [50, 40] })
}).addTo(map);

add("USA != EU", 38, -97);
add("EUROPE", 48, 10);

document.getElementById('don').onclick = () => document.getElementById('modal').style.display = 'flex';

const r = document.getElementById('run');
r.onmouseover = () => {
  Object.assign(r.style, { position: 'fixed', left: Math.random() * (window.innerWidth - 300) + 'px', top: Math.random() * (window.innerHeight - 100) + 'px' });
};

setInterval(() => {
  map.flyTo(Math.random() > .5 ? [38, -97] : [48, 10], 4, { duration: 2.5 });
}, 8000);
