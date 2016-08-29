$(document).ready(function(){
	
getadvisoriesheader();

function getadvisoriesheader(){

	console.log("getadvisoriesheader()");

		$.getJSON('get_advisories_header.php', function(data) {
                        /* data will hold the php array as a javascript object */
						
						console.log("data :"+data.length);
						if(data.length!=0){
						var tbody = $('#a-header tbody');
							var thead = $('#a-header thead');
							var trow = $('<tr>');
							$('<th>').html("ADVISORIES HEADER").appendTo(trow);  
							thead.append(trow);
							
							$.each(data, function(key, val) {
								var tr = $('<tr>');
								$('<td>').html(val.advisories_header+ '<br/>').appendTo(tr);                              
							
								console.log(" val.advisories_header: "+ key + val.advisories_header);
								
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