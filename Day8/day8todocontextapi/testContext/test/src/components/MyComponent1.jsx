import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const MyComponent1 = () => {
  const { count } = useContext(MyContext);

  return <div> {count}</div>;
};

export default MyComponent1;
