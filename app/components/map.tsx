import '@tomtom-international/web-sdk-maps/dist/maps.css'
import {useEffect, useRef, useState} from "react";
import tt from '@tomtom-international/web-sdk-maps';

const MAX_ZOOM = 10;

const Map = () => {
    const mapElement = useRef();
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [zoom, setZoom] = useState(0);
    const [map, setMap] = useState({});

    // useEffect(() => {
    //     let map = tt.map({
    //         key: 'LqZkSqtvASE9y4vOn3u25hfpnTtp0D0n',
    //         container: mapElement.current,
    //         center: [longitude, latitude],
    //         zoom,
    //     });
    //     setMap(map);
    //     return () => map.remove();
    // }, []);

    return (
        <div ref={mapElement} className="map"/>
    )
};

export default Map;