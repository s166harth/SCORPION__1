
import './App.css';
import Navbar from './Navbar.js'
import { useEffect, useState } from "react";
import Github from './Github';
import Codeforces from './Codeforces';
import { client } from "./apollo";

import { ApolloProvider } from '@apollo/client';
import Leetcode from './Leetcode';



function App() {
  const [user,setUser] = useState("");
  const [cf,setCf] = useState("");
  const[avatar,setAvatar]=useState("");
  
  useEffect(()=>{

    fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(data=>(
      console.log(data),
      setAvatar(data.avatar_url)
    ))

  },[])
  
 

  useEffect(()=>{

    fetch(`https://codeforces.com/api/user.info?handles=DmitriyH`)
    .then(res => res.json())
    .then(data=>(
      console.log(data)
    ))

  },[])
  




    




  return (
    <ApolloProvider client={client}>
    
  <div>
    
 hello
 <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Navbar/>
 <button onClick={()=>setUser("s166harth") }>hello app</button>

<button onClick={()=>setCf("DmitriyH")}>cf</button>
<div className="bg-yellow-500">
<Github />
</div>
<div className='bg-green-500'>
  <Codeforces />
</div>
<div className='bg-red-500'>
  <Leetcode />
</div>
</div>
	
</ApolloProvider>

  );
  }


export default App;
