import '../src/css/dietCalculator.css';
import { useState } from 'react';

import egg from '../src/assets/egg.webp'
import oats from '../src/assets/oats.webp'
import quest from '../src/assets/quest.webp'
import fairlife from '../src/assets/fairlife.webp'
import bread from '../src/assets/bread.webp'
import cheerio from '../src/assets/cheerios.webp'
import pbutter from '../src/assets/pbutter.webp'
import sem from '../src/assets/sem.jpg'
import bb from '../src/assets/bb.jpg'
import hotcake from '../src/assets/hotcake.jpg'

import lunchableChicken from '../src/assets/lunchableChicken.webp'
import lunchableTurkey from '../src/assets/lunchableTurkey.jpg'
import lunchablePizza from '../src/assets/lunchablePizza.webp'
import lunchableNacho from '../src/assets/lunchableNacho.webp'
import lunchableHam from '../src/assets/lunchableHam.webp'
import TaiPei from '../src/assets/TaiPei.jpg'
import cheddarHotPocket from '../src/assets/cheddarHotPocket.jpg'
import leanChicken from '../src/assets/leanChicken.jpg'
import chunkyChicken from '../src/assets/chunkyChicken.jpg'
import chunkyVegetable from '../src/assets/chunkyVegetable.jpg'
import tacoEnchilada from '../src/assets/tacoEnchilada.jpg'

import cheeseBurgerMac from '../src/assets/cheeseBurgerMac.jpg'
import chickenPatties from '../src/assets/chickenPatties.jpg'
import nuggets from '../src/assets/nuggets.jpg'
import pork from '../src/assets/pork.jpg'
import garlicChicken from '../src/assets/garlicChicken.jpg'
import burrito from '../src/assets/burrito.jpg'
import fettuccini from '../src/assets/fet.jpg'
import rigatoni from '../src/assets/rigatoni.jpg'
import pizza from '../src/assets/pizza.jpg'
import noodles from '../src/assets/noodles.jpg'
import cheeseSteak from '../src/assets/cheeseSteak.jpg'

const breakfast = [
  { name: '2 Large Eggs', calories: 150, grams: 105, image: egg ,id: 1 },
  { name: '1/2 Cup Oatmeal', calories: 150, grams: 45, image: oats  ,id: 2 },
  { name: 'Quest Chocolate Chip Cookie Dough Protein Bar', calories: 190, grams: 60, image : quest,id: 3 },
  { name: 'Fairlife Chocolate Protein Shake', calories: 150, grams:350 , image: fairlife , id: 4 },
  { name: '2 pieces Sara Lee Butter Bread Toasted', calories: 150, grams: 26, image: bread  ,id: 5 },
  { name: 'Honey Nut Cheerios Cereal Cup With 1 Cup Milk', calories: 200, grams: 50, image: cheerio ,id: 6 },
  { name: 'Peanut Butter', calories: 190, grams: 32, image: pbutter ,id: 8 },
  { name: 'McDonald\'s Sausage Egg McMuffin with Cheese', calories: 480, grams: 165, image: sem ,id: 9 },
  { name: 'McDonald\'s Breakfast Burrito', calories: 300, grams: 115, image: bb ,id: 10 },
  { name: 'McDonald\'s Hotcake Order', calories: 580, grams: 150, image: hotcake ,id: 11 }
];

const lunch = [
  { name: 'Lunchables Chicken Dunks Meal Kit', calories: 400, grams: 170, image: lunchableChicken ,id: 1 },
  { name: 'Lunchables Turkey Sub Meal Kit', calories: 450, grams: 160, image: lunchableTurkey ,id: 2 },
  { name: 'Lunchables Pizza Meal Kit', calories: 380, grams: 130, image: lunchablePizza ,id: 3 },
  { name: 'Lunchables Nachos Meal Kit', calories: 450, grams: 140, image:lunchableNacho ,id: 4 },
  { name: 'Lunchables Ham and Swiss Cracker Kit', calories: 250, grams: 90, image: lunchableHam ,id: 5 },
  { name: 'Tai Pei Chicken Fried Rice', calories: 510, grams: 310, image: TaiPei ,id: 6 },
  { name: 'Cheddar Cheese Hot Pocket', calories: 300, grams: 125,image: cheddarHotPocket ,id: 7 },
  { name: 'Lean Cuisine Chicken Alfredo Pasta', calories: 380, grams: 285, image: leanChicken ,id: 8 },
  { name: 'Campbell\'s Chunky Chicken Noodle Soup', calories: 250, grams: 525, image: chunkyChicken ,id: 9 },
  { name: 'Campbell\'s Chunky Old Fashion Vegetable Beef', calories: 220, grams: 535, image: chunkyVegetable ,id: 10 },
  { name: 'Taco Bell Chicken Enchilada Burrito', calories: 400, grams: 200, image: tacoEnchilada ,id: 11 }
];

