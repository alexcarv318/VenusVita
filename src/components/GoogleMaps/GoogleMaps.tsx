import styles from './GoogleMaps.module.scss';
import {AdvancedMarker, Map, Marker} from '@vis.gl/react-google-maps';

const GoogleMaps = () => {

    function openMaps() {
        window.open("https://www.google.com/maps/place/Venus+Vita.+Spa+%D1%81%D0%B0%D0%BB%D0%BE%D0%BD+%D0%B5%D1%81%D1%82%D0%B5%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D1%97+%D0%BA%D0%BE%D1%81%D0%BC%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%97/@50.3884813,30.4612032,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4c90045e628e3:0x629490625e52178e!8m2!3d50.3884813!4d30.4637781!16s%2Fg%2F11w9dc6p94?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D", "_blank")
    }

    return (
        <div className={styles.container}>
            <Map
                mapId="google-maps"
                defaultZoom={18}
                defaultCenter={{lat: 50.38848171847742, lng: 30.463776336183386}}>
                <AdvancedMarker
                    key={"Venus Vita"}
                    position={{lat: 50.38852534573654, lng: 30.463765398987853}}
                    clickable={true}
                    onClick={openMaps}
                />
            </Map>
        </div>
    )
}

export default GoogleMaps;