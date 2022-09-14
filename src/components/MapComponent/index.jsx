/* eslint-disable consistent-return */
import mapboxgl from "mapbox-gl";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { MAPBOX_ACCESS_TOKEN, modalIds } from "src/utils/constants";
import { useMap } from "../MapProvider";
import { useModal } from "../ModalProvider";
import { Popup } from "./Popup";

export default function MapComponent() {
    const mapContainerRef = React.useRef();
    const [lng, setLng] = React.useState(-70.9);
    const [lat, setLat] = React.useState(42.35);
    const [zoom, setZoom] = React.useState(9);
    const map = React.useRef(null);
    const marker = React.useRef(null);
    const popup = React.useRef(null);
    const { setCoordinates, currentCoordinates } = useMap();
    const { setShow, setId } = useModal();

    const renderPopup = (el) => {
        const placeholder = document.createElement("div");
        const root = ReactDOM.createRoot(placeholder);
        root.render(el);

        popup.current
            .setDOMContent(placeholder)
            .setLngLat(currentCoordinates)
            .addTo(map?.current);
    };

    const closePopup = () => {
        popup.current?.remove();
    };

    const showCreateSalonModal = () => {
        setId(modalIds.CREATE_SALON);
        setShow(true);
    };

    React.useEffect(() => {
        const mapContainer = mapContainerRef?.current;
        if (!mapContainer) {
            return;
        }

        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

        popup.current = new mapboxgl.Popup({
            closeOnClick: true,
            offset: 40,
        });
        marker.current = new mapboxgl.Marker();
        map.current = new mapboxgl.Map({
            container: mapContainer,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom,
            attributionControl: false,
        });

        map.current.on("style.load", () => {
            map.current.setFog({}); // Set the default atmosphere style
        });

        // Add geolocate control to the map.
        map.current.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true,
            })
        );

        map.current.on("click", (e) => {
            setCoordinates(e.lngLat);
        });

        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

        return () => {
            map.current?.remove();
        };
    }, []);

    React.useEffect(() => {
        if (currentCoordinates) {
            marker?.current.setLngLat(currentCoordinates).addTo(map?.current);
            renderPopup(
                <Popup onCancel={closePopup} onConfirm={showCreateSalonModal} />
            );
        }
    }, [currentCoordinates]);

    return (
        <div className="relative w-full h-full">
            <div className="bg-[#23374be6] z-[1] text-white px-[12px] py-[6px] absolute top-0 left-0 m-[12px] rounded">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainerRef} className="h-full w-full" />
        </div>
    );
}
