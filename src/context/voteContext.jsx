import { createContext, useContext, useState } from 'react';

// Context
const VoteContext = createContext();

// Provider
export const VoteProvider = function VoteProvider({ children }) {
  // States
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

  const [type, setType] = useState(false);

  // Send States
  return (
    <VoteContext.Provider
      // eslint-disable-next-line
      value={{
        // States
        candidates,
        type,

        // Functions
        setCandidates,
        setType,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};

// Export Context
export const useStateVote = () => {
  // eslint-disable-next-line
  const context = new useContext(VoteContext);

  if (context === undefined) {
    throw new Error('useStateVote must be used within a VoteProvider');
  }

  return context;
};
