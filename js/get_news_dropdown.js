$(document).ready(function(){
	

adddropdown();	

function adddropdown(){

	console.log("adddropdown()");

		$.getJSON('get_news_header.php', function(data) {
                        /* data will hold the php array as a javascript object */
						
						console.log("data :"+data.length);
						if(data.length!=0){												 
							$.each(data, function(key, val) {								
								console.log(" adddropdown():: val.news_header: "+ key + val.news_header);
								$("#n-header").append("<option>" + val.news_header + "</option>");
							  });						
						}
						
						});
    
}















   

	  
	  

	  
	  
	  



});