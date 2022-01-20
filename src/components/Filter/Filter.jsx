// Import React and Hooks
import { React, useRef } from 'react';
// Import Styled components
import styled from 'styled-components';
// Import Context
import { useStateVote } from '../../context/voteContext';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  width: 300px;
  margin: 20px 0px;
  color: #fefefe;
  font-family: Verdana, sans-serif;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  justify-content: center;
`;

const Number = styled.div`
  text-align: start;
  padding: 12px;
  font-weight: normal;
`;

const Percentage = styled.div`
  text-align: start;
  font-weight: normal;
  padding-bottom: 20px;
  padding-left: 12px;
`;

const NameList = styled.span`
  font-size: 1.2rem;
  text-align: start;
  font-weight: normal;
  padding: 12px;
`;

const Check = styled.input`
  margin-right: 20px;
`;

function Filtering() {
  const { candidates, setCandidates, type, setType } = useStateVote();

  const numberCheck = useRef(null);
  const perCheck = useRef(null);

  const checkingNumber = () => {
    setType(false);
    perCheck.current.checked = false;
  };

  const checkingPercentage = () => {
    setType(true);
    numberCheck.current.checked = false;
  };

  const changeShow = (id) => {
    const items = [...candidates];
    const item = { ...items[id - 1] };
    item.show = !item.show;
    items[id - 1] = item;
    setCandidates(items);
  };

  return (
    <FilterContainer>
      Show by
      <Number>
        <Check
          type="checkbox"
          ref={numberCheck}
          onClick={checkingNumber}
          checked={!type}
        />
        Number
      </Number>
      <Percentage>
        <Check
          type="checkbox"
          ref={perCheck}
          onClick={checkingPercentage}
          checked={type}
        />
        Percentage(%)
      </Percentage>
      Show:
      {candidates.map((e) => (
        <NameList>
          <Check
            type="checkbox"
            onClick={() => changeShow(e.id)}
            checked={e.show}
          />
          {e.name}
        </NameList>
      ))}
    </FilterContainer>
  );
}

export default Filtering;
