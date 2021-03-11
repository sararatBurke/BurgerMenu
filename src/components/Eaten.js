import React from 'react';


// const burgers = ['Cheese burger', 'Fired chicken burger'];
// const eating = burgers.map((burger) =>
// <li> {burger}</li>
// );

export default function ShowEaten(props) {

    return props.burger.map((poopBurger) => (
        <div>
            <ul style={style.list}>
                {poopBurger} 
                <button style={style.addButton}>Poop it</button>
            </ul>     
        </div>
    )); 
}

const style = {
    list:{
      fontSize: '1.2em',
      color:'#fff'

    },
    addButton: {
      padding: '5px 10px ',
      fontSize: '1em',
      background: 'rgb(230, 225, 20)',
      border: 'solid',
      borderRadius:'5px',
      fload: 'right'
    }
}