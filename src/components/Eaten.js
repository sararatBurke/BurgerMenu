import React from 'react';


// const burgers = ['Cheese burger', 'Fired chicken burger'];
// const eating = burgers.map((burger) =>
// <li> {burger}</li>
// );

export default function ShowEaten(props) {

    return props.poo.map((poopBurger) => (
        <div>
            <ul style={style.list}>
                {poopBurger} 
                <button style={style.button}>Poop it</button>
            </ul>     
        </div>
    )); 
}

const style = {
    list:{
      fontSize: '1.4em',
      color:'#fff',
      fontWeight: 'bold',
      textShadow: '1px 1px 4px #000'

    },
    button: {
      padding: '5px',
      fontSize: '0.8em',
      background: 'rgb(230, 225, 20)',
      border: 'solid',
      borderRadius:'5px',
      fload: 'right'
    }
}