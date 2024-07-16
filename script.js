const responseData = [
    {"bankName": "Nigerian Police", "visa": "N/A", "mastercard": "N/A", "verve": "0.00%"},
    {"bankName": "Signature Bank", "visa": "N/A", "mastercard": "N/A", "verve": "100.00%"},
    {"bankName": "Sterling Bank Plc", "visa": "N/A", "mastercard": "N/A", "verve": "100.00%"},
    {"bankName": "Guaranty Trust Bank", "visa": "N/A", "mastercard": "100.00%", "verve": "N/A"},
    {"bankName": "Suntrust Bank", "visa": "N/A", "mastercard": "N/A", "verve": "100.00%"},
    {"bankName": "Providus Bank", "visa": "N/A", "mastercard": "100.00%", "verve": "71.43%"},
    {"bankName": "Unity Bank", "visa": "N/A", "mastercard": "N/A", "verve": "99.15%"},
    {"bankName": "Zenith Bank", "visa": "100.00%", "mastercard": "98.19%", "verve": "98.28%"},
    {"bankName": "Lotus Bank", "visa": "N/A", "mastercard": "N/A", "verve": "100.00%"},
    {"bankName": "Accion Mfb", "visa": "N/A", "mastercard": "N/A", "verve": "88.89%"},
    {"bankName": "Premiumtrust Bank", "visa": "N/A", "mastercard": "N/A", "verve": "100.00%"},
    {"bankName": "Kuda Bank", "visa": "100.00%", "mastercard": "N/A", "verve": "N/A"},
    {"bankName": "Stanbic Ibtc Bank", "visa": "100.00%", "mastercard": "97.22%", "verve": "95.45%"},
    {"bankName": "Polaris Bank", "visa": "97.37%", "mastercard": "N/A", "verve": "100.00%"},
    {"bankName": "Ecobank Nigeria", "visa": "100.00%", "mastercard": "98.25%", "verve": "100.00%"},
    {"bankName": "Globus Bank", "visa": "100.00%", "mastercard": "N/A", "verve": "N/A"},
    {"bankName": "Paycom", "visa": "N/A", "mastercard": "N/A", "verve": "99.07%"},
    {"bankName": "Access Bank", "visa": "100.00%", "mastercard": "99.03%", "verve": "99.39%"},
    {"bankName": "Keystone Bank", "visa": "N/A", "mastercard": "98.65%", "verve": "98.97%"},
    {"bankName": "First Bank Of Nigeria", "visa": "N/A", "mastercard": "98.44%", "verve": "99.21%"},
    {"bankName": "Jaiz Bank", "visa": "N/A", "mastercard": "N/A", "verve": "100.00%"},
    {"bankName": "Sterling Bank", "visa": "N/A", "mastercard": "97.37%", "verve": "98.54%"},
    {"bankName": "Standard Chartered Bank", "visa": "100.00%", "mastercard": "N/A", "verve": "N/A"},
    {"bankName": "Wema Bank", "visa": "N/A", "mastercard": "100.00%", "verve": "99.26%"},
    {"bankName": "Union Bank Of Nigeria", "visa": "N/A", "mastercard": "100.00%", "verve": "98.91%"},
    {"bankName": "Taj Bank", "visa": "N/A", "mastercard": "N/A", "verve": "94.12%"},
    {"bankName": "First City Monument Bank", "visa": "N/A", "mastercard": "98.53%", "verve": "99.69%"},
    {"bankName": "United Bank For Africa", "visa": "98.27%", "mastercard": "97.86%", "verve": "99.07%"},
    {"bankName": "Westpac Banking Corporation", "visa": "N/A", "mastercard": "100.00%", "verve": "N/A"},
    {"bankName": "Fidelity Bank", "visa": "99.48%", "mastercard": "100.00%", "verve": "97.98%"}
];

const tableBody = document.getElementById('response-data');

responseData.forEach(data => {
    const row = document.createElement('tr');
    
    const bankNameCell = document.createElement('td');
    bankNameCell.textContent = data.bankName;
    row.appendChild(bankNameCell);
    
    const visaCell = document.createElement('td');
    visaCell.textContent = data.visa;
    row.appendChild(visaCell);
    
    const mastercardCell = document.createElement('td');
    mastercardCell.textContent = data.mastercard;
    row.appendChild(mastercardCell);
    
    const verveCell = document.createElement('td');
    verveCell.textContent = data.verve;
    row.appendChild(verveCell);

    tableBody.appendChild(row);
});