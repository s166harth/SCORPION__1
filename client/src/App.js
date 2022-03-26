
import './App.css';
import Navbar from './Navbar.js'
import { useEffect, useState } from "react";
function App() {
  const [user,setUser] = useState("");
  const [cf,setCf] = useState("");
  useEffect(()=>{

    fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => res.json())
    .then(data=>(
      console.log(data)
    ))

  },[])

  useEffect(()=>{

    fetch(`https://codeforces.com/api/user.info?handles=${cf}`)
    .then(res => res.json())
    .then(data=>(
      console.log(data)
    ))

  },[])
  




    




  return (
    
  <div>
    <Navbar />
 hello
 <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
 <button onClick={()=>setUser("s166harth") }>hello app</button>

<button onClick={()=>setCf("DmitriyH")}>cf</button>
</div>
	


  );
  }


export default App;
