import React from 'react';
import VotePlat from './components/VotePlat';
// Import context
import { VoteProvider } from './context/voteContext';

function App() {
  return (
    <VoteProvider>
      <VotePlat />
    </VoteProvider>
  );
}

export default App;
