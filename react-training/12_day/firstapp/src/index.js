import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box } from './box';
import './index.css'

import { MagicBoxCls, MagicBoxFn  } from './magicbox'

const dv = document.getElementById('root')

const root = ReactDOM.createRoot(dv);
// const color  = 'yellow'

// const dvSt = {
//   boder : '1px solid red',
//   color : 'red'
// }



// const uiAni =  (
//   <div style={dvSt} >
//     <h1>Welcome to react, Good One {color.toUpperCase()}</h1>
//   </div>
// )

/**
 *  - First identify click on button
 *  - change the value of color variable
 *  - assign the style to div with color variable 
 * 
 */

// let col = 'red'
// const onClk = () =>  {
//   col = 'yellow'
//   console.log(col)
// }

// const boxColorUi = <div>
//   <div className='box' style={{backgroundColor : col}}></div>
//   {/* <input type='button' value='Okay' onClick={() => console.log('clicked')}/> */}
//   <input type='button' value='Okay' onClick={onClk}/>
// </div>


root.render(
  <Box/>
);


