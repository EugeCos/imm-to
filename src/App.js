import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ListOfProvinces from './components/ListOfProvinces';
import EachProvince from './components/EachProvince';
import CanadaMap from './components/CanadaMap';


class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <a href="/" className="headerText">immigrate.TO</a>   
          
          <a href="https://www.facebook.com/eugene.costov" target="_blank" rel="noopener noreferrer" className="FB"><img className="imgSocial" alt="boohoo" src='/fb.png' /></a>
          <a href="https://ca.linkedin.com/in/eugenecostov" target="_blank" rel="noopener noreferrer" className="Linked"><img className="imgSocial" alt="boohoo" src='/linked.png' /></a>
          <a href="https://twitter.com/StevieEvilCat" target="_blank" rel="noopener noreferrer" className="Twitter"><img className="imgSocial" alt="boohoo" src='/twitter.png' /></a>
          </header>
      <div>
        <Route exact path="/" component={ CanadaMap } />        
        <Route path="/" render={(props) => <ListOfProvinces provinces={this.props.provinces}/>}/>
        <Route path="/:provinceId" render={(props) => <EachProvince provinces={this.props.provinces} match={props.match} />} />
        </div>
      </div>
    );
  }
}

export default App;




