import '../src/css/excercise.css';
import { useState, useEffect } from 'react';

export default function Excercise() {
  const [exerciseTitle, setExerciseTitle] = useState('Pushup');
  const [exercise, setExercise] = useState('pushup');
  const [exercises, setExercises] = useState('pushups');
  const [weight, setWeight] = useState('');
  const [calories, setCalories] = useState('');
  const [reps, setReps] = useState('');

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  useEffect(() => {
    setExerciseTitle(capitalizeFirstLetter(exercise));
  }, [exercise]);

  const setExerciseFunction = (e) => {
    const selectedExercise = e.target.value;
    setExercise(selectedExercise);
    setExercisesFunction(selectedExercise);
  };

  const setExercisesFunction = (exercise) => {
    const exercisesFunc = `${exercise}s`;
    setExercises(exercisesFunc);
  };

  const setExerciseWeightFunction = (e) => {
    setWeight(e.target.value);
  };

  const setExercisePushupFunction = (e) => {
    setReps(e.target.value);
  };

  const setExerciseCaloriesFunction = (e) => {
    e.preventDefault();
    if (exercise === 'pushup') {
      if (weight && reps) {
        const calorie = ((0.29 + (weight / 150) * 0.10) * reps).toFixed(2);
        setCalories(calorie);
      }
      else {
        setCalories('Please enter both weight and number of reps.');
      }
    }
    if (exercise === 'situp') {
      if (weight && reps) {
        const calorie = ((0.29 + (weight / 150) * 0.15) * reps).toFixed(2);
        setCalories(calorie);
      }
      else {
        setCalories('Please enter both weight and number of reps.');
      }
    }
    if (exercise === 'squat') {
      if (weight && reps) {
        const calorie = ((reps * .4 * weight) / 150) * (1).toFixed(2);
        setCalories(calorie)
      }
      else {
        setCalories('Please enter both weight and number of reps.')
      }
    }
  };

  return (
    <div id='excerciseContainer'>
      <h1 id="exerciseTitle">{exerciseTitle} Calculator</h1>
      <form onSubmit={setExerciseCaloriesFunction}>
        <div id="exerciseSelector">
          <h4 id='exerciseSelectorTitle'>Select an exercise :</h4>
          <select value={exercise} onChange={setExerciseFunction}>
            <option value="pushup">Push Up</option>
            <option value="situp">Sit Up</option>
            <option value="squat">Squat</option>
          </select>
        </div>
        <br />
        <div id="exerciseSelector">
          <h4 id="exerciseSelectorTitle" className='exerciseInput'>Enter the number of {exercises} :&nbsp;</h4>
          <input type="text" className='exerciseInput' value={reps} onChange={setExercisePushupFunction}/>
        </div>
        <br />
        <div id="exerciseWeight">
          <h4 id="exerciseWeightTitle" className='exerciseInput'>Enter your weight in pounds : &nbsp;</h4>
          <input type="text" className='exerciseInput' value={weight} onChange={setExerciseWeightFunction}/>
        </div>
        <br />
        <div id="exerciseSubmitContainer">
          <input type="submit" value="Calculate Calories Burned" id='exerciseSubmit'/>
          <br />
          Total Calories Burned :&nbsp;{calories}
        </div>
        <br />
      </form>
    </div>
  );
}
