import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Effects = () => {
  const [Data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  const [Error,setError]=useState(false)

  useEffect(()=>{
    async function getData(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        setData(response.data);
      }
      catch(e){
        setError(true)
      }
      finally{                                                
        setLoading(false)
      }     
    }
    return getData
  },[])
  if(loading){
    return (<p>loading....</p>)
  }
  if(Error){
    return (<p>Error On Getting Data</p>)
  }

  return (
    <>  
    <h2>Use Effects</h2>
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