const workingnoradio = document.getElementById("working-no");
const salarydetailsdiv = document.getElementById("salary-details");

workingnoradio.addEventListener("change", ()=> {
  if (workingnoradio.checked) {
    salarydetailsdiv.style.display = "block";
    salarydetailsdiv.classList.add("show");
    salarydetailsdiv.classList.remove("hide");
  } else {
    salarydetailsdiv.style.display = "none";
  }
  
});

function calculateSalary (){
const salary = document.getElementById("salary").value;
const taxRate = document.getElementById("tax-rate").value;
if(salary && taxRate){
    const netSalary = salary - (salary * (taxRate / 100));
    const resultDiv = document.getElementById("salary-result");
    resultDiv.innerHTML = `Net Salary: R${netSalary.toFixed(2)}`;
}
else{
    alert('Please fill out all fields');
}
}
