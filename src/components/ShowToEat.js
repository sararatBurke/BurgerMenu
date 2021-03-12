import React from 'react';

// const EatingBurger = (props) => {
//     const burgers = ['Cheese burger', 'Fired chicken burger'];
//     const eating = burgers.map((burger) =>
//     <li> {burger}</li>
//     );

export default function ShowToEat(props){
    
    return props.eat.map((eatingBurger) => (
        <div>
            <ul style={style.list}>
              {eatingBurger}
              <button 
                onClick={()=>{
                  props.onClick(eatingBurger)
                }}     
                style={style.button}>
                Eat it</button>
            </ul>
        </div>

    ));

    
} 
const style = {
    list: {
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
      borderRadius:'5px'
    }
}
