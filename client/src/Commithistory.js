import { Octokit } from "@octokit/core";

import { useState,useEffect} from 'react';
const CommitListComponent = ()=> {

  const [commits, setCommits] = useState([]);

  const octokit = new Octokit({ auth: 'your-token!' });



  useEffect(() => {

    const owner = 's166harth',

                 repo = 'sid-share',

           perPage = 5;


    const fiveMostRecentCommits = octokit.request(

        `GET /repos/{owner}/{repo}/commits`, { owner, repo, per_page: perPage }

    );


    setCommits(fiveMostRecentCommits);

  }, [])


    return (

      <ul>

        {commits.map(commit => (

          <li key={commit.id}>

            {commit.author.name}: {commit.message}

          </li>

        ))}

      </ul>

    );

}
export default CommitListComponent