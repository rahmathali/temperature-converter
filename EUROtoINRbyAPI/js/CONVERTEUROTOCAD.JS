//Name: Rahmath Ali Mohammed
//Roll no:719171
//web technology III assignment I
endpoint = 'latest'; //end point such as latest,current,historical etc.,
access_key = '6c10b7971019166e2428c5067e98f765'; //access key

// define from symbol

symbol = 'INR';
// execute the conversion using the "convert" endpoint:
$.ajax({  //asynchronous jquery request to the fixer.io website where current exchange rate of currency of all the world
    url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key+'&symbols=' + symbol ,  //URI AND its parameter access_key,symbols  
    dataType: 'jsonp',
    success: function(data) {

        // access the  result in json.data
        
          $("#timestampvalue").html(data.timestamp); //timestamp assigned to td 
		  $("#basevalue").html(data.base);//base value assigned to table
		  $("#datevalue").html(data.date);//date assigned to table
		  $("#currencyvalue").html(data.rates.INR); //currency value assigned to table
    }
});