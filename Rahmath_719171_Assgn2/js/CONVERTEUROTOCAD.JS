//Name: Rahmath Ali Mohammed
//Roll no:719171
//web technology III assignment I
//endpoint = 'latest'; //end point such as latest,current,historical etc.,
api_key = 'e8403af2a6da4d7084c142036191402'; //access key

// define from symbol  http://api.apixu.com/v1/current.json?key=e8403af2a6da4d7084c142036191402&q=Toronto

symbol = 'INR';
// execute the conversion using the "convert" endpoint:
$(document).ready(function(){
$("#city").change(function(){
	
     var status = this.value;
     alert(status);
	 

var url='http://api.apixu.com/v1/current.json?key=' + api_key + '&q=' + status.toString()+ '';
    $.getJSON(url, function(data) {  <!--table data is assigning to html elements -->
        $("#tempvalue").html(`${data.current.temp_c}`);
		$("#Condvalue").html(`${data.current.condition.text.toString()}`);
		//$("#img1").html(`${data.current.condition.text.toString()}`);
		$("#img1").attr("src",'http://'+ `${data.current.condition.icon}` +'');

		// $("#base").html(`${data.base}`);
		// $("#date").html(`${data.date}`);
		// $("#trates").html(`${data.rates.CAD}`);
		
    });
   //if(status=="1")
     //$("#icon_class, #background_class").hide();// hide multiple sections
 //url: 'http://api.apixu.com/v1/current.json?key=' + api_key +'&q='+ this.value.toString(),  //URI AND its parameter access_key,symbols  
  });
  });