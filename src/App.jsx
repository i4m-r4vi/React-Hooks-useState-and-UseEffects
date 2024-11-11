import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  const Datas={
    id:list.length+1,
    title:data
  }
  const handler = () => {
    if(Datas.title===""){
      alert("Enter Some Data")
      
    }else{
      setList([...list,Datas]);
      setData("");
    }

  };

  const DelHandle=(id)=>{
      const filterArr=list.filter((arr)=>arr.id!==id);
      setList(filterArr);
  }
  

  const ArrayData = list.map((val) => {
    return (
      <div key={val.id}>
        <h2 >{val.title}</h2>
        <button onClick={()=>{DelHandle(val.id)}}>X</button>
      </div>
    );
  });
  

  return (
    <>
    <h2>UseState</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handler}>
          Click Me
        </button>
      </form>
      <div>{ArrayData}</div>
    </>
  );
};


export default App;

