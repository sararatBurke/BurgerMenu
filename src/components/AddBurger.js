import React from 'react';

//const burgers = ['Ultimate Burger'];

export default function AddBurger() {  
    //const [addBurgers, setAddBurgers] = useState();
    
    return (
      <div>
        <h2 className="title">Burger Made</h2>
            <label style={style.addB}>New Burger: </label>
            <input
            type="text"
            name="text"
            id="text"
            placeholder="Make a new burger"
            />

          <button style={style.addButton}>Make it!</button>
        {/* {addBurgers.map(()=>(
          <button onClick={() => setAddBurgers()}>
              Make it!
          </button>
        ))} */}
        <br />       
              
      </div>
    );
  }

  const style = {
    addB: {
      color: '#fff',
      fontSize: '1.1em',
      fontWeight: 'bold'
    },
    addButton: {
      padding: '5px 10px ',
      fontSize: '1em',
      background: 'rgb(230, 225, 20)',
      border: 'solid',
      borderRadius:'5px'
    }
  }
  
