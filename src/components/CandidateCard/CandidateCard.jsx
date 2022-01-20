// Import React and Hooks
import { React } from 'react';
// Import Styled components
import styled from 'styled-components';
// Import Context
import { useStateVote } from '../../context/voteContext';

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fefefe;
  font-family: Verdana, sans-serif;
  text-align: center;
  width: 200px;
  border-radius: 20px;
  margin: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Name = styled.span`
  font-size: 1.3rem;
  width: 90%;
  margin: 0px auto;
`;

const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  object-fit: cover;
  margin: 20px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CandidatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  width: 90%;
  margin: 10px auto;
`;

const Vote = styled.button`
  background-color: #eeeeee;
  border: none;
  font-family: Verdana, sans-serif;
  font-weight: bold;
  text-decoration: none;
  color: #666;
  font-size: 1 rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30%;
  height: 30px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Votes = styled.span`
  font-size: 1rem;
  width: 90%;
  margin: 0px auto;
`;

const VotesContainer = styled.div`
  display: none;
  flex-direction: column;
`;

function CandidateCard() {
  const { candidates, setCandidates } = useStateVote();

  const vote = (id) => {
    const items = [...candidates];
    const item = { ...items[id - 1] };
    item.votes += 1;
    items[id - 1] = item;
    setCandidates(items);
  };

  return (
    <CandidatesContainer>
      {candidates.map((e) => (
        <MainCard>
          <Photo src={e.image} />
          <Name>{e.name}</Name>
          <VotesContainer>
            <Title>Votes</Title>
            <Votes>{e.votes}</Votes>
          </VotesContainer>
          <Vote onClick={() => vote(e.id)}>Vote</Vote>
        </MainCard>
      ))}
    </CandidatesContainer>
  );
}

export default CandidateCard;
