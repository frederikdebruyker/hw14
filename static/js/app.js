// from data.js
var tableData = data;

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
// console.log(tableData);

// show data function
function showData() {

    // Get a reference to the table body
    var tableBody = d3.select("tbody");

    tableData.forEach((ufosightings) => {
        var row = tableBody.append("tr");
        Object.values(ufosightings).forEach((value) => {
            row.append("td").text(value);
        });
    });

    return;
}

// show data
showData();

// Full filter - multi fields
function myInputFilter() {
    // define filter
    var fullFilter = [];
    // Structure
    // // Select the input element and get the raw HTML node
    // var inputElement = d3.select("#dateInput");
    // // Get the value property of the input element
    // var inputValue = inputElement.property("value");
    // console.log(inputValue);

    fullFilter['dateFilter'] = d3.select("#dateFilter").property("value");
    fullFilter['cityFilter'] = d3.select("#cityFilter").property("value");
    fullFilter['stateFilter'] = d3.select("#stateFilter").property("value");
    fullFilter['countryFilter'] = d3.select("#countryFilter").property("value");
    fullFilter['shapeFilter'] = d3.select("#shapeFilter").property("value");
    fullFilter['durationFilter'] = d3.select("#durationFilter").property("value");
    fullFilter['commentsFilter'] = d3.select("#commentsFilter").property("value");

    // Declare variables 
    var filterKeys = Object.keys(fullFilter);
    var table, tr, i, j, input, filter, td, txtValue;

    // read the tableBody from the html -> is singular value in this case
    table = document.getElementById("tableBody");
    // read all the table rows defined
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        // table row is displayed by default
        tr[i].style.display = "";
        // initialize
        j = 0;
        for (var filterKey of filterKeys) {
            td = tr[i].getElementsByTagName("td")[j];
            input = document.getElementById(filterKey);
            filter = input.value.toUpperCase();
            j++;
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                    // row should not be displayed if any cell if filtered out
                    break;
                }
            }
        }
    }
}


// show data
showData();