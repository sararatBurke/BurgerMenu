import React from 'react';

//const burgers = ['Ultimate Burger'];

export default function AddBurger() {  
    //const [addBurgers, setAddBurgers] = useState();
    
    return (
      <div>
        <h2 className="title">Burger Made</h2>
            <label>New Burger: </label>
            <input
            type="text"
            name="text"
            id="text"
            placeholder="Make a new burger"
            />

          <button >Make it!</button>
        {/* {addBurgers.map(()=>(
          <button onClick={() => setAddBurgers()}>
              Make it!
          </button>
        ))} */}
        <br />       
              
      </div>
    );
  }
