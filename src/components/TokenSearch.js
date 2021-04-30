export default function TokenSearch({ placeholder = '', onChange }) {
  return (
    <input type="text" placeholder={placeholder} onChange={event => onChange(event.target.value)} />
  );
}
