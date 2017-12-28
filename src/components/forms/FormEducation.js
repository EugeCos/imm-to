import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormEducation extends Component {
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
        <h4>Please specify your education level</h4>
        <br></br>
        <select id="education" onChange={this.props.formFunction}>
            <option value="">Select...</option>
            <option value="6">Apprenticeship</option>
            <option value="8">Professional or Trade School Certificate</option>
            <option value="10">College or Non-University Degree</option>
            <option value="13">Bachelor Degree: University or College</option>
            <option value="15">Master Degree: University or College</option>
            <option value="12">Ph.D</option>
        </select>
        <br></br><br></br>
            <Link className='backLink' to={"/" + provinceId + "/form5"}>Back</Link>
            &nbsp; &nbsp;
            <Link to={ "/" + provinceId + "/form7" }><button type="submit" className="btn btn-primary">Next</button></Link>
            <br></br>
            <h6>Question 6 / 8</h6>
            </center>
        </div>  
        </div>      
        )
    }
}


export default FormEducation;