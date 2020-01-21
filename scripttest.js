function getTable()
{
    var lat = $("#coordinatesOne").html();
    var lon = $("#coordinatesTwo").html();
    //generating the result table with the values fetched using http connection
    $(document).ready(function () {
    //proxy is used for smooth running of api used (DarkSky API), proxy reference is from stack overflow
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var urll = "";// use your api key here
  
    $.ajax({
      url: proxy + urll,
      contentType: "application/json",
      dataType: "json",
      type: "get",
      success: function (data) {
        //information needed to be displayed is arranged in a table format 
        // output is a string 
        var output = "<table class='table table-bordered'>"
        output += "<tr><th>" + "Timezone" + "</th><td>" + data["timezone"]  + "</td>" + "</tr>";
        output += "<tr><th>" + "Weather" + "</th><td>" + data["currently"]["summary"]  + "</td>" + "</tr>";
        output += "<tr><th>" + "Temperature (F)" + "</th><td>" + data["hourly"]["data"]["0"]["temperature"]  + "&#8457;</td>" + "</tr>";
        output += "<tr><th>" + "Temp in 3 (hrs)" + "</th><td>" + data["hourly"]["data"]["3"]["temperature"]  + "&#8457;</td>" + "</tr>";
        output += "<tr><th>" + "Temp in 6 (hrs)" + "</th><td>" + data["hourly"]["data"]["6"]["temperature"]  + "&#8457;</td>" + "</tr>";
        output += "<tr><th>" + "Humidity" + "</th><td>" + (data["currently"]["humidity"]) * 100 + "&#37;</td>" + "</tr>";
        output += "<tr><th>" + "Feels Like" + "</th><td>" + (data["currently"]["apparentTemperature"]) + "&#8457;</td>" + "</tr>";
        output += "<tr><th>" + "High" + "</th><td>" + data["daily"]["data"]["0"]["apparentTemperatureHigh"] + "&#8457;</td>" + "</tr>";
        output += "<tr><th>" + "Low" + "</th><td>" + data["daily"]["data"]["0"]["apparentTemperatureLow"]+ "&#8457;</td>" + "</tr>";
        
        
        
        //update element stores the entire output string.
        
        output += "</table>";
        $("#update").html(output);
        //displaying all data fetched using the api onto the console log
        console.log(data);
        
       
      }
    });
  });
}
