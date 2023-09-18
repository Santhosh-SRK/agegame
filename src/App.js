
import './App.css';
import {useState} from "react";
function App() {
  const [text,setText]=useState("");
  const[age,setAge]= useState("");
  const[cache,setCache]=useState("")
   const handlesubmit=async()=>{
    try{
      if(cache.hasOwnProperty(text)){
        setAge(cache[text]);
        console.log("cache")
      }else{
        console.log("Api")
     const response= await fetch(`https://api.agify.io/?name=${text}`)
     const value=await response.json()
     setCache({...App.cache,[text]: value.age})
     console.log(value)
     setAge(value.age)
      }
    }catch{
      console.log("api error")
    }
  }
  return (
    <>
    <div className="page-container flex">
      <div className="card flex">
        <div className="form flex">
          <input placeholder='Enter a Name' value={text} onChange={(event)=>setText(event.target.value)}/>
          <button onClick={handlesubmit }>Sumbit</button>
        </div>
        <h1>{age ??"Not-Valid"}</h1>
      </div>
    </div>
    </>
  );
}

export default App;
