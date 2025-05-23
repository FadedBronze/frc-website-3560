import "leaflet/dist/leaflet.css";
import { useRef, useEffect } from "react";
import L, {icon, Marker} from "leaflet";

export default function Map() {
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current == false) {
      const iconRetinaUrl = '/marker-icon-2x.png';
      const iconUrl = '/marker-icon.png';
      const shadowUrl = '/marker-shadow.png';

      const iconDefault = icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });

      Marker.prototype.options.icon = iconDefault;

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
