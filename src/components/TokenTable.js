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
        <th>Address</th>
      </tr>
    </thead>
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
        <td>{(token.price * 0.83).toFixed(8)}</td>
        <td>{(token.price * 0.83).toFixed(8)}</td>
        <td>
          <a
            href={`https://poocoin.app/tokens/${token.address}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Chart
          </a>
        </td>
        <td className="justify-content">
          <a
            href={`https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=${token.address}&inputCurrency=BNB`}
            target="_blank"
            rel="noreferrer noopener"
          >
            V1
          </a>
          &nbsp;
          <a
            href={`https://exchange.pancakeswap.finance/#/swap?outputCurrency=${token.address}&inputCurrency=BNB`}
            target="_blank"
            rel="noreferrer noopener"
          >
            V2
          </a>
        </td>
        <td>
          <button>Copy</button>
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
