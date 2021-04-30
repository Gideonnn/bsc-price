function TokenTableHead() {
  return (
    <thead>
      <tr>
        <th>Favorite</th>
        <th>Symbol</th>
        <th>Name</th>
        <th>Price ($)</th>
        <th>Price (€)</th>
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
