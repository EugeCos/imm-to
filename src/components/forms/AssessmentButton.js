import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AssessmentButton extends Component {
    render () {
        let provinceId = this.props.match.params.provinceId;
        return (
            <div>
            <div className="provinceName">
            <center>
                <h2>{this.props.provinces[provinceId].name}</h2>
                <br></br>
                <p>{this.props.provinces[provinceId].description}</p>
            </center>
                <br></br>
                <p><b>Nicknames: </b>{this.props.provinces[provinceId].nickname}</p>
                <p><b>Population (May 10, 2016): </b>{this.props.provinces[provinceId].population}</p>
                <p><b>Capital: </b>{this.props.provinces[provinceId].capital}</p>
                <p><b>Major industries: </b>{this.props.provinces[provinceId].industry}</p>
                <hr></hr>
            </div>
            <div className="assessmentButton">
                <p>For quick personal assessment of your eligibility to immigrate to {this.props.provinces[provinceId].name}, click below:</p>            
                <Link to={ "/" + provinceId + "/form1" }><button type="button" className="btn btn-info btn-block">Begin assessment</button></Link>
            </div>
            </div>
        )
    }
}


export default AssessmentButton;