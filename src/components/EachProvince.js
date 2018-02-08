import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import AssessmentButton from './forms/AssessmentButton';
import FormNames from './forms/FormNames';
import FormDOB from './forms/FormDOB';
import FormNationality from './forms/FormNationality';
import FormMaritalStatus from './forms/FormMaritalStatus';
import FormLanguage from './forms/FormLanguage';
import FormEducation from './forms/FormEducation';
import FormWorkHistory from './forms/FormWorkHistory';
import FormFamily from './forms/FormFamily';
import FormFinal from './forms/FormFinal';
import Summary from './forms/Summary';


class EachProvince extends Component{
    constructor() {
        super();
        
        this.state = {
            newsHeader: [],
            firstName: "",
            lastName: "",
            dob: "",
            nationality: "",
            marStatus: "",
            english: "",
            enlgishPoints: 0,
            french: "",
            education: "",
            occupation: "",
            occupationPoints: 0,
            workLength: "",
            family: "",
            points: 0
        }

        this.newsScraper = this.newsScraper.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
    }

    dateChange() {
        let age = this.state.dob;
        if(0 <= age && age <= 18){
            let agePoints = 0;
            let updatedPoints = +(this.state.points) + +(agePoints);
            this.setState({
                points: updatedPoints
            })
        }
        else if(19 <= age && age <= 21){
            let agePoints = 5;
            let updatedPoints = +(this.state.points) + +(agePoints);
            this.setState({
                points: updatedPoints
            })
        }
        
        else if(22 <= age && age <= 31){
            let agePoints = 12;
            let updatedPoints = +(this.state.points) + +(agePoints);
            this.setState({
                points: updatedPoints
            })
        }
        else if(32 <= age && age <= 36){
            let agePoints = 10;
            let updatedPoints = +(this.state.points) + +(agePoints);
            this.setState({
                points: updatedPoints
            })
        }
        else if(37 <= age && age <= 45){
            let agePoints = 8;
            let updatedPoints = +(this.state.points) + +(agePoints);
            this.setState({
                points: updatedPoints
            })
        }
        else if(46 <= age && age <= 49){
            let agePoints = 5;
            let updatedPoints = +(this.state.points) + +(agePoints);
            this.setState({
                points: updatedPoints
            })
        }
        else if(age => 50){
            let agePoints = 3;
            let updatedPoints = +(this.state.points) + +(agePoints);
            this.setState({
                points: updatedPoints
            })
        }
    }


