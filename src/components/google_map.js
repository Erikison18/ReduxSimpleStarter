import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps/api';

export default (props) => {
    console.log('GoogleMapMy', props.lat, GoogleMapLoader, GoogleMap);
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} ></div> }
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
            }
        />
    );
} 
