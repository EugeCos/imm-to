import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Summary extends Component {
   
    displayScreen() {

        let provinceId = this.props.match.params.provinceId;
        
        const congrats = (
            <div className="provinceName">
            <center>
                <h2>Congratulations!</h2>
                <br></br>
                <h4>Your score is within the range of <b>67-72*</b></h4>
                <h4>Based on the information you have provided you may be eligible to immigrate to the province of {this.props.provinces[provinceId].name}.</h4> 
            
            <br></br>                
                <p>Federal immigration program requires your score to be <u>67 or more points out of 100</u>.</p>
                
                <p>Click the "Next" button for a simple step-by-step guide on how to proceed with your immigration process.</p>
                <br></br> 
                <Link to={ "/" + provinceId + "/" }><button className="btn btn-primary" type="submit">Next </button></Link>
            </center>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 
                
                <h5><i>* please note that this questionnaire, though relatively accurate, is a rough estimate of your immigration eligibility and is conducted solely for presentational purposes as part of a school project.</i></h5>
                <h5><i>** also note that <a target="_blank" href={this.props.provinces[provinceId].programUrl}>{this.props.provinces[provinceId].nomineeProgram}</a> website is the only official government resource for immigration to {this.props.provinces[provinceId].name}. Please excercise caution when getting information from other sources.</i></h5>
        </div>  
        )

        const sorry = (
            <div className="provinceName">
            <center>
                <h3>Thank you for your interest in {this.props.provinces[provinceId].name}!</h3>
                <br></br>
                <h4>Your score is within the range of <b>58-63*</b></h4>
            </center>
                <br></br>
                <p>Based on the information you have provided you are likely <b><u>not eligible</u></b> to immigrate to the province of {this.props.provinces[provinceId].name}.</p>               
                <p>Federal immigration program requires your score to be <u>67 or more points out of 100</u>.</p>
                <p>Your lack of necessary points may be due to your insufficient education or work experience. Please consult Canadian government <a target="_blank" href={"http://www.cic.gc.ca/english/express-entry/grid-crs.asp"}>immigration portal</a> for more information.</p>

            <br></br><br></br><br></br><br></br><br></br>
 
                
                <h5><i>* please note that this questionnaire, though relatively accurate, is a rough estimate of your immigration eligibility and is conducted solely for presentational purposes as part of a school project.</i></h5>
                <h5><i>** also note that <a target="_blank" href={this.props.provinces[provinceId].programUrl}>{this.props.provinces[provinceId].nomineeProgram}</a> website is the only official government resource for immigration to {this.props.provinces[provinceId].name}. Please excercise caution when getting information from other sources.</i></h5>
                </div> 
            )

        const sorryOccupationEnglish = (
            <div className="provinceName">
            <center>
                <h3>Thank you for your interest in {this.props.provinces[provinceId].name}!</h3>
                <br></br>
                <h4>Your score is within the range of <b>56-62*</b></h4>
            </center>
                <br></br>
                <p>Based on the information you have provided you are likely <b><u>not eligible</u></b> to immigrate to the province of {this.props.provinces[provinceId].name}.</p>               
                <p>Federal immigration program requires your score to be <u>67 or more points out of 100</u>.</p>
                <p>You mentioned that your level of English is <b>{this.props.english}</b>. If you practice and raise your level to <b>Excellent</b>, you may have enough points to meet eligibility criteria.</p>
                <p>You also mentioned that your occupation lies within the <b>{this.props.occupation}</b> industry. Unfortunately, your skills are currently not in popular demand in {this.props.provinces[provinceId].name}. You may wish to gain a skill in a trade that is usefull in this province or research immigration programs of other provinces.</p>
                
            <br></br><br></br><br></br><br></br><br></br>
 
                
                <h5><i>* please note that this questionnaire, though relatively accurate, is a rough estimate of your immigration eligibility and is conducted solely for presentational purposes as part of a school project.</i></h5>
                <h5><i>** also note that <a target="_blank" href={this.props.provinces[provinceId].programUrl}>{this.props.provinces[provinceId].nomineeProgram}</a> website is the only official government resource for immigration to {this.props.provinces[provinceId].name}. Please excercise caution when getting information from other sources.</i></h5>
                </div> 
            )

            const sorryAge = (
                <div className="provinceName">
                <center>
                    <h3>Thank you for your interest in {this.props.provinces[provinceId].name}!</h3>
                    <br></br>
                    <h4>Your score is within the range of <b>48-55*</b></h4>
                </center>
                    <br></br>
                    <p>Based on the information you have provided you are likely <b><u>not eligible</u></b> to immigrate to the province of {this.props.provinces[provinceId].name}.</p>               
                    <p>At <b>{this.props.dob}</b> you are still too young to immigrate on your own. Feel free to get back to us when you reach the age of 21.</p>
                    <p>Federal immigration program requires your score to be <u>67 or more points out of 100</u>.</p>
                <br></br><br></br><br></br><br></br><br></br>
     
                    
                    <h5><i>* please note that this questionnaire, though relatively accurate, is a rough estimate of your immigration eligibility and is conducted solely for presentational purposes as part of a school project.</i></h5>
                    <h5><i>** also note that <a target="_blank" href={this.props.provinces[provinceId].programUrl}>{this.props.provinces[provinceId].nomineeProgram}</a> website is the only official government resource for immigration to {this.props.provinces[provinceId].name}. Please excercise caution when getting information from other sources.</i></h5>
                    </div> 
                )

                const sorryOccupation = (
                    <div className="provinceName">
                    <center>
                        <h3>Thank you for your interest in {this.props.provinces[provinceId].name}!</h3>
                        <br></br>
                        <h4>Your score is within the range of <b>62-66*</b></h4>
                    </center>
                        <br></br>
                        <p>Based on the information you have provided you are likely <b><u>not eligible</u></b> to immigrate to the province of {this.props.provinces[provinceId].name}.</p>               
                        <p>Federal immigration program requires your score to be <u>67 or more points out of 100</u>.</p>
                        <p>You mentioned that your occupation lies within the <b>{this.props.occupation}</b> industry. Unfortunately, your skills are currently not in popular demand in {this.props.provinces[provinceId].name}. You may wish to gain a skill in a trade that is usefull in this province or research immigration programs of other provinces.</p>
                        
                    <br></br><br></br><br></br><br></br><br></br>
         
                        
                        <h5><i>* please note that this questionnaire, though relatively accurate, is a rough estimate of your immigration eligibility and is conducted solely for presentational purposes as part of a school project.</i></h5>
                        <h5><i>** also note that <a target="_blank" href={this.props.provinces[provinceId].programUrl}>{this.props.provinces[provinceId].nomineeProgram}</a> website is the only official government resource for immigration to {this.props.provinces[provinceId].name}. Please excercise caution when getting information from other sources.</i></h5>
                        </div> 
                    )

                    const sorryEnglish = (
                        <div className="provinceName">
                        <center>
                            <h3>Thank you for your interest in {this.props.provinces[provinceId].name}!</h3>
                            <br></br>
                            <h4>Your score is within the range of <b>62-66*</b></h4>
                        </center>
                            <br></br>
                            <p>Based on the information you have provided you are likely <b><u>not eligible</u></b> to immigrate to the province of {this.props.provinces[provinceId].name}.</p>               
                            <p>Federal immigration program requires your score to be <u>67 or more points out of 100</u>.</p>
                            <p>You mentioned that your level of English is <b>{this.props.english}</b>. If you practice and raise your level to <b>Excellent</b>, you may have enough points to meet eligibility criteria.</p>
                            
                            
                        <br></br><br></br><br></br><br></br><br></br>
             
                            
                            <h5><i>* please note that this questionnaire, though relatively accurate, is a rough estimate of your immigration eligibility and is conducted solely for presentational purposes as part of a school project.</i></h5>
                            <h5><i>** also note that <a target="_blank" href={this.props.provinces[provinceId].programUrl}>{this.props.provinces[provinceId].nomineeProgram}</a> website is the only official government resource for immigration to {this.props.provinces[provinceId].name}. Please excercise caution when getting information from other sources.</i></h5>
                            </div> 
                        )

        if(this.props.points < 67){

            if(this.props.dob < 21) {
                return sorryAge
            }
            else if(this.props.englishPoints <= 7){
                return sorryEnglish
            }
            else if(this.props.points < 60 && this.props.englishPoints <= 7){
                return sorryOccupationEnglish
            }
            else if(60 < this.props.occupationPoints < 67){
                return sorryOccupation
            }
            else{
                return sorry
            }
        }

        else{
            return congrats
        }
    }

    render() {
        return (
            <div>       
                { this.displayScreen() } 
            </div>
        )
    }
}

export default Summary;