import React from 'react'
import { useState } from 'react';

 function Child(props) {
    // console.log(props);
    console.log("Child");
  return (
    <>
        <div>Child</div>
        {/* <button onClick={()=>{props.increment()}}>increment</button> */}
    </>

  )
}
export default React.memo(Child)

