import { MaptilerLayer as MapTiler} from "@maptiler/leaflet-maptilersdk";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

function MapTilerLayer() {
    const map = useMap()

    useEffect(() => {
        const layer = new MapTiler({
            apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
            style: '01a17a32-ec1c-718d-83a3-46d251e0c938'
            // style: '01a179c7-b381-7a87-92dc-5d209d915b24'
        })

        layer.addTo(map)

        return () => {
            map.removeLayer(layer)
        }
    }, [map])

    return null
}

export default MapTilerLayer;