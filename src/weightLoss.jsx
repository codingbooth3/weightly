import '../src/css/weightLoss.css';
import { useState } from 'react';

export default function WeightLoss() {
  const [system, setSystem] = useState('imperial');
  
  const [ImpformData, setImpFormData] = useState({
    gender: 'male',
    weight: 175,
    heightFt: 5,
    heightIn: 8,
    age: 18
  });

  const [MetformData,setMetFormData] = useState({
    gender: 'male',
    weight: 80,
    height: 171,
    age: 18
  })
  const [ImpBmrValue, setImpBmr] = useState(null);

  const [MetBmrValue, setMetBmr] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setImpFormData({
      ...ImpformData,
      [name]: value,
    });
    setMetFormData({
        ...MetformData,
        [name]: value,
    })
  };

  const showMetric = () => {
    setSystem('metric');
  };

  const showImperial = () => {
    setSystem('imperial');
  };

  const calculateImpBMR = () => {
    const { gender, heightFt, heightIn, weight, age } = ImpformData;
    const height = (parseFloat(heightFt) * 30.48) + (parseFloat(heightIn) * 2.54);
    let ImpBmrValue;
    if (gender === 'male') {
      ImpBmrValue = (10 * weight * 0.453592) + (6.25 * height) - (5 * age) + 5;
    } else {
      ImpBmrValue = (10 * weight * 0.453592) + (6.25 * height) - (5 * age) - 161; 
    }
    setImpBmr(ImpBmrValue);
  };

  const calculateMetBMR = () => {
    const { gender, height, weight, age} = MetformData;
    let MetBmrValue;
    if (gender === 'male') {
      MetBmrValue = (10 * weight) + (6.25 * height) - (5 * age) + 5
    } else {
      MetBmrValue = (10 * weight) + (6.25 * height) - (5 * age) - 161
    }
    setMetBmr(MetBmrValue)
  }

  const handleSubmitImp = (e) => {
    e.preventDefault();
    calculateImpBMR();
  };

  const handleSubmitMet = (e) => {
    e.preventDefault();
    calculateMetBMR();
  }



  return (
    <div id='weightBody'>
      <div id="weightButtons">
        <button onClick={showImperial} id='imperial' className={`system ${system === 'imperial' ? 'active' : ''}`}>Imperial System</button>
        <button onClick={showMetric} id='metric' className={`system ${system === 'metric' ? 'active' : ''}`}>Metric System</button>
      </div>
      {system === 'imperial' && (
        <div id='imperialBody'>
          <form onSubmit={handleSubmitImp}>
            <ul id='imperialUl'>
              <div id="genderContainer">
                <div id="maleContainer" className='genderContainer'>
                  <input
                    type="radio"
                    name='gender'
                    value='male'
                    checked={ImpformData.gender === 'male'}
                    onChange={handleChange}
                  /> Male
                </div>
                <div id="femaleContainer" className='genderContainer'>
                  <input
                    type="radio"
                    name='gender'
                    value='female'
                    checked={ImpformData.gender === 'female'}
                    onChange={handleChange}
                  /> Female
                </div>
              </div>
              <p id='heightHeading'>Height</p>
              <div id="mobileHeightContainer">
                <div id='mobileFootContainer'>
                  <input type="number" value={ImpformData.heightFt} id='mobileHeightFt' name='mobileHeightFt' onChange={handleChange}/>
                  <span id='mobileFootHolder'>Ft</span>
                </div>
                <div id="mobileInchesContainer">
                  <input type="number" value={ImpformData.heightIn} id='mobileHeightIn' name='mobileHeightIn' onChange={handleChange}/>
                  <span id="mobileInchesHolder">In</span>
                </div>
              </div>
              <div id="heightContainer">
                <div id="ftContainer">
                  <input
                    type="number"
                    value={ImpformData.heightFt}
                    id='heightFt'
                    name='heightFt'
                    onChange={handleChange}
                  />
                  <span id='footHolder'>Ft</span>
                </div>
                <div id="inContainer">
                  <input
                    type="number"
                    value={ImpformData.heightIn}
                    id='heightIn'
                    name='heightIn'
                    onChange={handleChange}
                  />
                  <span id="inchesHolder">In</span>
                </div>
              </div>
              <p id="cWeightHeading">Current Weight</p>
              <div id="cWeight">
                <input
                  type="number"
                  value={ImpformData.weight}
                  id='currentWeight'
                  name='weight'
                  onChange={handleChange}
                />
                <span id="cWlbs">lbs</span>
              </div>
              <p id="impAge">Age</p>
              <div id="impAgeContainer">
                <input
                  type="number"
                  value={ImpformData.age}
                  id="impAgeNum"
                  name='age'
                  onChange={handleChange}
                />
                <span id="ageNum">Yrs</span>
              </div>
            </ul>
            <div id="impformsubmit">
              <input type="submit" id='impFormSubmit' />
            </div>
          </form>
          {ImpBmrValue && (
            <div id='bmrFinalDisplay'>
              <h3 id='bmrFinal'>Your BMR: {ImpBmrValue.toFixed(0)} Calories/day</h3>
            </div>
          )}
        </div>
      )}
      {system === 'metric' && (
        <div id='metricBody'>
          <form onSubmit={handleSubmitMet}>
            <ul id="metUl">
                <div id="metGenderContainer">
                    <div id="maleContainer" className='genderContainer'>
                        <input
                        type="radio"
                        name='gender'
                        value='male'
                        checked={MetformData.gender === 'male'}
                        onChange={handleChange}
                        /> Male
                    </div>
                    <div id="femaleContainer" className='genderContainer'>
                        <input
                        type="radio"
                        name='gender'
                        value='female'
                        checked={MetformData.gender === 'female'}
                        onChange={handleChange}
                        /> Female
                    </div>
                </div>
                <p id="metHeightHeading" className='metHeading'>Height</p>
                <div id="metHeight" className='metContainer'>
                    <input type="text" value={MetformData.height} id='metHeightValue' className='metValue' onChange={handleSubmitMet}/>
                    <span id='metHeightText' className="metText">cm</span>
                </div>
                <p id="metWeightHeading" className='metHeading'>Current Weight</p>
                <div id="metWeight" className='metContainer'>
                    <input type="text" value={MetformData.weight} id='metWeightValue' className='metValue' onChange={handleSubmitMet}/>
                    <span id="metWeightText" className="metText">kg</span>
                </div>
                <p id="metAgeHeading" className='metHeading'>Age</p>
                <div id="metAge" className='metContainer'>
                    <input type="text" value={MetformData.age} id='metAgeValue' className='metValue' onChange={handleChange}/>
                    <span id="metAgeText" className="metText">Yrs</span>
                </div>
              </ul>
            <div id="metFormSubmit">
              <input type="submit" id='metFormSubmit'/>
            </div>
          </form>
          {MetBmrValue && (
            <div id='bmrFinalDisplay'>
              <h3 id='bmrFinal'>Your BMR: {MetBmrValue.toFixed(0)} Calories/day</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
