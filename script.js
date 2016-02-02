$(document).ready(function(){
	
	$.ajax({
		type:'GET',
		url: "http://gateway.marvel.com:80/v1/public/characters/1009146?apikey=82658ec1b776363f8f0ae19ddc3da159",
		success: function(response,data,results){
			//console.log(data);

			var characters = response.data.results;
			console.log(characters);
			
			for (var i = 0; i < characters.length; i++){

				$('.abomination').append("<div>" + characters[i].name + "</div>");

				//console.log(characters[i].name, characters[i].id, characters[i].comics);
			}

		}
			
	});


$.ajax({
		type:'GET',
		url: 'http://gateway.marvel.com:80/v1/public/characters/1009146/series?apikey=82658ec1b776363f8f0ae19ddc3da159',
		success: function(response,data,results){

			var comicbooks = response.data.results;

			for (var i = 0; i < comicbooks.length; i++){

				$('.abomination').append("<div>" + comicbooks[i].title + "</div>");

				//console.log(comicbooks[i].series);
			}
		}


	});

	// 	$.ajax({
	// 	type:'GET',
	// 	url: "http://gateway.marvel.com:80/v1/public/characters/1009148?apikey=82658ec1b776363f8f0ae19ddc3da159",
	// 	success: function(response,data,results){
			

	// 		var absorbingman = response.data.results;
			
	// 		for (var i = 0; i < absorbingman.length; i++){

	// 			$('.absorbing').append(absorbingman[i].name);

	// 			//console.log(characters[i].name, characters[i].id, characters[i].comics);
	// 		}

	// 	}
			
	// });

// 	$.ajax({
// 		type:'GET',
// 		url: 'http://gateway.marvel.com:80/v1/public/characters/1009148/comics?apikey=82658ec1b776363f8f0ae19ddc3da159',
// 		success: function(response,data,results){

// 			var absorbing = response.data.results;

// 			for (var i = 0; i < absorbing.length; i++){

// 				$('.absorbing').append(absorbing[i].title);
// 			}

// 		}
// 	});


// 	$.ajax({
// 		type:'GET',
// 		url: 'http://gateway.marvel.com:80/v1/public/characters/1010354?apikey=82658ec1b776363f8f0ae19ddc3da159',
// 		success: function(response,data,results){

// 			var adamwarlock = response.data.results;

// 			for (var i = 0; i < adamwarlock.length; i++){

// 				$('.adamwarlock').append(adamwarlock[i].name);
// 			}
// 		}
// 	});

// 	$.ajax({
// 		type:'GET',
// 		url: 'http://gateway.marvel.com:80/v1/public/characters/1010354/comics?apikey=82658ec1b776363f8f0ae19ddc3da159',
// 		success: function(response,data,results){

// 			var adam = response.data.results;

// 			for (var i = 0; i < adam.length; i++){

// 				$('.adamwarlock').append(adam[i].title);
// 			}
// 		}
// 	});

// 	$.ajax({
// 		type:'GET',
// 		url: 'http://gateway.marvel.com:80/v1/public/characters/1011031?apikey=82658ec1b776363f8f0ae19ddc3da159',
// 		success: function(response,data, results){

// 			var agentx = response.data.results;

// 			for (var i = 0; i = agentx.length; i++){

// 				// $('.agentx').append(agentx[i].name);
// 			}
// 		}
// 	});

// 	$.ajax({
// 		type:'GET',
// 		url: 'http://gateway.marvel.com:80/v1/public/characters/1011031/comics?apikey=82658ec1b776363f8f0ae19ddc3da159',
// 		success: function(response,data,results){

// 			var agent = response.data.results;

// 			for (var i = 0; i < agent.length; i++){

// 				$('.agentx').append(agent[i].title);
// 			}
// 		}
// 	});


});
