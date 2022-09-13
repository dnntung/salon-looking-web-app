/* eslint-disable consistent-return */
import mapboxgl from "mapbox-gl";
import React from "react";

export default function MapComponent() {
    const mapContainerRef = React.useRef();
    const [lng, setLng] = React.useState(-70.9);
    const [lat, setLat] = React.useState(42.35);
    const [zoom, setZoom] = React.useState(9);

    React.useEffect(() => {
        const mapContainer = mapContainerRef?.current;
        if (!mapContainer) {
            return;
        }

        mapboxgl.accessToken = "MY_ACCESS_TOKEN";
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom,
        });

        map.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

        return () => {
            map.remove();
        };
    }, []);

    return <div ref={mapContainerRef} />;
}
