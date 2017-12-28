import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormMaritalStatus extends Component {
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
        <h4>Please specify your marital status</h4>
        <br></br>
        <select id="marital" onChange={this.props.formFunction}>
            <option value="">Status...</option>
            <option value="7">Single</option>
            <option value="10">Married or in Common-Law Partnership</option>
        </select>
        <br></br><br></br>
            <Link className='backLink' to={"/" + provinceId + "/form3"}>Back</Link>
            &nbsp; &nbsp;
            <Link to={ "/" + provinceId + "/form5" }><button type="submit" className="btn btn-primary">Next</button></Link>
            <br></br>
            <h6>Question 4 of 8</h6>
            </center>
        </div>        
        </div>
        )
    }
}


export default FormMaritalStatus;