import './style.css';
import L from 'leaflet';
import gsap from 'gsap';

const map = L.map('map', { zoomControl: false, attributionControl: false }).setView([45, -40], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

const mark = (t, lat, lng) => {
  L.marker([lat, lng], { icon: L.divIcon({ className: 'x', html: `<div class="tooltip">${t}</div><div class="arrow"></div>`, iconSize: [120, 50], iconAnchor: [60, 50] }) }).addTo(map);
}
mark("THIS IS USA", 38, -97);
mark("THIS IS EUROPE", 48, 10);

gsap.from("header", { y: -50, opacity: 0, duration: 1 });
gsap.from(".card", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, delay: 0.2 });

const m = document.getElementById('modal'), b = document.getElementById('don'), c = document.getElementById('close');
b.onclick = () => m.classList.remove('hidden');
c.onclick = () => m.classList.add('hidden');
m.onclick = (e) => e.target === m && m.classList.add('hidden');

const r = document.getElementById('run');
r.onmouseover = () => {
  gsap.to(r, { left: Math.random() * (window.innerWidth - 300), top: Math.random() * (window.innerHeight - 100), position: 'fixed', duration: 0.1, ease: "power1.out" });
};
