$(document).ready(function(){
	
	$.ajax({
		type:'GET',
		url: "http://gateway.marvel.com:80/v1/public/characters?apikey=82658ec1b776363f8f0ae19ddc3da159",
		success: function(response,data,results){
			//console.log(data);

			var characters = response.data.results;
			
			for (var i = 0; i < characters.length; i++){
				var someVariable = 'some name';

				// $('.characters-wrapper').append("<div class='rcorners'>Rounded corners! " + characters[i].name + "</div>");
				// $('.characters-wrapper').append("<img src='" + characters[i].image_url + "' />");

				console.log(characters[i].name,characters[i].description,characters[i].comics,characters[i].series,characters[i].type);
			}

		}
			
	});

});