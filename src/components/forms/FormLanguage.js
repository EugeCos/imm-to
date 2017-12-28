import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormLanguage extends Component {
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

        <div className="language-form-group">
        <center>
            <h4>Please specify your language knowledge</h4>
            <h5><b>English</b></h5>
        <select id="english" onChange={this.props.formFunction}>
            <option value="">Select...</option>
            <option value="0">None</option>
            <option value="4">Limited</option>
            <option value="6">Modest</option>
            <option value="7">Competent</option>
            <option value="8">Good</option>
            <option value="9">Very good</option>
            <option value="14">Excellent</option>
            <option value="16">Expert</option>
        </select>
        <br></br>
            <h5><b>French</b></h5>
        <select id="french" onChange={this.props.formFunction}>
            <option value="">Select...</option>
            <option value="0">None</option>
            <option value="4">Limited</option>
            <option value="5">Modest</option>
            <option value="6">Competent</option>
            <option value="7">Good</option>
            <option value="9">Very good</option>
            <option value="10">Excellent</option>
            <option value="12">Expert</option>
        </select>
        <br></br><br></br>
            <Link className='backLink' to={"/" + provinceId + "/form4"}>Back</Link>
            &nbsp; &nbsp;
            <Link to={ "/" + provinceId + "/form6" }><button type="submit" className="btn btn-primary">Next</button></Link>
            <br></br>
            <h6>Question 5 of 8</h6>
            </center>
        </div>     
        </div>   
        )
    }
}


export default FormLanguage;