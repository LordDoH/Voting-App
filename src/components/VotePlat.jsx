// Import React and Hooks
import { React } from 'react';
// Import Styled components
import styled from 'styled-components';
// Import Components
import CandidateCard from './CandidateCard/CandidateCard';
import Filtering from './Filter/Filter';
import TotalVotes from './TotalVotes/TotalVotes';
import FilteredVotes from './FilteredVotes/FilteredVotes';

const DataContainer = styled.div`
  display: flex;
  width: 73%;
  justify-content: space-between;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://images8.alphacoders.com/106/thumb-1920-1065817.jpg');
  background-size: cover;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function VotePlat() {
  return (
    <MainContainer>
      <CandidateCard />
      <DataContainer>
        <Filtering />
        <ResultsContainer>
          <TotalVotes />
          <FilteredVotes />
        </ResultsContainer>
      </DataContainer>
    </MainContainer>
  );
}

export default VotePlat;
