// from data.js
var tableData = data;
var rowData = tableData[0];

// log tableData in console
console.log(tableData);

// Add the following datum as the third entry of the data.js file
var dataAdd = {
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
}

tableData.splice(2, 0, dataAdd)
console.log(tableData);

// show data function
function showData() {

    // show tableData in html
    var htmlTbody = "";
    tableData.forEach(function (rowData) {
        console.log(rowData);
        htmlTbody += "<tr scope='row'>";

        htmlTbody += "<td>" + rowData.datetime + "</td>";
        htmlTbody += "<td>" + rowData.city + "</td>";
        htmlTbody += "<td>" + rowData.state + "</td>";
        htmlTbody += "<td>" + rowData.country + "</td>";
        htmlTbody += "<td>" + rowData.shape + "</td>";
        htmlTbody += "<td>" + rowData.durationMinutes + "</td>";
        htmlTbody += "<td>" + rowData.comments + "</td>";

        htmlTbody += "</tr>";
    });

    // log html table
    console.log(htmlTbody);

    // insert html table
    document.getElementById("tableBody").innerHTML = htmlTbody;

    return;
}

// Date filter
function myDateInput() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("dateFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]; // Date is the first column
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
  // City filter
function myCityInput() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("cityFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1]; // City is the second column
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
  
  // State filter
function myStateInput() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("stateFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2]; // State is the third column
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
  
  // Country filter
function myCountryInput() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("countryFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3]; // Country is the fourth column
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }

  // Shape filter
function myShapeInput() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("shapeFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4]; // Shape is the fifth column
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }

  // Shape filter
  function myDurationInput() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("durationFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5]; // Duration is the sixth column
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }

  // Comments filter
function myCommentsInput() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("commentsFilter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6]; // Comments is the seventh column
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
// show data
showData();