const dinner = [
  { name: 'Velveeta Ultimate Cheeseburger Macaroni and Cheese Dinner Kit', calories: 220, grams: 70, image: cheeseBurgerMac ,id: 1 },
  { name: 'Tyson Fully Cooked and Breaded Chicken Patties with Pepperidge Farm Sesame Topped Hamburger Buns', calories: 350, grams: 130, image: chickenPatties ,id: 2 },
  { name: 'Tyson Fully Cooked Chicken Nuggets 10 pieces', calories: 550, grams: 180, image: nuggets ,id: 3 },
  { name: 'Jack Daniels Pulled Pork with Pepperidge Farm Sesame Topped Hamburger Buns', calories: 520, grams: 200, image: pork ,id: 4 },
  { name: 'Birds Eye Voila! Garlic Chicken Skillet Dinner', calories: 220, grams: 180, image: garlicChicken ,id: 5 },
  { name: 'El Monterey Beef & Bean Burritos', calories: 310, grams: 115, image: burrito ,id: 6 },
  { name: 'Marie Callender\'s Fettuccini With Chicken & Broccoli', calories: 370, grams: 370, image: fettuccini ,id: 7 },
  { name: 'Lean Cuisine Five Cheese Rigatoni', calories: 260, grams: 285, image: rigatoni ,id: 8 },
  { name: 'Lean Cuisine Cheese Thin Crust Pizza', calories: 370, grams: 170, image: pizza ,id: 9 },
  { name: 'Knorr Pasta Teriyaki Noodles', calories: 520, grams: 130, image: noodles.jpg ,id: 10 },
  { name: 'Velveeta Philly Cheese Steak Pasta Dinner Kit', calories: 370, grams: 70, image: cheeseSteak ,id: 11 }
];

export default function DietCalculator() {
  const [bmr, setBmr] = useState('');
  const [exercise, setExercise] = useState('');
  const [selectedFoods, setSelectedFoods] = useState({});

  const handleBmrChange = (e) => {
    setBmr(e.target.value);
  };

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const makeDiet = (e) => {
    e.preventDefault();

    const randomBreakfast = breakfast[Math.floor(Math.random() * breakfast.length)];
    const randomLunch = lunch[Math.floor(Math.random() * lunch.length)];
    const randomDinner = dinner[Math.floor(Math.random() * dinner.length)];

    setSelectedFoods({
      breakfast: randomBreakfast,
      lunch: randomLunch,
      dinner: randomDinner
    });

    alert("This is a randomly generated diet used for educational purposes. Before starting any new diet seek professional and medical help. Women should at least get 1,200 calories per day and men should at least get 1,500 per day according to most regulated diet standards.")
  };

  return (
    <div id='dietBody'>
      <div id="dietBodyContainer">
        <form onSubmit={makeDiet}>
          <div id="inputBmrExcercise">
            <h3>BMR:</h3>
            <input type="text" placeholder="Enter your BMR" value={bmr} onChange={handleBmrChange} />
            <br />
            <h3>Excercise Calories:</h3>
            <input type="text" placeholder="Enter exercise calories" value={exercise} onChange={handleExerciseChange} />
          </div>
          <br />
          <div id="dietContainer">
            <button type="submit" id='diet'>Generate New Diet</button>
          </div>
        </form>
        {selectedFoods.breakfast && (
          <div>
            <div id="imageContainer">
              <img src={selectedFoods.breakfast.image} alt="" className='Image'/>
              <h3>Breakfast</h3>
            </div>
            <p>{`${selectedFoods.breakfast.name} - ${selectedFoods.breakfast.calories} calories - ${selectedFoods.breakfast.grams} grams`}</p>
          </div>
        )}
        {selectedFoods.lunch && (
          <div>
            <div id="imageContainer">
              <img src={selectedFoods.lunch.image} alt="" className='Image'/>
              <h3>Lunch</h3>
            </div>
            <p>{`${selectedFoods.lunch.name} - ${selectedFoods.lunch.calories} calories - ${selectedFoods.lunch.grams} grams`}</p>
          </div>
        )}
        {selectedFoods.dinner && (
          <div>
            <div id="imageContainer">
              <img src={selectedFoods.dinner.image} alt="" className='Image'/>
              <h3>Dinner</h3>
            </div>
            <p>{`${selectedFoods.dinner.name} - ${selectedFoods.dinner.calories} calories - ${selectedFoods.dinner.grams} grams`}</p>
          </div>
        )}
      </div>
    </div>
  );
}