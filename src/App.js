import React, { useState } from 'react';
import './App.css';
import AddBurger from './components/AddBurger';
import ShowToEat from './components/ShowToEat';
import Eaten from './components/Eaten';
import firebase from './components/firebase';



export default function App() {
  const [burgersToEat, setBurgersToEat] = useState([]);
  const dt = firebase
              .firestore()
              .collection("addburger")
              .doc().id;
  const addNewburger = (newBurger) => {
    if(newBurger.length > 0){
    setBurgersToEat([...burgersToEat, newBurger]);}
  };
  const [burgersEaten, setBurgerEaten] = useState([]);
  const addEatenBurger = (eaten) => setBurgerEaten([...burgersEaten, eaten]);
  
  const deleteNewBurger = (item) =>{
    const eating = burgersToEat.indexOf(item);
    if(eating > -1){
      setBurgersToEat(burgersToEat.filter((b, i) => i !== eating));
    }
  };

  const deleteEatenBurger = (eatenItem) =>{
    const poop = burgersEaten.indexOf(eatenItem);
    if(poop > -1){
      setBurgerEaten(burgersEaten.filter((a, i) => i !== poop));
    };

  };

  
  return(
    <div className="App">
        <main>
        <h1>Make Burger</h1>
        <p>Made Burgers, Eaten Burgers</p>
        </main>

        <AddBurger add={addNewburger}/>
        <ShowToEat eat={burgersToEat} addEatenBurger={addEatenBurger} delete={deleteNewBurger} />
        <h2 className="title">Burger Eaten</h2>
        <Eaten poo={burgersEaten} deleteEatenB={deleteEatenBurger}/>
      </div>
  );
}