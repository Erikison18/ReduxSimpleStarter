import React, { Component } from 'react';
import { Map } from 'react-amap';

class Amap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { props } = this;
        return (
            <div id={`amp-${props.name}`}>
                <Map 
                    amapkey={'99d77e072f09ea55969ce6b5f1593609'} 
                    center={{lat: props.lat, lng: props.lon}} 
                    zoom={10}
                />
            </div>
        )
    }
}

export default Amap
