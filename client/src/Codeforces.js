
import { useState,useEffect } from 'react';
const Codeforces = () => {
const[url,setUrl]=useState("");
const[subs,setSubs]=useState("");
const[rating,setRating]=useState("");
const[cno,setCno]=useState("");
const[rank,setRank]=useState("");
const[nblogs,setNblogs]=useState("");
    useEffect(()=>{

        fetch(`https://codeforces.com/api/user.status?handle=Fefer_Ivan`)
        .then(res => res.json())
        .then(data=>(
          
          setSubs(data.result.length)
          
          ))
    
      },[])
      useEffect(()=>{

        fetch(`https://codeforces.com/api/user.rating?handle=Fefer_Ivan`)
        .then(res => res.json())
        .then(data=>(
          setCno(data.result.length),
          setRating(data.result[cno-1].newRating)
          
          
          ))
    
      },[])


      useEffect(()=>{

        fetch(`https://codeforces.com/api/user.info?handles=DmitriyH`)
        .then(res => res.json())
        .then(data=>(
          
          setRank(data.result.rank)
          
          
          ))
    
      },[])

      useEffect(()=>{

        fetch(`https://codeforces.com/api/user.blogEntries?handle=Fefer_Ivan`)
        .then(res => res.json())
        .then(data=>(
          
          setNblogs(data.result.length)
          
          
          ))
    
      },[])

  return (


    <div>
        <p>submissions={subs}</p>
        <p>no. of competitions={cno}</p>
        <p>rating={rating}</p>
        <p>rank={rank}</p>
        <p>blogs={nblogs}</p>
    </div>
  )
}

export default Codeforces