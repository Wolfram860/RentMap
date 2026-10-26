import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import './MapView.css'
import MapTilerLayer from './MapTilerLayer'

function MapView() {
    return (
        <MapContainer
            center={[46.4825, 30.7233]}
            zoom={12}
            scrollWheelZoom={true}
            className="map"
        >
            <MapTilerLayer/>
            {/* <TileLayer
                attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; OpenStreetMap contributors'
                url={`https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=${import.meta.env.VITE_MAPTILER_API_KEY}`}
               tileSize={512}
               zoomOffset={-1}
            /> */}
            {/* <TileLayer
                attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                url={`https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=${import.meta.env.VITE_CARTO_API_KEY}`}
            /> */}

            <Marker position={[46.4825, 30.7233]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>

        </MapContainer>
    )
}

export default MapView


