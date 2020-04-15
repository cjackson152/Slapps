
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

        for (var i = 0; i < response.length; i++) {
            if (i === 10) { break; }

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

      });
    }

$(".searchBtn").on("click", function(event) {
    event.preventDefault();
    inputArtist = $("#artist-input").val().trim();
    artistResult(inputArtist);
    });

