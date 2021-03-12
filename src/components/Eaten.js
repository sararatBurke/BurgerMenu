import React from 'react';

export default function Eaten(props) {

    return props.poo.map((eatBurger) => (
        <div>
            <ul style={style.list}>
                {eatBurger}
                <button 
                onClick={() => alert(eatBurger)}
                style={style.button} >
                    Poop it
                </button>
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