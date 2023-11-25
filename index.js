const form = document.querySelector("form");
const table = document.querySelector("table tbody");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const doctorID = document.getElementById("docID").value;
  const specialization = document.getElementById("dept").value;
  const experience = parseInt(document.getElementById("exp").value);
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mbl").value;

  let role;
  if (experience > 5) {
    role = "Senior";
  } else if (experience >= 2 && experience <= 5) {
    role = "Junior";
  } else {
    role = "Trainee";
  }

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${doctorID}</td>
    <td>${specialization}</td>
    <td>${experience}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${role}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;

  table.appendChild(newRow);

  form.reset();
});

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
