// Import React and Hooks
import { React } from 'react';
// Import Styled components
import styled from 'styled-components';
// Import Context
import { useStateVote } from '../../context/voteContext';

const TotalContainer = styled.div`
  display: flex;
  margin: 20px auto;
  background-color: #333;
  color: #fefefe;
  font-family: Verdana, sans-serif;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function TotalVotes() {
  const { candidates } = useStateVote();

  const totalVotes = candidates.map((e) => e.votes).reduce((a, b) => a + b);

  return <TotalContainer>{`Total Votes : ${totalVotes}`}</TotalContainer>;
}

export default TotalVotes;
