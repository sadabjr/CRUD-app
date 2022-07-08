var selectRow = null;

// Show Alert
function ShowAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// clear All fields
function clearField() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
}

// Add data
document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // get form values
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const rollNo = document.querySelector("#rollNo").value;

  // validate
  if (firstName == "" || lastName == "" || rollNo == "") {
    ShowAlert("Please fill in all fields", "danger");
  } else {
    if (selectRow == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm edit">Delete</a>
            `;
            list.appendChild(row);
            selectRow = null;
            ShowAlert("Student Added", "success");
    }
    else{
      selectRow.children[0].textContent = firstName;
      selectRow.children[1].textContent = lastName;
      selectRow.children[2].textContent = rollNo;
      selectRow = null;
      ShowAlert("Student info Edited", "info")

      clearField();
    }
  }
});


// Edit Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
  target = e.target;
  if (target.classList.contains("edit")) {
      selectRow = target.parentElement.parentElement;
      document.querySelector("#firstName").value = selectRow.children[0].textContent;
      document.querySelector("#lastName").value = selectRow.children[1].textContent;
      document.querySelector("#rollNo").value = selectRow.children[2].textContent;
  }

})



// delete Data

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    ShowAlert("Student Data Deleted", "danger");
  }
});


