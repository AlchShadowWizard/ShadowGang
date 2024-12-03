async function getTrendingTokens() {
  const apiUrl = 'https://api.dexscreener.com/token-boosts/latest/v1';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Example: Filter tokens for Solana (if required)
    const trendingSolanaTokens = data.filter((token) => token.chainId === 'solana');

    return trendingSolanaTokens;
  } catch (error) {
    console.error('Error fetching trending tokens:', error);
    return [];
  }
}
