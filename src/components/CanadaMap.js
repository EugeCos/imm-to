import React, { Component } from 'react';

class CanadaMap extends Component {

    render() {
        return (
            <div>
            <p className="mapText">Please click on the province of your interest</p>
            <br></br><br></br>
            <center>
                <iframe className="map" title="map" src="https://createaclickablemap.com/map.php?id=66199&maplocation=canada&online=true"></iframe>
            </center>
            </div>
        )
    }
}

export default CanadaMap;