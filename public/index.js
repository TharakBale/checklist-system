const tableBody = document.getElementById('results');
async function loadChecklist() {
    const applicationId = "67339ae56d5231c1a2c63639"
    const response = await fetch(`/checklist/${applicationId}`);
    const results = await response.json();
    
    
    results.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.passed ? '✅ Passed' : '❌ Failed'}</td>
      `;
      tableBody.appendChild(row);
    });   
}
loadChecklist();

