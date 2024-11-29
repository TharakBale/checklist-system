const fetch = require('node-fetch');

async function fetchApplicationData(applicationId) {
  const url = `http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/${applicationId}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

module.exports = { fetchApplicationData };
