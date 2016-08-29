$(document).ready(function(){
	
adddropdown();	

function adddropdown(){

	console.log("adddropdown()");

		$.getJSON('get_advisories_header.php', function(data) {
                        /* data will hold the php array as a javascript object */
						
						console.log("data :"+data.length);
						if(data.length!=0){
						
							$.each(data, function(key, val) {								
								console.log(" adddropdown() :: val.advisories_header: "+ key + val.advisories_header);
								$("#a-header").append("<option>" + val.advisories_header + "</option>");
													
							  });
						
						}						
						
						});
  
}





});