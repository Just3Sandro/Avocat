var mymap = L.map('myMap').setView([51.505, -0.09], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors'}).addTo(mymap);

mymap.invalidateSize();
