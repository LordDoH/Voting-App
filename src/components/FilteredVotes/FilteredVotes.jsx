// Import React and Hooks
import { React } from 'react';
// Import Styled components
import styled from 'styled-components';
// Import Context
import { useStateVote } from '../../context/voteContext';

const FilteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  width: 600px;
  margin: 20px auto;
  color: #fefefe;
  font-family: Verdana, sans-serif;
  padding: 20px 0;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const FilterData = styled.span`
  font-size: 1.3rem;
  margin: 5px auto;
`;

function FilteredVotes() {
  // eslint-disable-next-line
  const { candidates, type} = useStateVote();

  const totalVotes = candidates.map((e) => e.votes).reduce((a, b) => a + b);

  return (
    <FilteredContainer>
      {!type
        ? candidates.map((e) =>
            e.show ? <FilterData>{`${e.name} : ${e.votes}`}</FilterData> : null
          )
        : candidates.map((e) =>
            e.show ? (
              <FilterData>{`${e.name} : ${(
                (e.votes / (totalVotes || 1)) *
                100
              ).toFixed(2)} %`}</FilterData>
            ) : null
          )}
    </FilteredContainer>
  );
}

export default FilteredVotes;
