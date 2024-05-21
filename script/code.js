const workingnoradio = document.getElementById('working-no');
const salarydetailsdiv = document.getElementById('salary-details');

workingnoradio.addEventListener('change', function() {
    if (this.checked) {
        salarydetailsdiv.style.display = 'block';
    } else {
        salarydetailsdiv.style.display = 'none';
    }
});

function calculateSalary() {
    const salary = parseFloat(document.getElementById('salary').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);
   
    const netSalary = salary - (salary * (taxRate / 100));

    document.getElementById('salary-result').textContent = `Net Salary: $${netSalary.toFixed(2)}`;
    document.getElementById('result').style.display = 'block';
}