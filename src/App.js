import React, { useState } from 'react';
import './App.css';
import AddBurger from './components/AddBurger';
import ShowToEat from './components/ShowToEat';
import ShowEaten from './components/Eaten';

 const initialBurgers =['cheese','bacon','chili'];

export default function App() {
  const [burgersToEat, setBurgersToEat] = useState(initialBurgers);
  const addNewburger = (newBurger) => setBurgersToEat([...burgersToEat, newBurger]);

  return(
    <div className="App">
        <main>
        <h1>Make Burger</h1>
        <p>Made Burgers, Eaten Burgers</p>
        </main>

        <AddBurger add={addNewburger}/>
        <ShowToEat eat={burgersToEat} />
        <h2 className="title">Burger Eaten</h2>
        <ShowEaten poo={burgersToEat}/>
      </div>
  );
}

// const App = () => {
//   const [burger, setBurger] = useState("");
//   const handleChangeToBurger = (inputValue) => useBurger([...burger, inputValue]);

// }

//   render(){
//     return (
      
//     );

//   }
// }