    handleChange = e =>{
        if (e.target.id === "fname") {
            this.setState({
                firstName: e.target.value
            })
        }
        else if (e.target.id === "lname") {
            this.setState({
                lastName: e.target.value
            })
        }
        else if (e.target.id === "birthDate") {
            let age = moment().diff(e.target.value, 'years');
            
            this.setState({
                dob: age
            })
        }
        else if (e.target.id === "nationality") {
            let nationality = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].innerText;
            this.setState({
                nationality: nationality
            })
            this.dateChange();
        }
        else if (e.target.id === "marital") {
            let status = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].innerText;
            let statusPoints = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
            let updatedPoints = +(this.state.points) + +(statusPoints);
            this.setState({
                marStatus: status,
                points: updatedPoints
            })
        }
        else if (e.target.id === "english") {
            let english = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].innerText;
            let englishPoints = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
            let updatedPoints = +(this.state.points) + +(englishPoints);
            this.setState({
                english: english,
                englishPoints: englishPoints,
                points: updatedPoints
            })
        }
        else if (e.target.id === "french") {
            let french = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].innerText;
            let frenchPoints = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
            let updatedPoints = +(this.state.points) + +(frenchPoints);
            this.setState({
                french: french,
                points: updatedPoints
            })
        }
        else if (e.target.id === "education") {
            let education = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].innerText;
            let educationPoints = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
            let updatedPoints = +(this.state.points) + +(educationPoints);
            this.setState({
                education: education,
                points: updatedPoints
            })
        }
        else if (e.target.id === "occupation") {
            let occupation = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].innerText;
            let occupationPoints = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
            let updatedPoints = +(this.state.points) + +(occupationPoints);
            this.setState({
                occupation: occupation,
                occupationPoints: occupationPoints,
                points: updatedPoints
            })
        }
        else if (e.target.id === "years") {
            let workLength = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].innerText;
            let workLengthPoints = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
            let updatedPoints = +(this.state.points) + +(workLengthPoints);
            this.setState({
                workLength: workLength,
                points: updatedPoints
            })
        }
        else if (e.target.id === "family") {
            let family = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].innerText;
            let familyPoints = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].value;
            let updatedPoints = +(this.state.points) + +(familyPoints);
            this.setState({
                family: family,
                points: updatedPoints
            })
        }
      }

    
    newsScraper() {
        console.log("newsScraper ran")
        let provinceId = this.props.match.params.provinceId;
        let provinceName = this.props.provinces[provinceId].name;
        // let provincePhoto = this.props.provinces[provinceId].photo;
    // myapikey = require('./keys.js');
        let baseURL = 'https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=canada+culture+' + provinceName;
        let bingKey = '1226f792ac724ee4aa7ae401c4ee1aee';
        let p = axios.get(baseURL, { headers: { 'Ocp-Apim-Subscription-Key' : bingKey } });
        p.then((result) => {
            let newsHeader = result.data.value;
                this.setState({
                    newsHeader: newsHeader
                })
        })
        p.catch((error) => {
            console.log(error);
        });
    }

    render() {
        this.newsScraper();
        let provinceId = this.props.match.params.provinceId;
        let backImg = {
            backgroundImage: "url("+this.props.provinces[provinceId].background+")"
          };
        let page = this.state.newsHeader.length > 0 ? 
           (
            <div>
                <div className="provinceBack" style={ backImg }>
                </div>
            
                <div className="item">
                <img src={this.props.provinces[provinceId].photo} alt="boohoo"/>
                </div>
            
                <div className="newsBox">
                <center>
                    <h4>Local news</h4>
                </center>
                <p><a target="_blank" href={this.state.newsHeader[0].url}>{this.state.newsHeader[0].name}</a></p>
                <p><a target="_blank" href={this.state.newsHeader[1].url}>{this.state.newsHeader[1].name}</a></p>
                <p><a target="_blank" href={this.state.newsHeader[2].url}>{this.state.newsHeader[2].name}</a></p> 
                <p><a target="_blank" href={this.state.newsHeader[3].url}>{this.state.newsHeader[3].name}</a></p>
                         
                </div>

            <Switch>
                <Route path="/:provinceId/form" render={(props) => <AssessmentButton provinces={this.props.provinces} match={props.match}/>}/>
                <Route path="/:provinceId/form1" render={(props) => <FormNames provinces={this.props.provinces} formFunction={this.handleChange} match={props.match}/> } />
                <Route path="/:provinceId/form2" render={(props) => <FormDOB provinces={this.props.provinces} formFunction={this.handleChange} match={props.match}/> } />
                <Route path="/:provinceId/form3" render={(props) => <FormNationality provinces={this.props.provinces} formFunction={this.handleChange} match={props.match}/>} />
                <Route path="/:provinceId/form4" render={(props) => <FormMaritalStatus provinces={this.props.provinces} formFunction={this.handleChange} match={props.match}/>} />
                <Route path="/:provinceId/form5" render={(props) => <FormLanguage provinces={this.props.provinces} formFunction={this.handleChange} match={props.match}/>} />
                <Route path="/:provinceId/form6" render={(props) => <FormEducation provinces={this.props.provinces} formFunction={this.handleChange} match={props.match}/>} />
                <Route path="/:provinceId/form7" render={(props) => <FormWorkHistory provinces={this.props.provinces} formFunction={this.handleChange} match={props.match}/>}/>
                <Route path="/:provinceId/form8" render={(props) => <FormFamily provinces={this.props.provinces} formFunction={this.handleChange} match={props.match}/>}/>
                <Route path="/:provinceId/form9" render={(props) => <FormFinal provinces={this.props.provinces} formFunction={this.handleChange} match={props.match} fName={this.state.firstName} lName={this.state.lastName} dob={this.state.dob} nationality={this.state.nationality} marStatus={this.state.marStatus} english={this.state.english} french={this.state.french} education={this.state.education} occupation={this.state.occupation} workLength={this.state.workLength} family={this.state.family} points={this.state.points}/>}/>
                <Route path="/:provinceId/summary" render={(props) => <Summary provinces={this.props.provinces} formFunction={this.handleChange} occupation={this.state.occupation} education={this.state.education} workLength={this.state.workLength} dob={this.state.dob} english={this.state.english} englishPoints={this.state.englishPoints} points={this.state.points} match={props.match}/>}/>
            </Switch>

            
            </div>
            )
        : '';
        return page;
    }
}

export default EachProvince;