import React from "react";

import { useQuery, gql } from "@apollo/client";

const querylc = gql`
  query {
    matchedUser(username: "siddharthsagar2019") {
      username
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;
const Leetcode = () => {
  const { data, loading, error } = useQuery(querylc);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  } else
    return (
      <div>
        Leetcode
        <p>{data.acSubmissionNum[0].count}</p>
      </div>
    );
};

export default Leetcode;
