// Import React and Hooks
import { React, useState, useRef } from 'react';
// Import Styled components
import styled from 'styled-components';
// Import Components

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

const Temp = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
`;

const Full = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://images8.alphacoders.com/106/thumb-1920-1065817.jpg');
  background-size: cover;
`;

const Title = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  width: 90%;
  margin: 10px auto;
`;

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

const Filter = styled.div`
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

const Container = styled.div`
  display: flex;
  width: 73%;
  justify-content: space-between;
  margin: 0 auto;
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

function VotePlat() {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: 'Albert Einstein',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg',
      votes: 0,
      show: true,
    },
    {
      id: 2,
      name: 'Marie Curie',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/db/Marie_Curie%2C_portrait%2C_1900.jpg',
      votes: 0,
      show: true,
    },
    {
      id: 3,
      name: 'Isaac Newton',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg',
      votes: 0,
      show: true,
    },
    {
      id: 4,
      name: 'Nicola Tesla',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg',
      votes: 0,
      show: true,
    },
  ]);

  const numberCheck = useRef(null);
  const perCheck = useRef(null);

  const [type, setType] = useState(false);

  const checkingNumber = () => {
    setType(false);
    perCheck.current.checked = false;
  };

  const checkingPercentage = () => {
    setType(true);
    numberCheck.current.checked = false;
  };

  const vote = (id) => {
    const items = [...candidates];
    const item = { ...items[id - 1] };
    item.votes += 1;
    items[id - 1] = item;
    setCandidates(items);
  };

  const changeShow = (id) => {
    const items = [...candidates];
    const item = { ...items[id - 1] };
    item.show = !item.show;
    items[id - 1] = item;
    setCandidates(items);
  };

  const totalVotes = candidates.map((e) => e.votes).reduce((a, b) => a + b);

  return (
    <Full>
      <Temp>
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
      </Temp>
      <Container>
        <Filter>
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
        </Filter>
        <div>
          <TotalContainer>{`Total Votes : ${totalVotes}`}</TotalContainer>
          <FilteredContainer>
            {!type
              ? candidates.map((e) =>
                  e.show ? (
                    <FilterData>{`${e.name} : ${e.votes}`}</FilterData>
                  ) : null
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
        </div>
      </Container>
    </Full>
  );
}

export default VotePlat;
