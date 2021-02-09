import React, {useState} from 'react';
import Research from './components/reasearches/Research';
import Result from './components/results/Results';
import './App.css';

const App = () => {
  const [hits, setHits] = useState()

  const getData = async (e) => {
    e.preventDefault()
    const REQ = e.target.research.value;
    const KEY = "13055488-7e28d181f3875eee86a83eee3"
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${REQ}&page=10&per_page=10&image_type=ilustartor&min_width=460px&editors_choice=true`

    const RES = await fetch(URL);
    const data = await RES.json();
    setHits(data.hits)
  }

  return (
    <div className="container">
      <div className="research-cont">
        <Research getData={getData} />
      </div>
      <div className="result row">
        <div className="card-container">
          <Result data={hits} />
        </div>
      </div>
      <br id="endPage" />
    </div>
  )

}

export default App;

