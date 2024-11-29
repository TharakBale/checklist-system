const express = require('express');
const path = require('path');
const { fetchApplicationData } = require('./apiClient');
const { evaluateChecklist } = require('./checklist');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, '../public')));

app.get('/checklist/:applicationId', async (request, response) => {
  const { applicationId } = request.params;
  try {

    const applicationData = await fetchApplicationData(applicationId);
    
    const results = evaluateChecklist(applicationData);
    

    response.json(results);
  } catch (error) {
    response.status(500).json({ error: 'Failed to process the checklist' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
