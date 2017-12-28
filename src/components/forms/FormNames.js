import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormNames extends Component {
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
            
            <form className="form-group">
            <center>
            <h4>Please enter your name</h4>
              <input type="text" className="form-control" placeholder="First name" id="fname" onChange={this.props.formFunction} required/>
              <input type="text" className="form-control" placeholder="Last name" id="lname" onChange={this.props.formFunction} required/>
              <br></br>
              <Link to={ "/" + provinceId + "/form2" }><button type="submit" className="btn btn-primary">Next</button></Link>
              <br></br>
              <h6>Question 1 / 8</h6>
              </center>
            </form>
            
            </div>
        )
    }
}


export default FormNames;