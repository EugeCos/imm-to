import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormFinal extends Component {
    render () {
        let provinceId = this.props.match.params.provinceId;

        return (          
        <div className="final-table">
        <center>
        <h4>Please review your information</h4>
        </center>
        <br></br>
        <table>
        <tr>
          <td><b>Name</b></td>
          <td>{this.props.fName} {this.props.lName}</td>
        </tr>
        <tr>
          <td><b>Age</b></td>
          <td>{this.props.dob + " years"}</td>
        </tr>
        <tr>
          <td><b>Nationality</b></td>
          <td>{this.props.nationality}</td>
        </tr>
        <tr>
          <td><b>Marital status</b></td>
          <td>{this.props.marStatus}</td>
        </tr>
        <tr>
          <td><b>Level of English</b></td>
          <td>{this.props.english}</td>
        </tr>
        <tr>
          <td><b>Level of French</b></td>
          <td>{this.props.french}</td>
        </tr>
        <tr>
        <td><b>Education</b></td>
        <td>{this.props.education}</td>
      </tr>
      <tr>
      <td><b>Work experience</b></td>
      <td>{this.props.occupation}</td>
    </tr>
    <tr>
    <td><b>Work experience (length)</b></td>
    <td>{this.props.workLength}</td>
  </tr>
  <tr>
  <td><b>Family in Canada</b></td>
  <td>{this.props.family}</td>
</tr>
<tr>
<td><b>Points</b></td>
<td>{this.props.points}</td>
</tr>
      </table>
      <br></br><br></br>
          
          <center>
          <Link className='backLink' to={"/" + provinceId + "/form8"}>Back</Link>
          &nbsp; &nbsp;
          <Link to={ "/" + provinceId + "/summary" }><button className="btn btn-primary" type="submit">Submit</button></Link>

          </center>
           
        </div>        
        )
    }
}


export default FormFinal;