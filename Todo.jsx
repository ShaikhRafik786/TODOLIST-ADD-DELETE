import React, { useState } from "react";

export const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleClick = () => {
    setData([...data, text]);
    console.log(data)
  };

  const delet = (item) => {
    const fitered = data.filter((e) => e !== item);
    setData([...fitered]);
  };
  return (
    <div color="blue">
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={(e) => handleClick(e.target.value)}>add</button>
      {data.map((item) => {
        return (
          <div>
            <p>{item}</p>
            <button onClick={delet}>delet</button>
          </div>
        );
      })}
    </div>
  );
};
