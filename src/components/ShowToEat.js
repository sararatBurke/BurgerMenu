import React from 'react';

// const EatingBurger = (props) => {
//     const burgers = ['Cheese burger', 'Fired chicken burger'];
//     const eating = burgers.map((burger) =>
//     <li> {burger}</li>
//     );

export default function ShowToEat(props){
    
    return props.value.map((makeBurger) => (
        <div>
              {makeBurger}
        </div>

    ));

    
} 
