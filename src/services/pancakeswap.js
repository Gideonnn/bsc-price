export async function getTokens() {
  const { data, updated_at } = await fetch('https://api.pancakeswap.info/api/tokens').then(res =>
    res.json(),
  );
  const tokens = Object.keys(data).map(key => {
    return { address: key, ...data[key] };
  });

  return {
    updatedAt: updated_at,
    tokens,
  };
}
