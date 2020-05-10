// from data.js
var tableData = data;

// Getting a reference to the button
var button = d3.select("#button");

// Usinf the `on` function in d3 to attach an event to the handler function
button.on("click", function() {
    // reference to the input field and its value
    var inputDate = d3.select("#input-date").property("value")
    // var inputCity = d3.select("#input-city").property("value").toLowerCase()
    // var inputState = d3.select("#input-state").property("value").toLowerCase()
    // var inputCountry = d3.select("#input-country").property("value").toLowerCase()
    // var inputShape = d3.select("#input-shape").property("value").toLowerCase()

    

    // filter data by the datetime
    var filterData = tableData.filter(siting => siting.datetime === inputDate)

    // clear previous data
    var tbody = d3.select("tbody")
    tbody.html("")

    if (filterData.length == 0) {
        alert(`We have no data for ${inputDate}
            \nMake sure the date is in m/d/yyyy format
            \nOR try another date.`);
    } else{
    // Use the forEach to add values to the table
    filterData.forEach((ufo_siting) => {
        // add row
        var row = d3.select("tbody").append("tr")
        
        // go thorugh the filtered data
        Object.entries(ufo_siting).forEach(([key,value])=>{
            // add cell in each row
            var cell = row.append("td")
            cell.text(value)
        })
    })}
})