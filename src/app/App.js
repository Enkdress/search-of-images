import React, {Component} from 'react';

import Research from './components/reasearches/Research';
import Result from './components/results/Results';

import './App.css';

//KEY 13055488-7e28d181f3875eee86a83eee3



export default class App extends Component{

  state = {
    request: [],
    noHits: ""
  }

  getData = async e => {
    e.preventDefault()
    const REQ = e.target.research.value;
    const KEY = "13055488-7e28d181f3875eee86a83eee3"
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${REQ}&page=10&per_page=10&image_type=ilustartor&min_width=460px&editors_choice=true`
    console.log(URL)

    
    const RES = await fetch(URL);

    //HERE ARE THE ARRAY WITH THE REQUEST 
    const data = await RES.json();
    
    this.setState( { request: data.hits } )

  }

  render(){

    
    return (
      
        <div className="container">
          <div className="research-cont">
            <Research getData = {this.getData} />           
          </div>
          <div className="result row">
            <div className="card-container">
              <Result data = {this.state.request} />
            </div>
          </div>
        </div>

    )
  }
}



