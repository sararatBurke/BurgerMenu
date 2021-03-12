import React from 'react';
import firebase from './components/firebase';

export default function AddBurger(props) {  

    return (
      <div>
        <h2 className="title">Burger Made</h2>
            <label style={style.label}>New Burger: </label>
            <input 
              onChange={props.newBurger}
              type="text"
              name="text"
              id="newburger"
              placeholder="Make a new burger"
            />
          <button 
            onClick={()=>{
              const newBurgerValue = document.getElementById("newburger").value;
              const date = firebase
              .firestore()
              .collection("addburger")
              .doc().id;
              props.add(newBurgerValue)
            }}
              style={style.addButton}>
              Make it!
          </button>
        <br />       
              
      </div>
    );
  }

  const style = {
    label: {
      color: '#fff',
      fontSize: '1.1em',
      fontWeight: 'bold',
      textShadow: '1px 1px 4px #000'
    },
    addButton: {
      padding: '5px 10px ',
      fontSize: '1em',
      background: 'rgb(230, 225, 20)',
      border: 'solid',
      borderRadius:'5px'
    }
  }
  
