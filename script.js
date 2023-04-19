document.querySelector("#tip-form").onchange = () => {
  // run function on change
  let bill = Number(document.getElementById("billTotals").value); // get input value as number
  let tip = document.getElementById("tipInput").value; // get range input value
  document.getElementById("tipOutput").innerHTML = `${tip}%`; // set output tip value
  let tipValue = bill * (tip / 100);
  let finalBill = bill + tipValue;
  document.getElementById("tipAmount").value = tipValue.toFixed(2); // set amount to tip amount
  document.getElementById("totalBillWithTip").value = finalBill.toFixed(2);
  document.getElementById("results").style.display = "block";
};
