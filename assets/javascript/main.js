var teams = [
	"dodgers",
	"astros",
	"cubs",
	"royals",
	"indians",
	"mets",
	"giants",
	"redsox",
	]

	teams.forEach(function(val, i){
		console.log(`val is ${val} and i is${i}`)
		$("#topics").append(`
		<button class="btn btn-primary teams" id=${val}>${val}</button>
			`)
	
	})

	$(".teams").on("click", function(){
		var topic=$(this).attr("id")
		console.log(topic);
		var queryURL = `https://api.giphy.com/v1/gifs/search?q=${topic}&api_key=dc6zaTOxFJmzC&limit=10`;

	})

	hey! and over xmas break, we will 