import React from 'react';


// const burgers = ['Cheese burger', 'Fired chicken burger'];
// const eating = burgers.map((burger) =>
// <li> {burger}</li>
// );

export default function ShowEaten(props) {

    return props.burger.map((poopBurger) => (
        <div>
            <ul>
                {poopBurger}
                <button>Poop it</button>
            </ul>     
        </div>
    )); 
}

/* <ul>{makeBurger.menu} 
    <button>Poop it!</button>
</ul> */