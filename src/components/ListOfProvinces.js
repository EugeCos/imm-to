import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListOfProvinces extends Component {

    render() {

    let provinceList = Array.from(this.props.provinces);
    let provinceJSX = provinceList.map((val, i) => {
        return (
                <li><Link to={"/" + val.id + '/form'}> {val.name} </Link></li>                
        )
    })
        return (
            <div>
                <ul id="navigation">
                    {provinceJSX}
                </ul>
            </div>
        )
    }
}

export default ListOfProvinces;