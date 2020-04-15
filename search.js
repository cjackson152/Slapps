
function artistResult(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=past";
    // var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(response)

        // venueVal = response[0].venue.name;
        // countryVal = response[0].venue.country;
        // dateVal = response[0].dateTime;

        artistName = $("<p>").text("Upcoming Events for " + artist)
        
        $("#artist-upcoming").empty();
        $("#artist-upcoming").append(artistName)
        let arr = [];
        // first start from array of most recently ended events
        for (var i = response.length - 1; i > 0; i--) {

                if (i === response.length - 10) { break; }
                arr.push(response[i]);
                // dateTime = response[i].datetime;
                // dateOnly = dateTime.slice(0,9)
    
                var buttons = $('<button>'+ "Save" + '</button>')
                buttons.addClass("saveBtn") 
                buttons.appendTo('#saveBtnCol'); 
    
                countryCol = $("<p>").text(response[i].venue.country)
                venueCol = $("<p>").text(response[i].venue.name)
                dateCol = $("<p>").text(response[i].datetime.slice(0,10))
    
                $("#artist-country").append(countryCol)
                $("#artist-venue").append(venueCol)
                $("#artist-date").append(dateCol)
            }
            // break out of outer loop when 10 events acquired

console.log("arr: ", arr);
      });
    }

$(".searchBtn").on("click", function(event) {
    event.preventDefault();
    inputArtist = $("#artist-input").val().trim();
    artistResult(inputArtist);
    });

