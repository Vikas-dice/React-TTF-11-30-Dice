import React, { useContext } from "react";
import { MyContext } from "./MyContext";
const MyComponent2 = () => {
  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      {/* <h1>{count}</h1> */}
      <button onClick={() => setCount((pre) => pre + 1)}>inc</button>
    </div>
  );
};

export default MyComponent2;
