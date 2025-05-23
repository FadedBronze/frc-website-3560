import "leaflet/dist/leaflet.css";
import { useRef, useEffect } from "react";
import L from "leaflet";

export default function Map() {
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current == false) {
      let map = L.map('map').setView([43.738041, -79.727204], 17);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href=https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors',
      }).addTo(map);
      let marker = L.marker([43.738041, -79.727204]).addTo(map);
    }
    
    initRef.current = true;
  }, [])

  return (
    <div id="map" className="w-full h-96"></div> 
  )
}
