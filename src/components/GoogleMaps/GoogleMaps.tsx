import styles from './GoogleMaps.module.scss';
import {Map, Marker} from '@vis.gl/react-google-maps';

const GoogleMaps = () => {

    return (
        <div className={styles.container}>
            <Map
                defaultZoom={18}
                defaultCenter={{lat: 50.38848171847742, lng: 30.463776336183386}}>
                <Marker key={"Venus Vita"} position={{lat: 50.38852534573654, lng: 30.463765398987853}} />
            </Map>
        </div>
    )
}

export default GoogleMaps;