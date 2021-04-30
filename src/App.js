import { useState, useEffect } from 'react';
import TokenTable from './components/TokenTable';
import LastUpdated from './components/LastUpdated';
import TokenSearch from './components/TokenSearch';
import { getTokens } from './services/pancakeswap';
import { fuzzySort } from './services/search';
import './App.css';

function App() {
  const [tokens, setTokens] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { updatedAt, tokens } = await getTokens();
    setTokens(tokens);
    setLastUpdate(updatedAt);
  }

  function handleOnSearchChange(search) {
    if (!search) {
      return;
    }

    if (search.startsWith('0x')) {
      setTokens(tokens[search] || []);
    }

    setTokens(fuzzySort(search, tokens));
  }

  function handleToggleFavorite(address) {
    console.log(address);
  }

  return (
    <div className="container">
      <div className="row">
        <LastUpdated updatedAt={lastUpdate} />
        <TokenSearch placeholder="Search" onChange={handleOnSearchChange} />
        <TokenTable tokens={tokens} onToggleFavorite={handleToggleFavorite} />
      </div>
    </div>
  );
}

export default App;
