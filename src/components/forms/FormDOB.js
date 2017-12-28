import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormDOB extends Component {
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

        <div class="form-group">
        <center>
        <h4>Please specify your date of birth</h4>
        <br></br>
            <label for="birthDate" class="col-sm-3 control-label">Date of Birth</label>
            <div class="col-sm-6">
                <input type="date" id="birthDate" onChange={this.props.formFunction} class="form-control"/>
            </div>
            <br></br><br></br><br></br>
            <Link className='backLink' to={"/" + provinceId + "/form1"}>Back</Link> 
            &nbsp; &nbsp;
            <Link to={ "/" + provinceId + "/form3" }><button type="submit" className="btn btn-primary">Next</button></Link>
            <br></br>
            <h6>Question 2 / 8</h6>
            </center>
        </div>  
        </div>      
        )
    }
}


export default FormDOB;