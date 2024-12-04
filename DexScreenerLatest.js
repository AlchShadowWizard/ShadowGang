async function getLatestTokenProfiles() {
  const apiUrl = 'https://api.dexscreener.com/token-profiles/latest/v1';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Filter tokens for Solana if required
    const solanaTokens = data.filter((token) => token.chainId === 'solana');

    return solanaTokens;
  } catch (error) {
    console.error('Error fetching token profiles:', error);
    return [];
  }
}
