import React from "react";
import { useState, useEffect } from "react";
import CommitListComponent from "./Commithistory";

const Github = () => {
  const [repo1, setRepo1] = useState([]);
  const [nrepo, setNrepo] = useState("0");
  const [repo2, setRepo2] = useState([]);
  const [repo3, setRepo3] = useState([]);
  const [srepo, setSrepo] = useState("0");
  const [followers, setFollowers] = useState("");
  const [company, setCompany] = useState("none");
  const [lastupdate, setLastupdate] = useState("");
  const [tuser, setTuser] = useState("");
  const [subs, setSubs] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/s166harth/repos`)
      .then((res) => res.json())
      .then(
        (data) => (
          setNrepo(data.length),
          setRepo1(data[0]),
          setRepo2(data[1]),
          setRepo3(data[2])
        )
      );
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/s166harth/followers`)
      .then((res) => res.json())
      .then((data) => setFollowers(data.length));
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/s166harth/starred`)
      .then((res) => res.json())
      .then((data) => setSrepo(data.length));
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/s166harth`)
      .then((res) => res.json())
      .then(
        (data) => (
          setCompany(data.company),
          setLastupdate(data.updated_at),
          setTuser(data.twitter_username)
        )
      );
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/s166harth/subscriptions`)
      .then((res) => res.json())
      .then((data) => setSubs(data.length));
  }, []);

  return (
    <>
      <p>{repo1.name}</p>
      <p>{repo1.description}</p>
      <a href="{repo1.svn_url}">source</a>
      <p>{repo2.name}</p>
      <p>{repo2.description}</p>
      <a href="{repo2.svn_url}">source</a>
      <p>{repo3.name}</p>
      <p>{repo3.description}</p>
      <a href="{repo3.svn_url}">source</a>

      <p>followers = {followers}</p>
      <p>number of repos={nrepo}</p>
      <p>starred repos={srepo}</p>
      <p>company={company}</p>
      <p>last update={lastupdate}</p>
      <p>twitter={tuser}</p>
      <p>number of subs={subs}</p>
      {/* <CommitListComponent/>  this is not working check it*/}
    </>
  );
};

export default Github;
