function TokenTableHead() {
  return (
    <thead>
      <tr>
        <th>Favorite</th>
        <th>Symbol</th>
        <th>Name</th>
        <th>Price ($)</th>
        <th>Price (€)</th>
        <th>Poocoin</th>
        <th>Pancakeswap</th>
      </tr>
    </thead>
  );
}

function ChartLink({ address }) {
  return (
    <a href={`https://poocoin.app/tokens/${address}`} target="_blank" rel="noreferrer noopener">
      Chart
    </a>
  );
}

function PancakeswapLink({ address, version }) {
  const origin =
    version === 1
      ? 'https://v1exchange.pancakeswap.finance'
      : 'https://exchange.pancakeswap.finance';
  const link = `${origin}/#/swap?outputCurrency=${address}&inputCurrency=BNB`;

  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      V{version}
    </a>
  );
}

function TokenTableRow({ token, onToggleFavorite }) {
  return (
    <tbody>
      <tr key={token.address}>
        <td>
          <input type="checkbox" onChange={() => onToggleFavorite(token.address)} />
        </td>
        <td>{token.symbol}</td>
        <td>{token.name}</td>
        <td>$ {Number(token.price).toFixed(8)}</td>
        <td>€ {(token.price * 0.83).toFixed(8)}</td>
        <td>
          <ChartLink address={token.address} />
        </td>
        <td>
          <PancakeswapLink address={token.address} version={1} />
          &nbsp;-&nbsp;
          <PancakeswapLink address={token.address} version={2} />
        </td>
      </tr>
    </tbody>
  );
}

export default function TokenTable({ tokens = [], onToggleFavorite }) {
  return (
    <table>
      <TokenTableHead />
      {tokens.map(token => (
        <TokenTableRow key={token.address} token={token} onToggleFavorite={onToggleFavorite} />
      ))}
    </table>
  );
}
