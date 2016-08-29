$(document).ready(function(){
	
getnewsheader();


function getnewsheader(){

	console.log("getnewsheader()");

		$.getJSON('get_news_header.php', function(data) {
                        /* data will hold the php array as a javascript object */
						
						console.log("data :"+data.length);
						if(data.length!=0){
						var tbody = $('#n-header tbody');
							var thead = $('#n-header thead');
							var trow = $('<tr>');
							$('<th>').html("NEWS AND EVENTS HEADER").appendTo(trow);  
							thead.append(trow);
							  
						 
							$.each(data, function(key, val) {
								var tr = $('<tr>');
								$('<td>').html(val.news_header+ '<br/>').appendTo(tr);                              
							
								console.log(" val.news_header: "+ key + val.news_header);
								tbody.append(tr);							
							  });
						
						}
						else{											
							$('#page-empty').html("PAGE UNDER CONSTRUCTION");							
							return false;
							}

						
						});
              




}


	  
	  



});