import React, { useState, useEffect } from 'react'
import Codeforces from '../ScrapedData/Codeforces';
import Github from '../ScrapedData/Github';
import Leetcode from '../ScrapedData/Leetcode';

const UserProfile = () => {
     const [user, setUser] = useState("");
     const [cf, setCf] = useState("");
     const [avatar, setAvatar] = useState("");

     useEffect(() => {
       fetch(`https://api.github.com/users/${user}`)
         .then((res) => res.json())
         .then((data) => (console.log(data), setAvatar(data.avatar_url)));
     }, []);

     useEffect(() => {
       fetch(`https://codeforces.com/api/user.info?handles=DmitriyH`)
         .then((res) => res.json())
         .then((data) => console.log(data));
     }, []);

    return (
      <div>
        <button onClick={() => setUser("s166harth")}>hello app</button>
        <button onClick={() => setCf("DmitriyH")}>cf</button>
        <div className="bg-yellow-500">
          <Github />
        </div>
        <div className="bg-green-500">
          <Codeforces />
        </div>
        <div className="bg-red-500">
          <Leetcode />
        </div>
      </div>
    );
}

export default UserProfile
