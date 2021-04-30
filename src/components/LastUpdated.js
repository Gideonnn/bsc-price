export default function LastUpdated({ updatedAt }) {
  return <span>Last updated: {new Date(updatedAt).toLocaleString()}</span>;
}
