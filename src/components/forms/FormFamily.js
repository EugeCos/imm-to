import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormFamily extends Component {
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
        <h4>Do you have any family members or relatives living in Canada and who are 18 years or older?</h4>
        <br></br>
        <select id="family" onChange={this.props.formFunction}>
            <option value="">Relationship...</option>
            <option value="0">None</option>
            <option value="12">Spouse or Common-Law Partner</option>
            <option value="12">Mother or Father</option>
            <option value="6">Daughter or Son</option>
            <option value="6">Grandmother of Grandfather</option>
            <option value="4">Sister or Brother</option>
            <option value="2">Niece or Nephew</option>
            <option value="2">Aunt or Uncle</option>
            <option value="2">Cousin</option>
            <option value="2">Distant Relative</option>
        </select>
        <br></br><br></br>
            <Link className='backLink' to={"/" + provinceId + "/form7"}>Back</Link>
            &nbsp; &nbsp;
            <Link to={ "/" + provinceId + "/form9" }><button type="submit" className="btn btn-primary">Next</button></Link>
            <br></br>
            <h6>Question 8 / 8</h6>
            </center>
        </div>   
        </div>     
        )
    }
}


export default FormFamily;