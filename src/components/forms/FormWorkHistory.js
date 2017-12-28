import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormWorkHistory extends Component {
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

        <div className="form-group">
        
        <center>
            <h4>Occupation</h4>
        <select id="occupation" onChange={this.props.formFunction}>
            <option value="">Occupation...</option>
            <option value="8">Accommodation and Food Services</option>
            <option value="8">Accounting, Finance and Insurance</option>
            <option value="7">Administrative and Support</option>
            <option value="15">Agriculture, Forestry, Fishing and Hunting</option>
            <option value="9">Architecture</option>
            <option value="2">Arts, Entertainment and Recreation</option>
            <option value="15">Construction</option>
            <option value="4">Educational Services</option>
            <option value="15">Engineering, Aerospace</option>
            <option value="14">Engineering, Chemical</option>
            <option value="15">Engineering, Civil</option>
            <option value="15">Engineering, Mechanical</option>
            <option value="15">Engineering, Software</option>
            <option value="14">Health Care and Social Assistance</option>
            <option value="6">Information and Cultural Industries</option>
            <option value="12">Logistics, Transportation and Warehousing</option>
            <option value="4">Management and Business Administration</option>
            <option value="10">Manufacturing</option>
            <option value="15">Mining, Quarrying, and Oil and Gas Extraction</option>
            <option value="8">Services (except Public Administration)</option>
            <option value="6">Public Administration</option>
            <option value="6">Real Estate and Rental and Leasing</option>
            <option value="8">Retail Trade</option>
            <option value="15">Waste Management and Remediation Services</option>
            <option value="12">Wholesale Trade</option>
        </select>
        <br></br>
        <h4>Length of your past work</h4>
        <select id="years" onChange={this.props.formFunction}>
            <option value="">Select...</option>
            <option value="1">6 months or less</option>
            <option value="5">1 year</option>
            <option value="6">2 years</option>
            <option value="6">3 years</option>
            <option value="6">4 years</option>
            <option value="8">5 years</option>
            <option value="10">6+ years</option>
        </select>
        <br></br><br></br>
            <Link className='backLink' to={"/" + provinceId + "/form6"}>Back</Link>
            &nbsp; &nbsp;
            <Link to={ "/" + provinceId + "/form8" }><button type="submit" className="btn btn-primary">Next</button></Link>
            <br></br>
            <h6>Question 7 / 8</h6>
            </center>
        </div>    
        </div>    
        )
    }
}

export default FormWorkHistory;