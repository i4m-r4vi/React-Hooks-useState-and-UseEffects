import React, { useEffect, useState } from 'react'

const Effects = () => {
  const [Data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  const [Error,setError]=useState(false)

  useEffect(()=>{
    async function getData(){
      try{
        setLoading(true)
        await fetch('https://jsonplaceholder.typicode.com/users/')
        .then((res)=>res.json())
        .then((data)=>setData(data))
      }
      catch(e){
        setError(true)
      }
      finally{                                                
        setLoading(false)
      }     
    }
    getData()
  },[])
  if(loading){
    return (<p>loading....</p>)
  }
  if(Error){
    return (<p>Error On Getting Data</p>)
  }

  return (
    <>  
    <h2>UseEffects Hooks</h2>
      {Data.map((arr)=>{
        return (
          <div>
            <p>Name:{arr.name}</p>
            <p>Email:{arr.email}</p>
            <p>Phone:{arr.phone}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default Effects